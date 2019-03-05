import { Injectable } from '@angular/core';
import {HttpRequest,HttpEventType,HttpHeaders,HttpErrorResponse,HttpResponse,HttpClient} from '@angular/common/http';
import {GVarsService} from '../GVars/gvars.service';
import {AuthService} from '../Auth/auth.service';
import {Observable,EMPTY, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient,public GV:GVarsService,public Auth:AuthService) {}

/*==================( callFun )=================================*/
/**
  * @purpose = HTTP calls
  * @param = {url, method, data, uploading, noToken, noloading, root, IgnoreSuccess, lang, responseType} - callback
  * @callback = HTTP response
*/
  callFun(op,cb){this.GV.uploading=op.uploading;this.GV.uploaded=0;this.GV.G_Running=!op.noloading;
    let headers:any ={}
    if(!op.noToken && this.Auth.loadToken()){headers.Authorization=this.Auth.loadToken();}
    op.lang=op.lang?((RegExp(/\?/g).test(op.url)?'&':'?')+'lang='+op.lang):''
    let req = new HttpRequest(op.method, (op.root?op.root:this.GV.serverURL)+op.url+op.lang, op.data, {responseType: op.responseType,headers:new HttpHeaders(headers),reportProgress: op.uploading});
    this.http.request(req).pipe(catchError(e => this.HttpErrHandler(e) )).subscribe((data:any)=> {
      if (data.type === HttpEventType.UploadProgress){this.GV.uploaded = Math.round(100 * data.loaded / data.total);}
      else if(data instanceof HttpResponse){    //console.log('=======HttpErrHandler 22=========',data)
        this.GV.uploading=this.GV.G_Running=false;
        if((data.body && data.body.success) || op.IgnoreSuccess){cb(null,data.body)}
        else{swal('Failed ', data.body.msg?data.body.msg:'', 'error');cb('Error:'+data.body.msg?data.body.msg:'',null)}
      }
    },(err)=>{this.GV.uploading=this.GV.G_Running=false;swal('Failed ',err?err:'', 'error');cb('Error:'+err,null)}); }
/*===============(Http Error Handler)==========================*/
/**
  * @purpose = Handl HTTP errors
  * @param = HttpErrorResponse
  * @return = error message
*/
  HttpErrHandler(res: HttpErrorResponse): Observable<any>{let errMsg;
    console.log('=======HttpErrHandler=========',res)
    if(res.status === 0){
      errMsg='server does not respond ';
    }
    else if(res.status === 404){
      errMsg='this route is not exist';
    }
    else if(res.status === 401){
      // do Unauthorized stuff here
      this.Auth.logout();
      errMsg=' Unauthorized user .. please login to continue ';}
    else{ errMsg= res.message;}
   return throwError(errMsg);}
/*============================================================*/

}

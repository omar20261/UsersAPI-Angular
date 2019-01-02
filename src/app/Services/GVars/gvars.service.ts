import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GVarsService {
  G_Running:boolean ;
  serverURL:string=environment.apiUrl;
  uploading:boolean;
  uploaded:number=0;
  constructor() { }

  CheckKeys(opj,arr){return _.findLast(_.map(arr,x=>(_.isEmpty(opj[x])&&!_.isNumber(opj[x]))?x:false),(x)=>x!=false);}

}

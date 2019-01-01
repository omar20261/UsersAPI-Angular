import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GVarsService {
  G_Running:boolean ;
  serverURL:string=environment.apiUrl;
  uploading:boolean;
  uploaded:number=0;
  constructor() { }
}

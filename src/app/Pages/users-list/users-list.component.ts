import { Component, OnInit } from '@angular/core';
import { APIService } from '../../Services/API/api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  AddUserPopup:boolean=false;
  DeleteUserPopup:boolean=false;
  MoreInfo:boolean=false;
  items:any=[];
  items_count:number=0;
  PageNumber:number=1;
  LoadingMoreIcon:boolean=false;
  selectedItem:any={}
  Object:any=Object;
  Math:any=Math;
  constructor(public API:APIService) {
    this.get(false,false)
  }

  ngOnInit() {

  }

  get(Page,cb){
    let _Page=(Page?Page:Math.ceil((this.items_count+1)/7))
    this.API.callFun({url:'/CustomersList?Page='+_Page+'&PerPage='+7,method:'GET'},(err,d)=>{
      if(d){
        this.items= _Page>1?_.uniqBy(this.items.concat(d.doc), '_id'):d.doc;
        this.items_count=d.count;
      }
      if(cb){cb();}
    });
  }

  AddedItem(item){
    this.items.unshift(item);
    this.items_count++;
  }

  ImgPath(img,def){return img?(img.length > 24)?img:this.API.GV.serverURL+'/render/'+img:def;}

  UpdatedItem(item){
    let ind = _.findIndex(this.items,{_id:item._id})
    this.items.splice(ind,1,item);
  }

  DeletedItem(item){
    this.MoreInfo=false;
    let ind = _.findIndex(this.items,{_id:item._id});
    this.items.splice(ind,1);
    let page=Math.ceil((this.items_count+1)/7)-1;
    this.get(page,false);
  }

}

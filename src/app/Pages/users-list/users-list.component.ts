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
  items_count:number;
  PageNumber:number=1;
  LoadingMoreIcon:boolean=false;
  selectedItem:any={}
  Object:any=Object;
  constructor(private API:APIService) {
    this.get(this.PageNumber,false)
  }

  ngOnInit() {

  }

  get(num,cb){
    this.API.callFun({url:'/api?num='+num,method:'GET'},(err,d)=>{
      if(d){
        this.items= num>1?this.items.concat(d.doc):d.doc;
        this.items_count=d.count;
        this.PageNumber++;
      }
      if(cb){cb();}
    });
  }

  AddedItem(item){
    this.items.unshift(item);
    this.items_count++;
  }

  UpdatedItem(item){
    let ind = _.findIndex(this.items,{_id:item._id})
    this.items.splice(ind,1,item);
  }

  DeletedItem(item){
    this.MoreInfo=false;
    let ind = _.findIndex(this.items,{_id:item._id});
    this.items.splice(ind,1);
    this.items_count--;
  }


}

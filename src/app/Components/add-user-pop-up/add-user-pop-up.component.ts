import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { APIService } from '../../Services/API/api.service';

@Component({
  selector: 'app-add-user-pop-up',
  templateUrl: './add-user-pop-up.component.html',
  styleUrls: ['./add-user-pop-up.component.css']
})
export class AddUserPopUpComponent implements OnInit {
  @Output() Close = new EventEmitter<any>();
  @Output() Updated = new EventEmitter<any>();
  @Output() Added = new EventEmitter<any>();
  @Input() item:any;
  constructor(private API:APIService) {

  }

  ngOnInit() {
  }

  post(){
    let leftVal= this.API.GV.CheckKeys(this.item,['jobTitle','name']);
    if(leftVal){return swal('Error', 'please fill all fields ..  no '+leftVal+' entered', 'warning');}
    this.API.callFun({url:'/api',method:'POST',data:this.item,uploading:true},(err,d)=>{
      if(d){
        this.Close.emit()
        this.Added.emit(d.doc)
        swal('Success', '', 'success');
      }
    });
  }

  update(){
    let leftVal= this.API.GV.CheckKeys(this.item,['jobTitle','name']);
    if(leftVal){return swal('Error', 'please fill all fields ..  no '+leftVal+' entered', 'error');}
    this.API.callFun({url:'/api',method:'PUT',data:this.item,uploading:true},(err,d)=>{
      if(d){
        this.Close.emit()
        this.Updated.emit(d.doc)
        swal('Success', '', 'success');
      }
    });
  }

}

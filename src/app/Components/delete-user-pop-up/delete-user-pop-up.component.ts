import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { APIService } from '../../Services/API/api.service';

@Component({
  selector: 'app-delete-user-pop-up',
  templateUrl: './delete-user-pop-up.component.html',
  styleUrls: ['./delete-user-pop-up.component.css']
})
export class DeleteUserPopUpComponent implements OnInit {
  @Output() Close = new EventEmitter<any>();
  @Output() Deleted = new EventEmitter<any>();
  @Input() item:any={};

  constructor(private API:APIService) { }

  ngOnInit() {
  }

  delete(id){
    if(!id){return swal('Faild','invalid User ID', 'error');;}
      this.API.callFun({url:'/api?id='+id,method:'DELETE'},(err,d)=>{
        if(d){
          this.Close.emit()
          this.Deleted.emit(this.item);
          swal('Success','', 'success');
        }
     });
   }

}

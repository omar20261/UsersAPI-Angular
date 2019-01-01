import { Component } from '@angular/core';
import { GVarsService } from './Services/GVars/gvars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public GV:GVarsService){}
}

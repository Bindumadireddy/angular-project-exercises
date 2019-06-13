import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num:any=200;
  dis:any;
   Mybutton(event:any)
   {
     if(this.num>0)
     {
       this.dis=""
     }
       this.num=this.num+10;

   }
   mybutton(event:any)
   {
     if(this.num==10)
     {
       this.dis="disabled"
     }
       this.num=this.num-10
     

   }
}

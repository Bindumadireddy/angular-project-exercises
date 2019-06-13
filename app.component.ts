import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num:string="";
 
  display:string="";
  count=0;
  result:any;
  operators:string="";
  array=[]
 
  value(numbers){
    this.num=this.num+numbers;
    this.display=`${this.num}`;
  }
  oper(operations)
  {
    if(this.count==0)
    {
      this.num=this.num+operations;
    this.operators=operations;
    this.count=1;
    
    this.display=`${this.num}`;
  }}
  evaluate(){
    this.display=`${this.num}`;
    this.array=this.num.split(this.operators);
  
  switch(this.operators)
  {
    case "+":
            this.result=parseInt(this.array[0])+parseInt(this.array[1])
            break;
    case "-":
            this.result=parseInt(this.array[0])-parseInt(this.array[1])
            break;
  case "*":
            this.result=parseInt(this.array[0])*parseInt(this.array[1])
            break;
case "/":
            this.result=parseInt(this.array[0])/parseInt(this.array[1])
            break;        
    }        
    }
    clear()
    {
      this.num="";
 
      this.display="";
      this.count=0;
      result:undefined;
      this.operators="";
      this.array=[]
    }
  }

  
 




  
  
  
  



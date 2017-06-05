import { Employee } from '../models/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  public languages:string[] = ['English', 'Spanish', 'Other'];
  public employee:Employee = new Employee('','',true,'W2','default');
  public hasPrimaryLanguageError:boolean = false;


  constructor() { }

  ngOnInit() {

  }

public validatePrimaryLanguage(value:string):void{
  this.hasPrimaryLanguageError = false;

  if(value === 'default')
  {
    this.hasPrimaryLanguageError = true;
  }

}



}

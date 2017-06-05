import { NgForm } from '@angular/forms';
import { FormPosterService } from '../services/form-poster.service';
import { Employee } from '../models/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  public languages:string[] = [];
  public employee:Employee = new Employee('','',true,'W2','default',new Date());
  public hasPrimaryLanguageError:boolean = false;
  public startDate:Date;

  constructor(private formPosterService: FormPosterService) { }

  ngOnInit() {
    this.formPosterService.getLanguages()
    .subscribe(
      (data) => {this.languages = data.languages;},
      (err) => {console.log('error on getting languanges',err)},
      () => {}
    );

  }


public submitForm(myForm:NgForm):void{

 this.validatePrimaryLanguage(this.employee.primaryLanguage);
 if(this.hasPrimaryLanguageError) return;

  this.formPosterService.postEmployeeForm(this.employee)
  .subscribe(
    (data) => {console.log('success',data)},
    (err) => {console.log('error',err)},
    () => {console.log('complete')}
  );
}


public validatePrimaryLanguage(value:string):void{
  this.hasPrimaryLanguageError = false;

  if(value === 'default')
  {
    this.hasPrimaryLanguageError = true;
  }

}

}
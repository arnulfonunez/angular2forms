import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/employee.model';
import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class FormPosterService {

private baseUrl:string = 'http://localhost:3100/';

  constructor(private http:Http) { }

  public postEmployeeForm(employee:Employee):Observable<any>{

    let url:string = this.baseUrl + "postemployee";
    let body:string = JSON.stringify(employee);
    let headers:Headers = new Headers({'content-type':'application/json'});
    let options:RequestOptions = new RequestOptions({headers:headers});
    return this.http.post(url,body,options)
    .map(this.extractData)
    .catch(this.handleError);

  }

public getLanguages():Observable<any>{

  let url:string = this.baseUrl + "getLanguages";
  return this.http.get(url)
  .map(this.extractData)
  .catch(this.handleError);

}


private extractData(res:Response):any{
  let body = res.json();
  console.log('extract data',body);
  return body.data || {};
}

private handleError(error: any):Observable<any>{
  console.error('post error', error);
  console.error('post error text', error.statusText);
  return Observable.throw(error.statusText);
}

}

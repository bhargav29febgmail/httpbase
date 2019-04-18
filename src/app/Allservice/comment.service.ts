import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{biodata} from '../biodat'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http : HttpClient) { }

   mydata():Observable<biodata[]>{
     return this.http.get<biodata[]>('http://jsonplaceholder.typicode.com/comments');
   }



}

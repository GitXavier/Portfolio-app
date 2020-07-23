import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  post(blog: Blog): Observable<Blog>{
    return this.httpClient.post<Blog>(`${environment.APIURI}blogs`, blog);
  }
}

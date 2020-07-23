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


  getAll(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(`${environment.APIURI}blogs`);
  }

  getById(id: number): Observable<Blog>{
    return this.httpClient.get<Blog>(`${environment.APIURI}blogs/` + id);
  }

  post(blog: Blog): Observable<Blog>{
    return this.httpClient.post<Blog>(`${environment.APIURI}blogs`, blog);
  }

  delete(id: number): Observable<void>{
    return this.httpClient.delete<void>(`${environment.APIURI}blogs/` + id);
  }

  patch(blog: Blog, id: number): Observable<Blog>{
    return this.httpClient.patch<Blog>(`${environment.APIURI}blogs/` + id, blog);
  }
}

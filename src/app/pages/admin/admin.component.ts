import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  blog: Blog = new Blog();

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  getHashtags(blogHashtag) {
    Object.assign(this.blog, blogHashtag);
  }

  send() {
    this.blogService.post(this.blog).subscribe();
    console.log(this.blog);
  }

}

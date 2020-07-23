import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void { this.getAllBlogs(); }

  getAllBlogs() {
    this.blogService.getAll().subscribe((blogs) => {
      this.blogs = blogs;
    });
  }

}

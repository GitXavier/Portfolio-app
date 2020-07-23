import { Component, OnInit} from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  blog = new Blog();
  blogs: Blog[] = [];
  blogId: number;
  valueBlogId = false;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void { this.getAllBlogs(); }

  deleteBlog(blogId) {
    this.blogService.delete(blogId).subscribe(() => {
      this.getAllBlogs();
    });
  }

  blogById(blogId) {
    this.blogService.getById(blogId).subscribe((blog) => {
      this.blog = blog;
      this.valueBlogId = true;
      this.blogId = blogId;
    });
  }

  getAllBlogs() {
    this.blogService.getAll().subscribe((blogs) => {
      this.blogs = blogs;
    });
  }

  getHashtags(blogHashtag) {
    console.log(blogHashtag);
    Object.assign(this.blog, blogHashtag);
    console.log(blogHashtag);
  }

  send() {

    if (this.valueBlogId === true) {

      console.log('patch');
      console.log(this.blogId);
      this.blogService.patch(this.blog, this.blogId).subscribe(() => {
        this.valueBlogId = false;
        this.blogId = null;
        this.blog = new Blog();
        this.getAllBlogs();
      });
    } else {
      console.log('post');
      this.blogService.post(this.blog).subscribe(() => {
        this.getAllBlogs();
      });
    }
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() blogs: Blog[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

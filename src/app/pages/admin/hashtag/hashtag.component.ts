import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { HashtagService } from 'src/app/services/hashtag.service';
import { Hashtag } from 'src/app/models/hashtag';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Subscription, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

export interface User {
  name: string;
}

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.scss']
})
export class HashtagComponent implements OnInit {


  subscription = new Subscription();
  selectable = true;
  removable = true;
  blogHashtag: Blog = new Blog();
  @Input() set blog(blog: Blog) {

    if ( blog?.hashtags ) {
      this.hashtags = blog.hashtags;
      this.blogHashtag.id = blog.id;
    }
  }
  allHashtags: Hashtag[] = [];
  hashtags: Hashtag[] = [];

  @Output() blogWithHashtagEvent = new EventEmitter();

  filteredHashtags: Observable<any[]>;
  hashtagCtrl = new FormControl();

 @ViewChild('auto') matAutocomplete: MatAutocomplete;


  constructor(private hashtagService: HashtagService, private blogService: BlogService ) { }

  ngOnInit(): void {
    this.getHashtags();
  }

  getHashtags() {
    const getHashtagsSubscription = this.hashtagService.getAll().subscribe((hashtags: Hashtag[]) => {

      if (hashtags) { this.allHashtags = hashtags; }

      this.hashtagCtrl.setValue(null);

      if (!this.filteredHashtags) { this.listenChanges(); }

    });

    this.subscription.add(getHashtagsSubscription);
  }

  listenChanges() {
    this.filteredHashtags = this.hashtagCtrl.valueChanges
    .pipe(
      startWith(''),
      map(hashtag => {
        if (hashtag && typeof hashtag === 'string') {
          return this._filter(hashtag);
        }
        if (this.allHashtags && this.allHashtags.length > 0) {
          return this.allHashtags.slice();
        }
      })
    );
  }

  _filter(value: string): any {
    const filterValue = value.toLowerCase();
    return this.allHashtags.filter(hashtag => hashtag.name.toLowerCase().indexOf(filterValue) === 0);
  }

  remove(hashtag: Hashtag): void {
    for (let i = 0; i < this.hashtags.length; i++) {
      if (this.hashtags[i].id === hashtag.id) {
        this.hashtags.splice(i , 1);
        break;
      }
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.hashtags.push(event.option.value);
    this.hashtagCtrl.setValue(null);
    this.blogHashtag.hashtags = [...this.hashtags];
    this.blogWithHashtagEvent.emit(this.blogHashtag);

  }
}

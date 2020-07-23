import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './pages/site/site.component';
import { PortfolioComponent } from './pages/site/portfolio/portfolio.component';
import { BlogComponent } from './pages/site/blog/blog.component';
import { HeaderComponent } from './pages/site/shared/header/header.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HashtagComponent } from './pages/admin/hashtag/hashtag.component';
import { UploadComponent } from './pages/admin/upload/upload.component';
import { ListComponent } from './pages/admin/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    PortfolioComponent,
    BlogComponent,
    HeaderComponent,
    AdminComponent,
    HashtagComponent,
    UploadComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

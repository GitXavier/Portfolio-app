import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './pages/site/site.component';
import { PortfolioComponent } from './pages/site/portfolio/portfolio.component';
import { BlogComponent } from './pages/site/blog/blog.component';
import { HeaderComponent } from './pages/site/shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    PortfolioComponent,
    BlogComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

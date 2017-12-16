import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewsService } from './news.service'
import { NewsComponent } from './news/news.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { NewsDetailComponent } from './news-detail/news-detail.component'



@NgModule({
  declarations: [
    AppComponent,
      NewsComponent,
      NewsDetailComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [NewsComponent]
})
export class AppModule { }

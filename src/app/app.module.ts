import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ServeService } from './serve.service';

import { AppComponent } from './app.component';
import { LayoutComponent } from './ui/components/layout/layout.component';
import { HeaderComponent } from './ui/components/header/header.component';
import { FooterComponent } from './ui/components/footer/footer.component';
import { NewsComponent } from './news/news.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    NotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

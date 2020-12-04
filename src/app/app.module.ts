import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LibraryComponent } from './library/library.component';
import { OurbooksComponent } from './ourbooks/ourbooks.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    LibraryComponent,
    OurbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

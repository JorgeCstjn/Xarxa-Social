import { Routing } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { ListComponent } from './component/list/list.component';
import { DetailsComponent } from './component/details/details.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,

    ListComponent,
    DetailsComponent
  ],
  imports: [
  BrowserModule,
  ReactiveFormsModule,
  FormsModule,
  Routing
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

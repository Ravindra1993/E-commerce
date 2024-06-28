import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EndUserDashboardComponent } from './components/end-user/end-user-dashboard/end-user-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { ProductComponent } from './components/shared/product/product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EndUserDashboardComponent,
    SideBarComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

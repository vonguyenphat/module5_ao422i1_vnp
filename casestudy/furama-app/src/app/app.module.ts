import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ListServiceComponent } from './furama/service-furama/list-service/list-service.component';
import { ListCustomerComponent } from './furama/customer-furama/list-customer/list-customer.component';
import { HeaderAdminComponent } from './layout/header-admin/header-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListServiceComponent,
    ListCustomerComponent,
    HeaderAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

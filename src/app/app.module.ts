import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { AppInventoryComponent } from './app-inventory/app-inventory.component';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AppServiceService } from './services/app-service.service';
import { MultiplierPipe } from './pipe/multiplier.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FilterPipe } from './filter.pipe';
import { OrderrByPipe } from './orderr-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AppInventoryComponent,
    HomeComponent,
    ProductFormComponent,
    MultiplierPipe,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    FilterPipe,
    OrderrByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    AppServiceService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './users/user/user.component';
import { CompaniesComponent } from './companies/companies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { AgGridModule } from 'ag-grid-angular';
import { UserEditComponent } from './users/user/user-edit/user-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyComponent } from './companies/company/company.component';
import { CompanyEditComponent } from './companies/company/company-edit/company-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    UserComponent,
    CompaniesComponent,
    UserEditComponent,
    CompanyComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    AgGridModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

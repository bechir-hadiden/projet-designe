import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginAdminComponent } from '../login-admin/login-admin.component';
import { AcceuilComponent } from '../acceuil/acceuil.component';




@NgModule({
  declarations: [
    LoginAdminComponent , 
  ],
  exports: [LoginAdminComponent],

  imports: [
    
    CommonModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {
}

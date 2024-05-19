import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListEvenementsComponent } from './list-evenements/list-evenements.component';
import { UpdateEvenementsComponent } from './update-evenements/update-evenements.component';
import { AjouterEvenementsComponent } from './ajouter-evenements/ajouter-evenements.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { Page1Component } from './page1/page1.component';
import { TttttComponent } from './ttttt/ttttt.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { DifferanceEvenementsComponent } from './differance-evenements/differance-evenements.component';

export const routes: Routes = [


    {path : 'contact' , component :ContactComponent},
    {path :'test' , component:TestComponent},
    {path : 'login' , component:LoginAdminComponent},
    {path : 'acceuil' , component:AcceuilComponent},
    {path : 'dashboard' , component:DashboardComponent},
    {path : 'listEvenements' , component:ListEvenementsComponent},
    {path : 'updateEvenements' , component:UpdateEvenementsComponent},
    {path : 'AjouterEvenements' , component:AjouterEvenementsComponent},
    {path : 'Evenements' , component:EvenementsComponent},
    {path : 'page1' , component:Page1Component},
    {path : 't' , component:TttttComponent},
    {path : 'slide' , component:SliderComponent},
    {path : 'home' , component:HomeComponent},
    {path : 'differance' , component:DifferanceEvenementsComponent},











];

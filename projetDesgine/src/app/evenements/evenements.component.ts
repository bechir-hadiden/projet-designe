import { Component } from '@angular/core';
import { AcceuilComponent } from "../acceuil/acceuil.component";
import { TestComponent } from "../test/test.component";
import { HomeComponent } from "../home/home.component";

@Component({
    selector: 'app-evenements',
    standalone: true,
    templateUrl: './evenements.component.html',
    styleUrl: './evenements.component.css',
    imports: [AcceuilComponent, TestComponent, HomeComponent]
})
export class EvenementsComponent {

}

import { Component } from '@angular/core';
import { AcceuilComponent } from "../acceuil/acceuil.component";
import { TestComponent } from "../test/test.component";

@Component({
    selector: 'app-list-evenements',
    standalone: true,
    templateUrl: './list-evenements.component.html',
    styleUrl: './list-evenements.component.css',
    imports: [AcceuilComponent, TestComponent]
})
export class ListEvenementsComponent {

}

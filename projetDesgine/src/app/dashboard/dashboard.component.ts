import { Component } from '@angular/core';
import { AcceuilComponent } from "../acceuil/acceuil.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [AcceuilComponent]
})
export class DashboardComponent {

}

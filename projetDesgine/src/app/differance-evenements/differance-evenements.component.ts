import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { SliderComponent } from "../slider/slider.component";

@Component({
    selector: 'app-differance-evenements',
    standalone: true,
    templateUrl: './differance-evenements.component.html',
    styleUrl: './differance-evenements.component.css',
    imports: [HomeComponent, SliderComponent]
})
export class DifferanceEvenementsComponent {

}

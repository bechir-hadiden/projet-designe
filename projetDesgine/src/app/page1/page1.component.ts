import { Component } from '@angular/core';
import { AcceuilComponent } from "../acceuil/acceuil.component";

@Component({
    selector: 'app-page1',
    standalone: true,
    templateUrl: './page1.component.html',
    styleUrl: './page1.component.css',
    imports: [AcceuilComponent]
})
export class Page1Component {

}

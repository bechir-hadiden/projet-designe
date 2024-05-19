import { Component } from '@angular/core';
import { TestComponent } from "../test/test.component";

@Component({
    selector: 'app-ajouter-evenements',
    standalone: true,
    templateUrl: './ajouter-evenements.component.html',
    styleUrl: './ajouter-evenements.component.css',
    imports: [TestComponent]
})
export class AjouterEvenementsComponent {

  today: string;


  constructor() {

    const currentDate = new Date();
    const dd = String(currentDate.getDate()).padStart(2, '0');
    const mm = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const yyyy = currentDate.getFullYear();
    this.today = `${yyyy}-${mm}-${dd}`;
    
  }
  async send() {
   
    alert('Successful');
  }
  onSubmit() {
    console.log("ssssssssssssssssssssssss");
    window.alert("Succès!");
  }

}
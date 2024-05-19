import { Component } from '@angular/core';
import { AcceuilComponent } from "../acceuil/acceuil.component";
import { TestComponent } from "../test/test.component";
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from "../home/home.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [AcceuilComponent, TestComponent, HomeComponent]
})
export class ContactComponent {

  today: string;
  contactForm!: FormGroup;

  form : FormGroup = this.fb.group({
    from_name:'',
    to_name:'admin',
    from_email:'',
    sujet:'',
    subjectif:'',
    message:'',
  });

  constructor(private fb:FormBuilder ,  private router:Router  ) {

    const currentDate = new Date();
    const dd = String(currentDate.getDate()).padStart(2, '0');
    const mm = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const yyyy = currentDate.getFullYear();
    this.today = `${yyyy}-${mm}-${dd}`;
    
  }
  async send() {

    // from_name: this.contactForm.value.from_name,
    // to_name: this.form.value.to_name,
    // from_email: this.contactForm.value.from_email,
    // sujet:  this.contactForm.value.sujet,
    // message: this.contactForm.value.message,
   
    alert('Successful');
    console.log("ssssssssssssssssssssssss");

  }
  onSubmit() {
    console.log("ssssssssssssssssssssssss");
    window.alert("Succès!");
  }

}

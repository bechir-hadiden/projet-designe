import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {
  today: Date = new Date();
  daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  daysInMonth: number[] = [];


    
  
    ngOnInit(): void {
      this.generateCalendar();
    }
  
    generateCalendar() {
      const daysInMonth = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0).getDate();
      for (let i = 1; i <= daysInMonth; i++) {
        this.daysInMonth.push(i);
      }
    }
  

}



 
  


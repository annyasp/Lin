import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedValue!: string;

  handleSelectChange(event: { target: { value: string; }; }) {
    this.selectedValue = event.target.value;
  }

  handleButtonClick() {
    console.log(this.selectedValue);
  }
}
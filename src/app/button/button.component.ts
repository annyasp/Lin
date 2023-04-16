import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  selectedOption: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked() {
    console.log('Selected option:', this.selectedOption);
   
  }

  
}

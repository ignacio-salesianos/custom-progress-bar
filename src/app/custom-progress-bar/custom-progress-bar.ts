import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-progress-bar',
  templateUrl: './custom-progress-bar.html',
  styleUrl: './custom-progress-bar.css'
})
export class CustomProgressBarComponent {
  @Input() value: number = 0;
  @Input() color: string = 'primary';

}
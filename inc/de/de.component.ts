import { Component } from '@angular/core';

@Component({
  selector: 'app-de',
  templateUrl: './de.component.html',
  styleUrls: ['./de.component.css']
})
export class DeComponent {
  fontSize: number = 16; // Default font size

  increaseFontSize() {
    this.fontSize += 2;
  }

  decreaseFontSize() {
    this.fontSize -= 2;
}
}

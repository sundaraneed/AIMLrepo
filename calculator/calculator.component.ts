import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  firstValue: number=0;
  secondValue: number=0;
  result: number=0;

  add() {
    this.result = this.firstValue + this.secondValue;
  }

  subtract() {
    this.result = this.firstValue - this.secondValue;
  }

  multiply() {
    this.result = this.firstValue * this.secondValue;
  }

  divide() {
    if (this.secondValue !== 0) {
      this.result = this.firstValue / this.secondValue;
    } else {
      this.result =0;
    }
  }
}
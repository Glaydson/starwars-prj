import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="name">
    <!-- <input type="text" [(ngModel)]="name"> -->
    <p>Hello {{ name }}!</p>
    <p>I'm the user component</p>
    <app-user-detail></app-user-detail>
  `
})
export class UserComponent {

  @Input() name;
  // Emit event when the name changes
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event) {
    // Like vanilla JavaScript
    // this.name = event.target.value;
    // Emit event wherever the user types
    this.nameChanged.emit(event.target.value);
  }
}

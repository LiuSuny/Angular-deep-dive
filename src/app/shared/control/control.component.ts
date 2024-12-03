import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None, //disable the scoping style encapsulation
  //another way to add attribute selector to style component
  host: {
    class: 'control'
  }
})
export class ControlComponent {
   label = input.required<string>();
}

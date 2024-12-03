import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
  //not all cases that using host is reccommended so it be better to apply it on the css  or template 
  // host: {
  //   class: 'dashboard-item'
  // } 
})
export class DashboardItemComponent {
   //reusable input 
  // @Input({required: true}) image!: {src: string, alt: string};
  // @Input({required: true}) title!: string;

   //second way to reuse input
   image = input.required<{src: string, alt: string}>(); //generic 
   title = input.required<string>(); 
}

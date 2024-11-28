import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
   //reusable input 
  // @Input({required: true}) image!: {src: string, alt: string};
  // @Input({required: true}) title!: string;

   //second way to reuse input
   image = input.required<{src: string, alt: string}>(); //generic 
   title = input.required<string>(); 
}

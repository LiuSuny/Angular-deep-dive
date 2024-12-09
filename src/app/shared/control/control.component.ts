import { Component, ContentChild, ContentChildren, ElementRef, inject, input, viewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None, //disable the scoping style encapsulation
  //another way to add attribute selector to style component
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }
})
export class ControlComponent {
   label = input.required<string>();
   private el = inject(ElementRef);
   //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
   
   private control = viewChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
   onClick(){
    console.log('Click me');
    console.log(this.el);
    console.log(this.control())
   }
}

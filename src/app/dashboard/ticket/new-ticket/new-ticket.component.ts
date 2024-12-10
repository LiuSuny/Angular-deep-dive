import { Component, ContentChild, ElementRef, EventEmitter, inject, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

   //two way binding instead of template variable binding
   enteredTitle = '';
   enteredText = '';

  //@ViewChild('form') form?: ElementRef<HTMLFormElement>
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); //another way of using viewchild
  private el = inject(ElementRef);
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  //@Output() add = new EventEmitter();
  add = output<{title: string, text:string}>()

  // onSubmit(titleInput: HTMLInputElement){

  //   const enterTitle = titleInput.value;
  //   console.dir('Enter Title: ' + enterTitle);
  // }
  

  onClick(){
   console.log('Click me');
   console.log(this.el);
   console.log(this.control)

  }
  
  // onSubmit(titleInput: string, ticketText:string){
  //   this.add.emit({title:titleInput, text:ticketText })
  //   //this.form?.nativeElement.reset();
  //   this.form().nativeElement.reset();

  // }

  onSubmit(){
    this.add.emit({title:this.enteredTitle, text:this.enteredText })
    //this.form().nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
 
  }
}

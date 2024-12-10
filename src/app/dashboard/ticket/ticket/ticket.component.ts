import { Component, Input, input, output, signal } from '@angular/core';
import { NewTicketComponent } from "../new-ticket/new-ticket.component";
import { Ticket } from '../ticker.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  //@Input({})
  //ticket = input.required<Ticket>({alias: 'data'});
  data = input.required<Ticket>();

  //close = output('closeTicket');
  close = output();

  detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted(){
    this.close.emit();
  }
}

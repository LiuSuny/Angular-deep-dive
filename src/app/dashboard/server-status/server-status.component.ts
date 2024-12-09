import { Component, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{

  //currentStatus:'online' | 'offline' | 'unknown' = 'offline';
  currentStatus = signal<'online' | 'offline' | 'unknown'>( 'offline');

  //private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef); //perform the same task like lifecycle hook ondestroy
   constructor(){ 
   
   }

  ngOnInit(): void {
    console.log('ON INIT')
     const interval = setInterval(() => {
      const rnd = Math.random();
       if(rnd < 0.5){
        this.currentStatus.set( 'online');
       }else if(rnd < 0.9){
        this.currentStatus .set( 'offline');
       }else {
        this.currentStatus .set ('unknown');
       }
    }, 5000);

      this.destroyRef.onDestroy(() => {
        clearInterval(interval);
      })
  }

  ngAfterViewInit(){
    console.log('AFTER VIEW ON INIT');
  }

  // ngOnDestroy(): void {
  //   clearInterval(this.interval);
  // }
}

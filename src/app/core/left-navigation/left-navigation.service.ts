import { Injectable, Output, EventEmitter } from '@angular/core'

@Injectable({
    providedIn: 'root',
  })
export class SideBarService {
    public isOpen : boolean = false;
    public userToken : any = null;
    public isLoggedIn :boolean = false;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle(val : boolean) {
    //this.isOpen = !this.isOpen;
    this.change.emit(val);
  }

}
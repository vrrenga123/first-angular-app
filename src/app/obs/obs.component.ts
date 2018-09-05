import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html'

})
export class ObsComponent implements OnInit {

    initialTime = Date.now();
    messages = [];
    log = (m) => {
      const dateDifference = Date.now() - this.initialTime;
      this.messages.push(`${dateDifference}ms: ${m}`);
    }
    
    // get an observable that completes in a second
    doAsyncObservableThing = (message) => {
      return new Observable(observer => {
        setTimeout(() => {
          observer.next(message);
          observer.complete();
        }, 1000);
      });
    };
    
    // do observable stuff
    async ngOnInit() {
      // Merge operator
      this.doAsyncObservableThing('Merge: First')
      .merge(this.doAsyncObservableThing('Merge: Second')).merge(this.doAsyncObservableThing('Merge: Third'))
      .subscribe((v) => {
        this.log(v);
      });
      
      // Nesting subscribes (bad!)
      this.doAsyncObservableThing('Nested: First').subscribe((val) => {
        this.log(val);
        this.doAsyncObservableThing('Nested: Second').subscribe((val) => {
          this.log(val);
        });
      });
      
      // using async/await
      this.log(await this.doAsyncObservableThing('Await: First').toPromise());
      this.log(await this.doAsyncObservableThing('Await: Second').toPromise());
    }
  

  
}
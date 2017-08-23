import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Observer } from "rxjs/Observer";
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    const myNumber = Observable.interval(1000)
      .map(
        (data: number) => {
          return data * 2;
        }
      );
    this.numbersObsSubscription = myNumber.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(()=>{
        observer.next("The first package");
      }, 2000);
      setTimeout(()=>{
        observer.next("The second package");
      }, 4000);
      setTimeout(()=>{
        // observer.error("Oops, error happened");
        observer.complete();
      }, 5000);
      setTimeout(()=>{
        observer.next("The third package that never happen");
      }, 6000);
    });

    this.customObsSubscription = myObservable.subscribe(
      (data: string) => {console.log(data);},
      (error: string) => {console.log(error);},
      () => {console.log('completed')}
    )
  }

  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}

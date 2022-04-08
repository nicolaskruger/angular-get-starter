import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { LoggerService } from '../logger.service';
import { PeekABooDirective } from '../peek-a-boo.directive';

@Component({
  selector: 'app-peek-a-boo',
  templateUrl: './peek-a-boo.component.html',
  styleUrls: ['./peek-a-boo.component.scss']
})
export class PeekABooComponent extends PeekABooDirective implements 
   OnChanges, OnInit, DoCheck, 
   AfterContentInit, AfterContentChecked, 
   AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() name = '';

  constructor(logger:LoggerService) {
      super(logger)

      const is = this.name ? 'is' : 'is not';
   }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngDoCheck(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

 

}

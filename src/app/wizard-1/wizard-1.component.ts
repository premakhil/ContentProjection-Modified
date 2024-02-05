import { CommonModule } from '@angular/common';
import { Component,EventEmitter,OnInit,Output } from '@angular/core';
import { Wizard2Component } from '../wizard-2/wizard-2.component';

@Component({
  selector: 'app-wizard-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wizard-1.component.html',
  styleUrl: './wizard-1.component.css'
})
export class Wizard1Component implements OnInit {


  ngOnInit(): void {
    this.indexEmitter.emit(this.currentIndex);
  }
public currentIndex:number=0;

@Output() indexEmitter = new EventEmitter<number>();
  
public indexSet: Set<number> = new Set<number>();

  public changeIndex(index:number):void {

  
    if (this.indexSet.size>=index){
      this.currentIndex=index;
      this.indexSet.add(index);
      this.indexEmitter.emit(this.currentIndex);
      
      
    }

  }

  public previous():void {
    this.currentIndex-=1;
    this.indexEmitter.emit(this.currentIndex);

  }

  public next():void {
    this.currentIndex+=1;
    this.indexEmitter.emit(this.currentIndex);


  }

}

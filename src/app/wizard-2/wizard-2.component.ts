import { CommonModule } from '@angular/common';
import { Component,Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wizard-2.component.html',
  styleUrl: './wizard-2.component.css'
})
export class Wizard2Component implements OnChanges {
  @Input() currentIndex!:number;

  ngOnChanges(): void {
    console.log(this.currentIndex);
    
  }
 

}

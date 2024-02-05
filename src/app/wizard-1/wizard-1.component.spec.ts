import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wizard1Component } from './wizard-1.component';
import { Wizard2Component } from '../wizard-2/wizard-2.component';

fdescribe('Wizard1Component', () => {
  let component: Wizard1Component;
  let component2:Wizard2Component
  let fixture: ComponentFixture<Wizard1Component>;
  let fixture2: ComponentFixture<Wizard2Component>;

  // let currentIndex;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wizard1Component,Wizard2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Wizard1Component);
    component = fixture.componentInstance;
    // fixture2 = TestBed.createComponent(Wizard2Component);
    // component2 = fixture2.componentInstance;
    fixture.detectChanges();
    // fixture2.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should change index",()=>{


    const argumentIndex=0;

    spyOn(component.indexEmitter,'emit');


    component.changeIndex(argumentIndex);

    // fixture2.detectChanges()

    expect(component.currentIndex).toEqual(argumentIndex);
    expect(component.indexSet.has(argumentIndex)).toBe(true);
    expect(component.indexEmitter.emit).toHaveBeenCalledWith(argumentIndex);
    
  });

    it("should navigate to previous",()=>{

      // component.currentIndex=10;

      spyOn(component.indexEmitter,'emit');


      component.previous();

      expect(component.currentIndex).toBeLessThan(0);
      expect(component.indexEmitter.emit).toHaveBeenCalledWith(component.currentIndex);


    });

  it("should navigate to next",()=>{

    spyOn(component.indexEmitter,'emit');


    component.next();


    expect(component.currentIndex).toBeGreaterThan(0);
    expect(component.indexEmitter.emit).toHaveBeenCalledWith(component.currentIndex);

  });


});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wizard2Component } from './wizard-2.component';

fdescribe('Wizard2Component', () => {
  let component: Wizard2Component;
  let fixture: ComponentFixture<Wizard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wizard2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Wizard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should receive emitted value',()=>{
    // spyOn(component,'ngOnChanges');


    // expect(component.ngOnChanges).toHaveBeenCalled();


    expect(component.currentIndex).toEqual(0);

  })
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompoComponent } from './new-compo.component';

describe('NewCompoComponent', () => {
  let component: NewCompoComponent;
  let fixture: ComponentFixture<NewCompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCompoComponent]
    });
    fixture = TestBed.createComponent(NewCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

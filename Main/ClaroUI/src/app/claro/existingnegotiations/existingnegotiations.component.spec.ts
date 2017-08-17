import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingnegotiationsComponent } from './existingnegotiations.component';

describe('ExistingnegotiationsComponent', () => {
  let component: ExistingnegotiationsComponent;
  let fixture: ComponentFixture<ExistingnegotiationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingnegotiationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingnegotiationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

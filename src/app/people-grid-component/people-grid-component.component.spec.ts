import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleGridComponentComponent } from './people-grid-component.component';

describe('PeopleGridComponentComponent', () => {
  let component: PeopleGridComponentComponent;
  let fixture: ComponentFixture<PeopleGridComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleGridComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleGridComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsGridComponentComponent } from './documents-grid-component.component';

describe('DocumentsGridComponentComponent', () => {
  let component: DocumentsGridComponentComponent;
  let fixture: ComponentFixture<DocumentsGridComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsGridComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsGridComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

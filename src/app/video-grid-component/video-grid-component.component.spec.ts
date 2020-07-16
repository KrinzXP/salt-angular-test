import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGridComponentComponent } from './video-grid-component.component';

describe('VideoGridComponentComponent', () => {
  let component: VideoGridComponentComponent;
  let fixture: ComponentFixture<VideoGridComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoGridComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGridComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

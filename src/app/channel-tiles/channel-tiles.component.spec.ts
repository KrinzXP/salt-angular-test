import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelTilesComponent } from './channel-tiles.component';

describe('ChannelTilesComponent', () => {
  let component: ChannelTilesComponent;
  let fixture: ComponentFixture<ChannelTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

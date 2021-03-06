import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGalleryComponent } from './video.component';

describe('VideoGalleryComponent', () => {
  let component: VideoGalleryComponent;
  let fixture: ComponentFixture<VideoGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

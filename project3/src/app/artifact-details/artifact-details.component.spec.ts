import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactDetailsComponent } from './artifact-details.component';

describe('ArtifactDetailsComponent', () => {
  let component: ArtifactDetailsComponent;
  let fixture: ComponentFixture<ArtifactDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtifactDetailsComponent]
    });
    fixture = TestBed.createComponent(ArtifactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

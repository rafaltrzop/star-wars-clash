import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '@app/material';
import { ProgressBarComponent } from '@app/clash/components';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ProgressBarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  describe('when loading is true', () => {
    it('should show progress bar', () => {
      component.loading = true;
      fixture.detectChanges();

      const progressBarElement: HTMLElement = fixture.nativeElement;
      const progressBar = progressBarElement.querySelector('mat-progress-bar');

      expect(progressBar).not.toBeNull();
    });
  });

  describe('when loading is false', () => {
    it('should hide progress bar', () => {
      component.loading = false;
      fixture.detectChanges();

      const progressBarElement: HTMLElement = fixture.nativeElement;
      const progressBar = progressBarElement.querySelector('mat-progress-bar');

      expect(progressBar).toBeNull();
    });
  });
});

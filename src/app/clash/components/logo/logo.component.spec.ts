import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have <img> element with src and alt attributes', () => {
    const logoElement: HTMLElement = fixture.nativeElement;
    const img = logoElement.querySelector('img');

    expect(img).not.toBeNull();
    expect(img.hasAttribute('src')).toBeTrue();
    expect(img.hasAttribute('alt')).toBeTrue();
  });
});

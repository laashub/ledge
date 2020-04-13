import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownRenderComponent } from './markdown-render.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('MarkdownRenderComponent', () => {
  let component: MarkdownRenderComponent;
  let fixture: ComponentFixture<MarkdownRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [MarkdownRenderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownRenderComponent);
    component = fixture.componentInstance;
    component.data = '/assets/docs/manual.md';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

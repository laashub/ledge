import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgeRenderComponent } from './ledge-render.component';

describe('MarkdownReporterComponent', () => {
  let component: LedgeRenderComponent;
  let fixture: ComponentFixture<LedgeRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgeRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgeRenderComponent);
    component = fixture.componentInstance;
    component.content = ``;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathComponent } from './path.component';
import { SharedModule } from '../../../shared/shared.module';
import { DesignModule } from '../design.module';

describe('PathComponent', () => {
  let component: PathComponent;
  let fixture: ComponentFixture<PathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, DesignModule],
      declarations: [PathComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

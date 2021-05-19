import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatGeneratorComponent } from './cat-generator.component';

describe('CatGeneratorComponent', () => {
  let component: CatGeneratorComponent;
  let fixture: ComponentFixture<CatGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

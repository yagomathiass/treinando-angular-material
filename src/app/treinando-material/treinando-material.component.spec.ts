import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinandoMaterialComponent } from './treinando-material.component';

describe('TreinandoMaterialComponent', () => {
  let component: TreinandoMaterialComponent;
  let fixture: ComponentFixture<TreinandoMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinandoMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinandoMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

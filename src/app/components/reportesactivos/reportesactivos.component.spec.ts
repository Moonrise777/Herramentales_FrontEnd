import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesactivosComponent } from './reportesactivos.component';

describe('ReportesactivosComponent', () => {
  let component: ReportesactivosComponent;
  let fixture: ComponentFixture<ReportesactivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesactivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

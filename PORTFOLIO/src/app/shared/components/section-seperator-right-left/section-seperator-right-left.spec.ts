import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSeperatorRightLeft } from './section-seperator-right-left';

describe('SectionSeperatorRightLeft', () => {
  let component: SectionSeperatorRightLeft;
  let fixture: ComponentFixture<SectionSeperatorRightLeft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSeperatorRightLeft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSeperatorRightLeft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

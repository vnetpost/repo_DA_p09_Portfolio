import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSeperatorLeftRight } from './section-seperator-left-right';

describe('SectionSeperatorLeftRight', () => {
  let component: SectionSeperatorLeftRight;
  let fixture: ComponentFixture<SectionSeperatorLeftRight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSeperatorLeftRight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSeperatorLeftRight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

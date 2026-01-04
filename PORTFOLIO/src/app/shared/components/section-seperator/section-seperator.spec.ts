import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSeperator } from './section-seperator';

describe('SectionSeperator', () => {
  let component: SectionSeperator;
  let fixture: ComponentFixture<SectionSeperator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSeperator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSeperator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

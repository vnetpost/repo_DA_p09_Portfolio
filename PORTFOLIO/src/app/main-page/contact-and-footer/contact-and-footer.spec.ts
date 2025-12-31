import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAndFooter } from './contact-and-footer';

describe('ContactAndFooter', () => {
  let component: ContactAndFooter;
  let fixture: ComponentFixture<ContactAndFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactAndFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAndFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

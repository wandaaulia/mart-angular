import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionBannerComponent } from './promotion-banner.component';

describe('PromotionBannerComponent', () => {
  let component: PromotionBannerComponent;
  let fixture: ComponentFixture<PromotionBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

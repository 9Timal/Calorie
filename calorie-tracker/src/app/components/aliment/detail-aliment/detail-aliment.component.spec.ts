import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAlimentComponent } from './detail-aliment.component';

describe('DetailAlimentComponent', () => {
  let component: DetailAlimentComponent;
  let fixture: ComponentFixture<DetailAlimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailAlimentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAlimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

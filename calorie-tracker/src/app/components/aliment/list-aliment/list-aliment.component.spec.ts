import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlimentComponent } from './list-aliment.component';

describe('ListAlimentComponent', () => {
  let component: ListAlimentComponent;
  let fixture: ComponentFixture<ListAlimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAlimentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAlimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

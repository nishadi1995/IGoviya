import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcehubComponent } from './resourcehub.component';

describe('ResourcehubComponent', () => {
  let component: ResourcehubComponent;
  let fixture: ComponentFixture<ResourcehubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcehubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcehubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

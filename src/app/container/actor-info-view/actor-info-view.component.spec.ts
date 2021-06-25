import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorInfoViewComponent } from './actor-info-view.component';

describe('ActorInfoViewComponent', () => {
  let component: ActorInfoViewComponent;
  let fixture: ComponentFixture<ActorInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorInfoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

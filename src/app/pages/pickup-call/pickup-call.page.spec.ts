import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { PickupCallPage } from './pickup-call.page';

describe('PickupCallPage', () => {
  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupCallPage ],
      imports: [IonicModule.forRoot(), AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PickupCallPage);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should go to home page after load', () => {
    spyOn(router, 'navigate')
    component.newPickupCall();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  })

});

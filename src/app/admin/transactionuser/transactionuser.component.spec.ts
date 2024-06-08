import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionuserComponent } from './transactionuser.component';

describe('TransactionuserComponent', () => {
  let component: TransactionuserComponent;
  let fixture: ComponentFixture<TransactionuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

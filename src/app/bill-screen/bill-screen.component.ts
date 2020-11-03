import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-bill-screen',
  templateUrl: './bill-screen.component.html',
  styleUrls: ['./bill-screen.component.css']
})
export class BillScreenComponent implements OnInit {

  @Output() billScreenUnTrigger = new EventEmitter();

  isEditable = false;

  aaaa: any;

  formCompleted = false;

  email="jon@snow.com";

  productForm: FormGroup;
  customerForm: FormGroup;
  paymentForm: FormGroup;

  paymentType:string;
  storeSelected = false;


  storeList = [
    'MadhaPur',
    'Kukatapally',
    'Gachibowli',
    'Amerpreet',
    'Vikaspuri',
    'Janakpuri',
    'Rohini',
    'Rithala',
    'South Delhi'
  ]

  constructor(
  ) { }

  ngOnInit() {

    // this.yolo();
    // this.productForm = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
    // this.customerForm = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
    // this.paymentForm = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }

  unTriggerBillScreen() {
    this.billScreenUnTrigger.emit(true);
  }


  yolo() {
      console.log(this.productForm);
      console.log(this.customerForm);
      console.log(this.paymentForm);
    this.aaaa = setTimeout(()=>{
      this.yolo();
    },2000)
  }

}

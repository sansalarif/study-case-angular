import { Component, OnInit } from '@angular/core';
import { Customer } from './models/customer-model';
import { CustomerService } from './services/customer-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'study-case';

  customer: Customer[] = [];

  constructor(
    private customerService: CustomerService
  ){}
  
  ngOnInit(): void{
    this.getDataCustomer()
  }

  getDataCustomer(){
    this.customerService.getAll().subscribe((res) => {
      console.log('success get data', res);
      this.customer = res;
    })
  }

  tampilProfile:boolean = false

  showProfile() {
    // this.tampilProfile = !this.tampilProfile
    console.log('Hello')
  }

  tampilPopUp:boolean = false

  showPopUp() {
    this.tampilPopUp = !this.tampilPopUp
  }

  registerData(name:String, mataUang:String, kota:String, saldo:String, negara:String) {
    this.customerService.submitData(name, mataUang, saldo, kota, negara).subscribe((res)=> {
      console.log('success', res)
    })
  }

  // getDataCustomerId(id: any) {
  //   this.customerService.get(id).subscribe((res) => {
  //     console.log('success get data',res);
  //   })
  // }

  // isVissible:boolean = false

  // showPopUp(){
  //   this.isVissible = !this.isVissible
  // }

  // registerData(name:String, mataUang:String, kota:String, saldo:String, negara:String){
  //   this.customerService.submitData(name, mataUang, saldo, kota, negara).subscribe((item)=>{
  //     console.log('success', item)
  //   })
  // }
}

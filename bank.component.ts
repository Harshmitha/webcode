import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  title = 'test';
  ifsc="";
  h:boolean=false;

  
  constructor(private router:Router) { }

  ngOnInit() {
  }
  users=[{
    bankname:'State Bank Of India',
   ifsc:'SBI0065001',
   bankid:'60',
   branch:'RTGS-HO'
   },{
    bankname:'ABHYUDAYA COOPERATIVE BANK LIMITED',
    ifsc:'ABHY0065002',
    bankid:'44',
    branch:'BAIL BAZAR'
  },{
    bankname:'CENTRAL BANK OF INDIA',
    ifsc:'CBI0065007',
    bankid:'77',
    branch:'YerWada'
  },{
    bankname:'UCO Bank',
    ifsc:'UCO0065007',
    bankid:'89',
    branch:'Deccan College'
  },{
    bankname:'ABHYUDAYA COOPERATIVE BANK LIMITED',
    ifsc:'ABHY0065002',
    bankid:'44',
    branch:'BAIL BAZAR'
  },{
    bankname:'CENTRAL BANK OF INDIA',
    ifsc:'CBI0065007',
    bankid:'77',
    branch:'YerWada'
  }]

  setIndex(ii){
    this.h=ii;
    console.log
  }
  bankd(){
    this.router.navigateByUrl("bankd")
  }
}



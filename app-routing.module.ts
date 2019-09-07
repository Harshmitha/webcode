import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { BankdComponent } from './bankd/bankd.component';


const routes: Routes = [
  {path:'',component:BankComponent},
{path:'bankd',component:BankdComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

function newFunction(): string {
  return 'bankd';
}


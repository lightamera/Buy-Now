import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ProgressSpinnerModule, BlockUIModule, PasswordModule, InputTextModule, CardModule, ButtonModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../_service/login.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    BlockUIModule,
    ProgressSpinnerModule
  ],
  declarations: [LoginComponent],
  providers:[LoginService]
})
export class LoginModule { }

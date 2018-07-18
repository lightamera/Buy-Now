import { Injectable } from '@angular/core';
import { UserModel } from '../_model/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(userName: string, password: string): UserModel {

    if (userName != 'test' || password != 'test') {
      throw new Error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }

    let user: UserModel = new UserModel();
    user.id = '1';
    user.firstName = 'ฐานิตย์';
    user.lastName = 'ภุมรินทร์';

    return user;

  }
}

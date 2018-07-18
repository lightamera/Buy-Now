import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ComponentView } from '../_view/component.view';
import { StringUtil } from '../_utils/string.util';
import { LoginService } from '../_service/login.service';
import { Router } from '@angular/router';
import { UserModel } from '../_model/user/user.model';
import { UserSessionModel } from '../_model/user-session/userSession.model';
import { UserSession } from '../_utils/userSession.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent extends ComponentView implements OnInit {

  userName: string;
  password: string;
  message: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.userName = '';
    this.password = '';
    this.message = '';
  }

  async loginButtonOnClick(){
    try{
      this.loadingPage = await true;
      await this.validate();

      let userSession : UserSessionModel = new UserSessionModel();
      userSession.user = Object.assign(new UserModel(), this.loginService.login(this.userName, this.password));
      UserSession.setUserSession(userSession);
      this.router.navigate(['/pages']);
      
    }catch (e) {
      this.message = e;
    } finally{
      this.loadingPage = await false;
    }
  }

  validate(){

    this.message = '';

    if(StringUtil.isNullOrEmpty(this.userName)){
      throw new Error('กรุณาระบุชื่อผู้ใช้');
    }else if(StringUtil.isNullOrEmpty(this.password)){
      throw new Error('กรุณาระบุรหัสผ่าน');
    }


  }

}

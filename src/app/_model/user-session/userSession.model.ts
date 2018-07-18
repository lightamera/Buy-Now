import { UserModel } from "../user/user.model";

export class UserSessionModel {

    user: UserModel;

    constructor() {
        this.user = new UserModel();
    }

}
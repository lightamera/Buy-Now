import { StringUtil } from "../../_utils/string.util";

export class UserModel {

    id: string;
    firstName: string;
    lastName: string;

    constructor() {
        this.id = "";
        this.firstName = "";
        this.lastName = "";
    }

    getUserFullName(): string {
        
        let fullName = "";

        if (!StringUtil.isNullOrEmpty(this.firstName)) {
            fullName += this.firstName + " ";
        }

        if (!StringUtil.isNullOrEmpty(this.lastName)) {
            fullName += this.lastName;
        }

        return fullName;

    }

}
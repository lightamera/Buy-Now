import { UserSessionModel } from "../_model/user-session/userSession.model";

export class UserSession {

    static getUserSession(): UserSessionModel {
        return Object.assign(new UserSessionModel(), JSON.parse(sessionStorage.getItem('usserSession')));
    }

    static setUserSession(usserSession: UserSessionModel) {
        sessionStorage.setItem('usserSession', JSON.stringify(usserSession));
    }

    static clearUserSession() {
        sessionStorage.removeItem('usserSession');
    }

}
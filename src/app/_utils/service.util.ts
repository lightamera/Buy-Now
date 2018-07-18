import { isDevMode } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';

export class ServiceUtil {

    private static WS_DEV_URL : string = 'http://192.168.0.137/ku-service/public/api/';
    private static WS_URL : string = location.protocol + '//' + document.location.hostname + '/WS/public/api/';

    static getWebServiceUrl(): any {

        if (isDevMode()) {
            return this.WS_DEV_URL;
        } else {
            return this.WS_URL;
        }

    }

    static getReportServiceUrl(): any {

        if (isDevMode()) {
            return this.WS_DEV_URL;
        } else {
            return this.WS_URL;
        }

    }
    
}
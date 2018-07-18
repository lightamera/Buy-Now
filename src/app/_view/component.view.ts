import { DateUtil } from "../_utils/date.util";
import { Message, SelectItem } from "primeng/primeng";
import { DomSanitizer } from "@angular/platform-browser";

export class ComponentView {

    constructor() { }
    
    //MODE
    readonly MODE_INSERT: string = 'I';
    readonly MODE_SEARCH: string = 'Q';
    readonly MODE_UPDATE: string = 'U';
    readonly MODE_VIEW: string = 'V';
    mode: String = 'Q';

    //Calendar year rang
    yearRang5: string = (+DateUtil.getCurrentYear() - 5) + ":" + (+DateUtil.getCurrentYear() + 5);

    //Calendar th
    calendarTH: any = {
        firstDayOfWeek: 0,
        dayNames: ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'],
        dayNamesShort: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
        dayNamesMin: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
        monthNames: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
        monthNamesShort: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']
    }

    //Loading Page
    loadingPage: boolean = false;

    //MessageNotification
    msgs: Message[];

    messageSuccess(message: string, messageDetail: string) {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: message, detail: messageDetail });
        window.scroll(0, 0);
    }

    messageInfo(message: string, messageDetail: string) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: message, detail: messageDetail });
        window.scroll(0, 0);
    }

    messageWarn(message: string, messageDetail: string) {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: message, detail: messageDetail });
        window.scroll(0, 0);
    }

    messageError(message: string, messageDetail: string) {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: message, detail: messageDetail });
        window.scroll(0, 0);
    }

    clearMessage() {
        this.msgs = null;
    }

}

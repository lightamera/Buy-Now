import { StringUtil } from "./string.util";
import { SelectItem } from "primeng/primeng";

export class DateUtil {

    static readonly MONDAY_THAI_NAME = "วันจันทร์";
    static readonly TUESDAY_THAI_NAME = "วันอังคาร";
    static readonly WEDNESDAY_THAI_NAME = "วันพุธ";
    static readonly THUESDAY_THAI_NAME = "วันพฤหัสบดี";
    static readonly FRIDAY_THAI_NAME = "วันศุกร์";
    static readonly SATURDAY_THAI_NAME = "วันเสาร์";
    static readonly SUNDAY_THAI_NAME = "วันอาทิตย์";

    static convertDateToString(date: Date): string {
        if (date != null) {
            let year: number = date.getFullYear();
            let month: number = date.getMonth() + 1;
            let day: number = date.getDate();
            return year + StringUtil.paddingLeft(2, month, '0') + StringUtil.paddingLeft(2, day, '0');
        } else {
            return null;
        }
    }

    static convertStringToDate(dateString: string): Date {
        return new Date(dateString.substring(0, 4) + '-' + dateString.substring(4, 6) + '-' + dateString.substring(6, 8));
    }

    static getCurrentYear(): number {
        return (new Date()).getFullYear();
    }

    static getCurrentThaiYear(): number {
        return (new Date()).getFullYear() + 543;
    }

    static getDayThName(dayValue: number): string {
        if (dayValue == 0) {
            return this.SUNDAY_THAI_NAME;
        } else if (dayValue == 1) {
            return this.MONDAY_THAI_NAME;
        } else if (dayValue == 2) {
            return this.TUESDAY_THAI_NAME;
        } else if (dayValue == 3) {
            return this.WEDNESDAY_THAI_NAME;
        } else if (dayValue == 4) {
            return this.THUESDAY_THAI_NAME;
        } else if (dayValue == 5) {
            return this.FRIDAY_THAI_NAME;
        } else if (dayValue == 6) {
            return this.SATURDAY_THAI_NAME;
        }
    }

}
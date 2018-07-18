export class StringUtil {

    static paddingLeft(size: number, value: any, paddingValue: string): string {
        var newPadding = '';
        for (var _i = 0; _i < size; _i++) {
            newPadding += paddingValue;
        }
        return String(newPadding + value).slice(size * (-1));
    }

    static isNullOrEmpty(value: string): boolean {
        if (value == null) {
            return true;
        } else if (value == '') {
            return true;
        } else if (value == "") {
            return true;
        } else {
            return false;
        }
    }
}
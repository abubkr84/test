export class QueryString {
    static format(obj: any): string {
        return encodeURIComponent(JSON.stringify(obj));
    }
}


import { Record } from "./Record.js";
export default class Invoice extends Record {
    constructor(name, abbr, address) {
        super(name, abbr, address);
        this.name = name;
        this.abbr = abbr;
        this.address = address;
        this.records = [];
    }
    nameWithAbbr() {
        return `${this.name}: ${this.abbr}`;
    }
    isBookRecord(record) {
        for (const KEY in record) {
            if ('type' !== KEY && 'amount' !== KEY)
                return false;
        }
        return true;
    }
    createBookRecord(type, amount) {
        return {
            type,
            amount
        };
    }
    createRecords(records) {
        for (const RECORD of records) {
            if (this.isBookRecord(RECORD))
                this.records.push(RECORD);
            else
                console.log('Record omitted (too many props):', RECORD);
        }
        return true;
    }
    printOutRecords() {
        for (const RECORD of this.records) {
            console.log(RECORD);
        }
    }
}
//# sourceMappingURL=Invoice.js.map
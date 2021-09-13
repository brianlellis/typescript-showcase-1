import { Record } from "./Record.js";
import { consoleError } from "./UtilPrint.js";
export default class Invoice extends Record {
    constructor(name, abbr, address) {
        super(name, abbr, address);
        this.name = name;
        this.abbr = abbr;
        this.address = address;
        this.records = [];
    }
    evalBookRecordProps(record) {
        for (const KEY in record) {
            if ('type' !== KEY && 'amount' !== KEY)
                return false;
        }
        return true;
    }
    isBookRecordType(type) {
        return ('debit' === type || 'credit' === type);
    }
    isBookRecordAmount(amount) {
        return !isNaN(amount);
    }
    createBookRecord(record, use_strict = false) {
        if (!this.isBookRecordType(record.type)) {
            consoleError('BookRecord not created as type not debit or credit', record);
        }
        if (!this.isBookRecordAmount(record.amount)) {
            consoleError('BookRecord not created as amount not a number', record);
        }
        if (use_strict) {
            if (this.evalBookRecordProps(record))
                this.records.push(record);
            else
                consoleError('BookRecord not created (too many props):', record);
        }
        return record;
    }
    printOutRecords() {
        for (const RECORD of this.records) {
            console.log(RECORD);
        }
    }
}
//# sourceMappingURL=Invoice.js.map
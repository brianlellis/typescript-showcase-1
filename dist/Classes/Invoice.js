import { Record } from "./Record.js";
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
    successCreateBookRecord(record, msg = 'success') {
        return {
            success: true,
            data: record,
            msg
        };
    }
    failCreateBookRecord(record, msg) {
        return {
            success: false,
            data: record,
            msg
        };
    }
    createBookRecord(record, use_strict = false) {
        if (!this.isBookRecordType(record.type)) {
            return this.failCreateBookRecord(record, 'BookRecord not created as type not debit or credit');
        }
        if (!this.isBookRecordAmount(record.amount)) {
            return this.failCreateBookRecord(record, 'BookRecord not created as amount not a number');
        }
        if (use_strict) {
            if (this.evalBookRecordProps(record)) {
                this.records.push(record);
            }
            else {
                return this.failCreateBookRecord(record, 'BookRecord not created (too many props)');
            }
        }
        return this.successCreateBookRecord(record);
    }
    printOutRecords() {
        for (const RECORD of this.records) {
            console.log(RECORD);
        }
    }
}
//# sourceMappingURL=Invoice.js.map
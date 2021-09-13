export class Record {
    constructor(name, abbr, address) {
        this.name = name;
        this.abbr = abbr;
        this.address = address;
        this.profile = { name, abbr, address };
    }
    printOutProfile(value) { console.log(value); }
}
//# sourceMappingURL=Record.js.map
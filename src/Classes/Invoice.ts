import { Record , Address } from '@class/Record';

type BookRecord = {
  type:   string, // debit , credit
  amount: number
};

export default class Invoice extends Record {
  records: BookRecord[] = [];

  constructor(
    public name:    string,
    public abbr:    string,
    public address: Address
  ) {
    super(name, abbr, address);
  }

  nameWithAbbr(): string {
    return `${this.name}: ${this.abbr}`;
  }

  isBookRecord( record: BookRecord ): boolean {
    for ( const KEY in record ) {
      if ( 'type' !== KEY && 'amount' !== KEY ) return false;
    }
    return true;
  }

  createBookRecord( type: string , amount: number ): BookRecord {
    return {
      type,
      amount
    };
  }

  createRecords( records: BookRecord[] ): boolean {
    for ( const RECORD of records ) {
      if ( this.isBookRecord( RECORD ) ) this.records.push( RECORD );
      else console.log( 'Record omitted (too many props):', RECORD );
    }
    return true;
  }

  printOutRecords(): void {
    for ( const RECORD of this.records ) {
      console.log( RECORD );
    }
  }
}
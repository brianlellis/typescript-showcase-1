import { Record , Address } from '@class/Record';
import { consoleError } from '@class/UtilPrint';

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

  private evalBookRecordProps( record: BookRecord ): boolean {
    for ( const KEY in record ) {
      if ( 'type' !== KEY && 'amount' !== KEY ) return false;
    }
    return true;
  }

  private isBookRecordType( type: string ): boolean {
    return ( 'debit' === type || 'credit' === type );
  }

  private isBookRecordAmount( amount: number ): boolean {
    return !isNaN( amount );
  }

  createBookRecord( record: BookRecord , use_strict: boolean = false ): BookRecord {
    if ( !this.isBookRecordType( record.type ) ) {
      consoleError( 'BookRecord not created as type not debit or credit', record );
    }
    if ( !this.isBookRecordAmount( record.amount ) ) {
      consoleError( 'BookRecord not created as amount not a number', record );
    }

    if ( use_strict ) {
      if ( this.evalBookRecordProps( record ) ) this.records.push( record );
      else consoleError( 'BookRecord not created (too many props):', record );
    }

    return record;
  }

  printOutRecords(): void {
    for ( const RECORD of this.records ) {
      console.log( RECORD );
    }
  }
}
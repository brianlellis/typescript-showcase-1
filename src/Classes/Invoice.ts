import { Record , Address } from '@class/Record';

type BookRecord = {
  type:   string, // debit , credit
  amount: number
};

type BookRecordPersistAttempt = { success: boolean , data: BookRecord, msg: string };

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

  private successCreateBookRecord( record: BookRecord , msg: string = 'success' ): BookRecordPersistAttempt {
    return  {
      success: true,
      data: record,
      msg
    };
  }

  private failCreateBookRecord( record: BookRecord , msg: string ): BookRecordPersistAttempt {
    return  {
      success: false,
      data: record,
      msg
    };
  }

  createBookRecord( record: BookRecord , use_strict: boolean = false ): BookRecordPersistAttempt {
    if ( !this.isBookRecordType( record.type ) ) {
      return this.failCreateBookRecord( record , 'BookRecord not created as type not debit or credit' );
    }
    if ( !this.isBookRecordAmount( record.amount ) ) {
      return this.failCreateBookRecord( record , 'BookRecord not created as amount not a number');
    }

    if ( use_strict ) {
      if ( this.evalBookRecordProps( record ) ) this.records.push( record );
      else return this.failCreateBookRecord( record , 'BookRecord not created (too many props)');
    }

    return this.successCreateBookRecord( record );
  }

  printOutRecords(): void {
    for ( const RECORD of this.records ) {
      console.log( RECORD );
    }
  }
}
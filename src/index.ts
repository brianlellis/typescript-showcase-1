import Invoice from '@class/Invoice';

const exp             = ( msg: string , msg2: string ): string => msg+msg2;
const printOutStr     = ( value: string ): void => console.log( value );

printOutStr( exp( 'Brian', ' Ellis') );

const CO_INFO = {
  name: 'Google',
  abbr: 'GOOGL',
  addy: {
    street:   '123 Anywhere Ln.',
    street_2: 'STE 205',
    city:     'Charlotte',
    state:    {
      full: 'NC',
      abbr: 'North Carolina'
    },
    zip:      '28215'
  }
};

const GOOGLE        = new Invoice( CO_INFO.name , CO_INFO.abbr , CO_INFO.addy );
const BOOK_RECORDS  = [
  GOOGLE.createBookRecord( 'debit', 50  ),
  GOOGLE.createBookRecord( 'debit', 150 ),
  GOOGLE.createBookRecord( 'debit', -75 ),
  { type: 'credit' , amount: 225.32 , phone: null }
];
GOOGLE.createRecords( BOOK_RECORDS );


printOutStr( GOOGLE.nameWithAbbr() );
GOOGLE.printOutProfile( GOOGLE.profile );
GOOGLE.printOutRecords();
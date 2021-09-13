import Invoice from '@class/Invoice';
import { MOCK_DATA } from './MOCK_DATA';

for ( const KEY in MOCK_DATA ) {
  const RECORD  = MOCK_DATA[ KEY ];
  const ADDRESS = {
    street:   RECORD.address,
    street_2: '',
    city:     RECORD.city,
    state:    {
      full: RECORD.state,
      abbr: RECORD.state_abbr
    },
    zip:      RECORD.zip
  };
  const COMPANY = new Invoice( RECORD.name , RECORD.abbr , ADDRESS );
  COMPANY.createBookRecord( { type: RECORD.type , amount: RECORD. amount } );
  COMPANY.printOutProfile( COMPANY.profile );
  COMPANY.printOutRecords();
}
import { DomTable } from '@class/Dom';
import Invoice from '@class/Invoice';
import { MOCK_DATA } from './MOCK_DATA';
import { consoleError } from '@class/UtilPrint';

document.body.innerHTML += `
<style scoped>
  table { width: 47vw; text-align: center; float: left; margin: 0 1vw;  border: 2px solid #000; }
  table tr:nth-child( even ) { background: #CCC; }
  .success th, .success td {
    width: 25%
  }
  .fail th, .fail td {
    width: 20%
  }
</style>
`;

let success_records = [];
let fail_records    = [];
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

  const COMPANY       = new Invoice( RECORD.name , RECORD.abbr , ADDRESS );
  const CREATE_RECORD = COMPANY.createBookRecord( { type: RECORD.type , amount: RECORD.amount } , true );

  if ( CREATE_RECORD.success ) success_records.push( COMPANY );
  else {
    const FAIL_RECORD = [
      COMPANY.name,
      COMPANY.address.street,
      CREATE_RECORD.data.type,
      CREATE_RECORD.data.amount,
      CREATE_RECORD.msg
    ];
    fail_records.push( FAIL_RECORD );
    consoleError( { data: FAIL_RECORD , test_nest: { a: [ 'A' ] } } );
    // consoleError( { data: FAIL_RECORD } );
  }
}

// DOM WORK
const TABLE_CREATOR = new DomTable();

const T_HEADER_SUCCESS = [
  'Name',
  'Address',
  'Account Type',
  'Account Amount'
];

let t_rows_success = [];
for ( const KEY in success_records ) {
  const RECORD = success_records[ KEY ];

  for (const RECORD_KEY in RECORD.records ) {
    t_rows_success.push([
      RECORD.name,
      RECORD.address.street,
      RECORD.records[ RECORD_KEY ].type,
      RECORD.records[ RECORD_KEY ].amount
    ]);
  }
}
TABLE_CREATOR.create( { heads: T_HEADER_SUCCESS , rows: t_rows_success, class: 'success' }  );

const T_HEADER_FAIL = [
  'Name',
  'Address',
  'Account Type',
  'Account Amount',
  'Message'
];
TABLE_CREATOR.create( { heads: T_HEADER_FAIL , rows: fail_records, class: 'fail' }  );
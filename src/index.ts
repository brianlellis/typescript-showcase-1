import Invoice from '@class/Invoice';

const exp         = ( msg: string , msg2: string ): string => msg+msg2;
const printOutStr = ( value: string ): void => console.log( value );

printOutStr( exp( 'Brian', ' Ellis') );

const GOOGLE = new Invoice( 'Google' );
printOutStr( GOOGLE.name );
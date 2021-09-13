const formatStr = ( records: any[] ): string => {
  let str_concat = '';

  for ( const VALUE of records ) {
    if ( 'object' === typeof VALUE ) {
      for ( const KEY in VALUE ) {
        str_concat += `${KEY}: ${VALUE[ KEY ]} (${typeof VALUE[ KEY ]})\n`;
      }
    }
    else str_concat += `${VALUE}\n`;
  }
  return str_concat;
};

export const consoleError = ( ...records: any[] ): void => {
  const STYLE = 'color: white; background-color: #df3b3b;';
  const STR   = formatStr( records );
  console.log( `%c${STR}` , STYLE );
};
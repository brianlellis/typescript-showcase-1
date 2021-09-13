const formatStr = ( records: any, tab: string = '' ): string => {
  return Object.entries(records)
    .map(([key, value]) => {
      if ( typeof value !== 'object' ) return `${tab}${key}: ${value} (${typeof value})\n`;
      else {
        return `${tab}${key} \n${formatStr(value , ( tab + '\t') )}`;
      }
    })
    .join('');
};

export const consoleError = ( ...records: any[] ): void => {
  const STYLE = 'color: white; background-color: #df3b3b;';
  const STR   = formatStr( records );
  console.log( `%c${STR}` , STYLE );
};
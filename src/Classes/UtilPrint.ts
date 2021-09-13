const formatStr = ( records: any, tab: string = '' ): string => {
  return Object.entries(records)
    .map(([key, value]) => {
      return ( typeof value !== 'object' ) ?
        `${tab}${key}: ${value} (${typeof value})\n` :
        `${tab}${key} \n${formatStr(value , ( tab + '\t') )}`;
    })
    .join('');
};

export const consoleError = ( ...records: any[] ): void => {
  const STYLE = 'color: white; background-color: #df3b3b;';
  const STR   = formatStr( records );
  console.log( `%c${STR}` , STYLE );
};
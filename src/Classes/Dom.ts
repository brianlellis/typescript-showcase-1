export class DomTable {
  private Wrap( value: string, tag: string = '', class_str: string = '' ): string {
    return value ? `<${tag} class="${class_str}">${value}</${tag}>` : value;
  }
  
  create( table_info: any ): void {
    let body    = '';
    let headers = '';
    
    if ( table_info.heads ) {
      for( const KEY in table_info.heads ) {
        headers += this.Wrap( table_info.heads[ KEY ], 'th' );
      }
      body += this.Wrap( headers, 'thead' );
    }
    
    if ( table_info.rows ) {
      let rows = '';
      for( const KEY in table_info.rows ) {
        let cells = '';
        
        for( const INNER_KEY in table_info.rows[ KEY ] ) {
          cells += this.Wrap( table_info.rows[ KEY ][ INNER_KEY ] , 'td' );
        }
        
        rows += this.Wrap( cells, 'tr' );
      }
      body += this.Wrap( rows, 'tbody' );
    }
    document.body.innerHTML += this.Wrap( body , 'table', table_info.class );
  }
}
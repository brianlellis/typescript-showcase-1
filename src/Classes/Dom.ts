export class DomTable {
  private Wrap( value: string, class_str: string = '' ): string {
    return value ? `<table class="${class_str}">${value}</table>` : value;
  }
  private Body(   value: string ): string { return `<tbody>${value}</tbody>`; }
  private Head(   value: string ): string { return `<thead>${value}</thead>`; }
  private tHead(  value: string ): string { return `<th>${value}</th>`; }
  private tRow(   value: string ): string { return `<tr>${value}</tr>`; }
  private tCell(  value: string ): string { return `<td>${value}</td>`; }
  
  create( table_info: any ): void {
    let body    = '';
    let headers = '';
    let rows    = '';
    let cells   = '';
    
    if ( table_info.heads ) {
      for( const KEY in table_info.heads ) {
        headers += this.tHead( table_info.heads[ KEY ] );
      }
    }
    
    if ( table_info.rows ) {
      for( const KEY in table_info.rows ) {
        cells = '';
        
        for( const INNER_KEY in table_info.rows[ KEY ] ) {
          cells += this.tCell( table_info.rows[ KEY ][ INNER_KEY ] );
        }
        
        if ( cells ) rows += this.tRow( cells );
      }
    }
    
    if ( headers )  body += this.Head( headers );
    if ( rows )     body += this.Body( rows );
    document.body.innerHTML += this.Wrap( body , table_info.class );
  }
}
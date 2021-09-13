export class DomTable {
    Wrap(value, class_str = '') {
        return value ? `<table class="${class_str}">${value}</table>` : value;
    }
    Body(value) { return `<tbody>${value}</tbody>`; }
    Head(value) { return `<thead>${value}</thead>`; }
    tHead(value) { return `<th>${value}</th>`; }
    tRow(value) { return `<tr>${value}</tr>`; }
    tCell(value) { return `<td>${value}</td>`; }
    create(table_info) {
        let body = '';
        let headers = '';
        let rows = '';
        let cells = '';
        if (table_info.heads) {
            for (const KEY in table_info.heads) {
                headers += this.tHead(table_info.heads[KEY]);
            }
        }
        if (table_info.rows) {
            for (const KEY in table_info.rows) {
                cells = '';
                for (const INNER_KEY in table_info.rows[KEY]) {
                    cells += this.tCell(table_info.rows[KEY][INNER_KEY]);
                }
                if (cells)
                    rows += this.tRow(cells);
            }
        }
        if (headers)
            body += this.Head(headers);
        if (rows)
            body += this.Body(rows);
        document.body.innerHTML += this.Wrap(body, table_info.class);
    }
}
//# sourceMappingURL=Dom.js.map
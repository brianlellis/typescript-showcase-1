export class DomTable {
    Wrap(value, tag = '', class_str = '') {
        return value ? `<${tag} class="${class_str}">${value}</${tag}>` : value;
    }
    create(table_info) {
        let body = '';
        let headers = '';
        let rows = '';
        let cells = '';
        if (table_info.heads) {
            for (const KEY in table_info.heads) {
                headers += this.Wrap(table_info.heads[KEY], 'th');
            }
        }
        if (table_info.rows) {
            for (const KEY in table_info.rows) {
                cells = '';
                for (const INNER_KEY in table_info.rows[KEY]) {
                    cells += this.Wrap(table_info.rows[KEY][INNER_KEY], 'td');
                }
                if (cells)
                    rows += this.Wrap(cells, 'tr');
            }
        }
        if (headers)
            body += this.Wrap(headers, 'thead');
        if (rows)
            body += this.Wrap(rows, 'tbody');
        document.body.innerHTML += this.Wrap(body, 'table', table_info.class);
    }
}
//# sourceMappingURL=Dom.js.map
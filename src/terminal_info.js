import tty from "node:tty";
// writeStream to stdout(1)
const writeStream = new tty.WriteStream(1);
function istty() {
    if (tty.isatty(1)) {
        return true;
    }
    else {
        return false;
    }
}
const ttySize = {
    cols: writeStream.columns,
    rows: writeStream.rows
};
export default {
    istty,
    ttySize
};
//# sourceMappingURL=terminal_info.js.map
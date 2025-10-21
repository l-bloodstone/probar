import tty from "node:tty"

// writeStream to stdout(1)
const writeStream = new tty.WriteStream(1)

function istty(): boolean {
    if (tty.isatty(1)) {
        return true
    } else {
        return false
    }
}

type TermSize = {
    cols: number
    rows: number
}

const ttySize: TermSize = {
    cols: writeStream.columns,
    rows: writeStream.rows
}

export default {
    istty,
    ttySize
}

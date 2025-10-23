const codes = Object.freeze({
    reset: "\x1b[0m",
    bold: "1",
    dim: "2",
    italic: "3",
    underline: "4",
    invert: "7",
    black: "30",
    red: "31",
    green: "32",
    yellow: "33",
    blue: "34",
    magenta: "35",
    cyan: "36",
    white: "37",
    blackBg: "40",
    redBg: "41",
    greenBg: "42",
    yellowBg: "43",
    blueBg: "44",
    magentaBg: "45",
    cyanBg: "46",
    whiteBg: "47",
    prefix : "\x1b[",
    suffix : "m"
})

function sanityCheck(options) {
    for (const opt of options) {
        if (!codes.hasOwnProperty(opt)){
            throw new Error(`${enc("ERROR:", ["red", "bold"])} Invalid Option '${opt}'.`)
        }
    }
}

function trunkRGBValues(RGB) {
    for (let [key, value] of Object.entries(RGB)) {
        if (value > 255) {
            RGB[key] = 255
        }
    }
    return RGB
}

export function decRGB(RGB) {
    if (!RGB) return
    const rgb = { r: 0, g: 0, b: 0 }
    if (Number.isInteger(RGB)) {
        if ( RGB > 0xffff ) {
            rgb.r = ~~((RGB & 0xff0000) / 0xffff)
        }
        if (RGB > 0xff) {
            rgb.g = ~~((RGB & 0x00ff00) / 0xff)
        }
        rgb.b = RGB & 0x0000ff
    } else {
        rgb.r = RGB.r
        rgb.g = RGB.g
        rgb.b = RGB.b
    }
    return trunkRGBValues(rgb)
}

export function enc(msg, options, RGB) {
    const rgb = decRGB(RGB)
    if (options != null) {
        sanityCheck(options)
        let codeStr = ""
        for (let i = 0; i < options.length; i++) {
            if (i === options.length - 1) {
                codeStr += `${codes[options[i]]}`
            } else {
                codeStr += `${codes[options[i]]};`
            }
        }
        if (rgb) {
            codeStr += `;38;2;${rgb.r};${rgb.g};${rgb.b}`
        }
        return `${codes.prefix}${codeStr}${codes.suffix}${msg}${codes.reset}`
    }
    return msg
}

export default { enc }

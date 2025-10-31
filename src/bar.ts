import cc from "./console_codes.js"
export type BarOptions = {
    trackPlaceholder: string
    trackColor: RGB | string
    fillPlaceholder: string
    fillColor: RGB | string
    barWidth: number
}

type RGB = {
    r: number,
    g: number,
    b: number
}

export class Bar {
    private options : BarOptions
    constructor(public opts ?: Partial<BarOptions>) { 
        this.options = {
            ...this.DefaultBarOption(),
            ...this.opts,
        }
    }

    private DefaultBarOption() : BarOptions{
        return {
            trackPlaceholder: " ",
            trackColor: "",
            fillPlaceholder: "▇",
            fillColor: "",
            barWidth: 35
        }
    }

    private generateBar(n: number): string {
        let finished: string = ""
        let unfinished: string = ""
        if (n > this.options.barWidth) {
            n = this.options.barWidth
        }
        for (let i = 0; i < this.options.barWidth - n; i++) {
            unfinished += this.options.trackPlaceholder
        }
        

        for (let i = 0; i <= n; i++) {
            finished += this.options.fillPlaceholder
        }

        let finishedColor: string = finished
        if (this.options.fillColor !== "") {
            finishedColor = `${cc.enc(finished, "", this.options.fillColor)}`
        }

        let unfinishedColor: string = unfinished
        if (this.options.trackColor !== "") {
            unfinishedColor = `${cc.enc(unfinished, "", this.options.trackColor)}`
        }
        return finishedColor + unfinishedColor
    }
    
    format(percent: number) : string {
        if (percent > 100) {
            percent = 100
        }
        const numberOfBlocks = ~~((this.options.barWidth / 100) * percent)
        return `╰─ Done: ${this.generateBar(numberOfBlocks)} ${percent}%`
    }
}

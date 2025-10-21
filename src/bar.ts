type BarOption = {
    placeHolder: string
    placeHolderColor: string
    donePlaceHolder: string
    doneColor: string
    barWidth: number
}

type UserOptions = Partial<BarOption>


class Bar {
    private options : BarOption
    constructor(public opts ?: UserOptions) { 
        this.options = {
            ...this.DefaultBarOption(),
            ...this.opts,
        }
    }

    private DefaultBarOption() : BarOption{
        return {
            placeHolder: " ",
            placeHolderColor: "",
            donePlaceHolder: "▇",
            doneColor: "",
            barWidth: 50
        }
    }

    private generateBar(n: number): string {
        const bar: string[] = []
        if (n > this.options.barWidth) {
            n = this.options.barWidth
        }
        for (let i = 0; i <= this.options.barWidth; i++) {
            bar[i] = this.options.placeHolder
        }

        for (let i = 0; i <= n; i++) {
            bar[i] = this.options.donePlaceHolder
        }
        return bar.join("")
    }
    
    format(percent: number) : string {
        if (percent > 100) {
            percent = 100
        }
        const numberOfBlocks = ~~((this.options.barWidth / 100) * percent)
        return `Done: ${this.generateBar(numberOfBlocks)} ${percent}%`
    }
}

export default Bar

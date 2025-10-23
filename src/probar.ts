import {Bar, type BarOptions} from "./bar.ts"
import process from "node:process"

type ProBarOptions = {
    barOpts: BarOptions
}

class ProBar {
    private bar: Bar
    private procsed: number = 0
    private currentProgress: number | null = null
    constructor(private total: number, private options?: ProBarOptions) { 
        if (options != null && options.barOpts != null) {
            this.bar = new Bar(options.barOpts)
        }
        this.bar = new Bar()
    }
    
    add(n: number = 1) {
        this.procsed += n
        this.render()
    }

    render() {
        const percent = ~~((this.procsed / this.total) * 100)
        // do not render to stdout if the current progress doesn't change
        if (this.currentProgress === percent) {
            return
        }
        this.currentProgress = percent
        if (percent === 100) {
            this.done()
            return
        }
        process.stdout.write("\r")
        process.stdout.write(this.bar.format(percent))
    }

    done() {
        if (this.currentProgress === 100) return
        process.stdout.write("\r")
        process.stdout.write(this.bar.format(100))
        process.stdout.write("  ✔")
    }
}

export default ProBar

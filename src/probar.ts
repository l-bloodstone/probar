import {Bar, type BarOptions} from "./bar.ts"
import process from "node:process"

type ProBarOptions = {
    title: string
    barOpts: BarOptions
}

class ProBar {
    private bar: Bar
    private procsed: number = 0
    private init: boolean = false
    private currentProgress: number | null = null
    private isDone: boolean = false
    constructor(private total: number, private options?: Partial<ProBarOptions>) { 
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

        if (!this.init && this.options?.title) {
            process.stdout.write(`╭───${this.options?.title}\n`)
            this.init = true
        } else if (!this.init && !this.options?.title) {
            process.stdout.write("╭───Processing ...\n")
            this.init = true
        }
        
        const percent = ~~((this.procsed / this.total) * 100)
        // do not render to stdout if the current progress doesn't change
        if (this.currentProgress === percent) {
            return
        }
        this.currentProgress = percent
        
        if (percent >= 100) {
            this.done()
            return
        }
        process.stdout.write("\r")
        process.stdout.write(this.bar.format(percent))
    }

    done() {
        if (this.isDone) return
        this.procsed = this.total
        this.isDone = true
        process.stdout.write("\r")
        process.stdout.write(this.bar.format(100))
        process.stdout.write("  ✔\n")
    }
}

export default ProBar

import {Bar, type BarOptions} from "./bar.ts"
import process from "node:process"

type ProBarOptions = {
    title: string
    barOpts: BarOptions
}

type UserProBarOptions = Partial<ProBarOptions>

class ProBar {
    private bar: Bar
    private procsed: number = 0
    private init: boolean = false
    private currentProgress: number | null = null
    constructor(private total: number, private options?: UserProBarOptions) { 
        if (options != null && options.barOpts != null) {
            this.bar = new Bar(options.barOpts)
        }
        this.bar = new Bar()
    }
    
    add(n: number = 1) {
        if (this.procsed > this.total) return
        this.procsed += n
        this.render()
    }

    render() {

        if (!this.init && this.options?.title) {
            process.stdout.write(`╭───${this.options?.title}\n`)
        } else if (!this.init && !this.options?.title) {
            process.stdout.write("╭───Processing ...\n")
        }
        this.init = true
        
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
        process.stdout.write("\r")
        process.stdout.write(this.bar.format(100))
        process.stdout.write("  ✔")
    }
}

export default ProBar

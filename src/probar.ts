import {Bar, type BarOptions} from "./bar.ts"
import process from "node:process"

type ProBarOptions = {
    barOptions: BarOptions
}

class ProBar {
    private bar: Bar
    private procsed: number = 0
    constructor(private total: number, private options?: ProBarOptions) { 
        if (options != null) {
            this.bar = new Bar(options.barOptions)
        }
        this.bar = new Bar()
    }
    
    add(n: number = 1) {
        this.procsed += n
        this.render()
    }

    render() {
        const percent = ~~((this.procsed / this.total) * 100)
        process.stdout.write("\r")
        process.stdout.write(this.bar.format(percent))
    }

    done() {
        this.render()
        process.stdout.write("  ✔")
    }
}

export default ProBar

import { Bar } from "./bar.js";
import process from "node:process";
class ProBar {
    total;
    options;
    bar;
    procsed = 0;
    init = false;
    currentProgress = null;
    constructor(total, options) {
        this.total = total;
        this.options = options;
        if (options != null && options.barOpts != null) {
            this.bar = new Bar(options.barOpts);
        }
        this.bar = new Bar();
    }
    add(n = 1) {
        if (this.procsed > this.total)
            return;
        this.procsed += n;
        this.render();
    }
    render() {
        if (!this.init && this.options?.title) {
            process.stdout.write(`╭───${this.options?.title}\n`);
        }
        else if (!this.init && !this.options?.title) {
            process.stdout.write("╭───Processing ...\n");
        }
        this.init = true;
        const percent = ~~((this.procsed / this.total) * 100);
        // do not render to stdout if the current progress doesn't change
        if (this.currentProgress === percent) {
            return;
        }
        this.currentProgress = percent;
        if (percent === 100) {
            this.done();
            return;
        }
        process.stdout.write("\r");
        process.stdout.write(this.bar.format(percent));
    }
    done() {
        this.procsed = this.total;
        process.stdout.write("\r");
        process.stdout.write(this.bar.format(100));
        process.stdout.write("  ✔\n");
    }
}
export default ProBar;
//# sourceMappingURL=probar.js.map
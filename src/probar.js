import { Bar } from "./bar.js";
import process from "node:process";
class ProBar {
    total;
    options;
    bar;
    procsed = 0;
    constructor(total, options) {
        this.total = total;
        this.options = options;
        if (options != null) {
            this.bar = new Bar(options.barOptions);
        }
        this.bar = new Bar();
    }
    add(n = 1) {
        this.procsed += n;
        this.render();
    }
    render() {
        const percent = ~~((this.procsed / this.total) * 100);
        process.stdout.write("\r");
        process.stdout.write(this.bar.format(percent));
    }
    done() {
        this.render();
        process.stdout.write("  ✔");
    }
}
export default ProBar;
//# sourceMappingURL=probar.js.map
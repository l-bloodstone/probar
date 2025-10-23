import cc from "./console_codes.js";
export class Bar {
    opts;
    options;
    constructor(opts) {
        this.opts = opts;
        this.options = {
            ...this.DefaultBarOption(),
            ...this.opts,
        };
    }
    DefaultBarOption() {
        return {
            trackPlaceholder: " ",
            trackColor: "",
            fillPlaceholder: "▇",
            fillColor: "",
            barWidth: 35
        };
    }
    generateBar(n) {
        let finished = "";
        let unfinished = "";
        if (n > this.options.barWidth) {
            n = this.options.barWidth;
        }
        for (let i = 0; i < this.options.barWidth - n; i++) {
            unfinished += this.options.trackPlaceholder;
        }
        for (let i = 0; i <= n; i++) {
            finished += this.options.fillPlaceholder;
        }
        let finishedColor = finished;
        if (this.options.fillColor !== "") {
            finishedColor = `${cc.enc(finished, "", this.options.fillColor)}`;
        }
        let unfinishedColor = unfinished;
        if (this.options.trackColor !== "") {
            unfinishedColor = `${cc.enc(unfinished, "", this.options.trackColor)}`;
        }
        return finishedColor + unfinishedColor;
    }
    format(percent) {
        if (percent > 100) {
            percent = 100;
        }
        const numberOfBlocks = ~~((this.options.barWidth / 100) * percent);
        return `Done: ${this.generateBar(numberOfBlocks)} ${percent}%`;
    }
}
//# sourceMappingURL=bar.js.map
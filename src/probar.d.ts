import { type BarOptions } from "./bar.ts";
type ProBarOptions = {
    barOpts: BarOptions;
};
declare class ProBar {
    private total;
    private options?;
    private bar;
    private procsed;
    private currentProgress;
    constructor(total: number, options?: ProBarOptions | undefined);
    add(n?: number): void;
    render(): void;
    done(): void;
}
export default ProBar;
//# sourceMappingURL=probar.d.ts.map
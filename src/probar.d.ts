import { type BarOptions } from "./bar.ts";
type ProBarOptions = {
    barOptions: BarOptions;
};
declare class ProBar {
    private total;
    private options?;
    private bar;
    private procsed;
    constructor(total: number, options?: ProBarOptions | undefined);
    add(n?: number): void;
    render(): void;
    done(): void;
}
export default ProBar;
//# sourceMappingURL=probar.d.ts.map
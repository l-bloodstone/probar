import { type BarOptions } from "./bar.ts";
type ProBarOptions = {
    title: string;
    barOpts: BarOptions;
};
declare class ProBar {
    private total;
    private options?;
    private bar;
    private procsed;
    private init;
    private currentProgress;
    private isDone;
    constructor(total: number, options?: Partial<ProBarOptions> | undefined);
    add(n?: number): void;
    render(): void;
    done(): void;
}
export default ProBar;
//# sourceMappingURL=probar.d.ts.map
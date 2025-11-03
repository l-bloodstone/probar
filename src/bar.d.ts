export type BarOptions = {
    trackPlaceholder: string;
    trackColor: RGB | string;
    fillPlaceholder: string;
    fillColor: RGB | string;
    barWidth: number;
};
type RGB = {
    r: number;
    g: number;
    b: number;
};
export declare class Bar {
    opts?: Partial<BarOptions> | undefined;
    private options;
    constructor(opts?: Partial<BarOptions> | undefined);
    private DefaultBarOption;
    private generateBar;
    format(percent: number): string;
}
export {};
//# sourceMappingURL=bar.d.ts.map
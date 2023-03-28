export declare function getThemeData(): Promise<unknown>;
export declare function getComponentStyles({ themeItemData, }: {
    themeItemData: TypeTarget;
}): string;
export type TypeStyle = {
    name: string;
    value: string;
};
export type TypeTarget = {
    tag: string;
    instanceId?: string;
    styles: TypeStyle[];
};
export type TypeThemeData = {
    name: string;
    targets: TypeTarget[];
};

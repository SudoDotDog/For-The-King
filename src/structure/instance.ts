/**
 * @author WMXPY
 * @namespace ForTheKing_Structure
 * @description Instance
 */

export type SaveStructureInstance = {

    readonly $content: boolean;
    readonly $type: "System.Boolean";
} | {

    readonly $content: number;
    readonly $type: "System.Int32";
} | {

    readonly $content: number;
    readonly $type: "System.Single";
} | {

    readonly $content: string;
    readonly $type: "System.String";
};

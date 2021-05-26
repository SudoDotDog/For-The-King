/**
 * @author WMXPY
 * @namespace ForTheKing_Structure
 * @description Instance
 */

export type SaveStructureBooleanInstance = {

    readonly $content: boolean;
    readonly $type: "System.Boolean";
};

export type SaveStructureIntegerInstance = {
    readonly $content: number;
    readonly $type: "System.Int32";
};

export type SaveStructureSingleInstance = {
    readonly $content: number;
    readonly $type: "System.Single";
};

export type SaveStructureStringInstance = {
    readonly $content: string;
    readonly $type: "System.String";
};

export type SaveStructureInstance =
    SaveStructureBooleanInstance
    | SaveStructureIntegerInstance
    | SaveStructureSingleInstance
    | SaveStructureStringInstance;

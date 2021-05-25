/**
 * @author WMXPY
 * @namespace ForTheKing_Save
 * @description Save
 */

import { SaveStructure } from "../structure/structure";
import { verifySaveStructure } from "../structure/verify";

export class ForTheKingSave {

    public static fromJSON(json: string): ForTheKingSave {

        const parsed: SaveStructure = JSON.parse(json);
        return ForTheKingSave.fromStructure(parsed);
    }

    public static fromStructure(structure: SaveStructure): ForTheKingSave {

        const verifyResult: boolean = verifySaveStructure(structure);
        if (!verifyResult) {
            throw new Error('[For-The-King] Invalid Structure');
        }

        return new ForTheKingSave(structure);
    }

    private readonly _structure: SaveStructure;

    private constructor(structure: SaveStructure) {

        this._structure = structure;
    }
}

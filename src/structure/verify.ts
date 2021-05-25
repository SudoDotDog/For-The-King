/**
 * @author WMXPY
 * @namespace ForTheKing_Structure
 * @description Verify
 */

import { SaveStructure } from "./structure";

export const verifySaveStructure = (structure: SaveStructure): boolean => {

    if (structure.m_GameInfo.m_Version !== '1.1.00') {
        return false;
    }

    return true;
};

/**
 * @author WMXPY
 * @namespace ForTheKing_Structure
 * @description State
 */

import { SaveStructureInstance, SaveStructureIntegerInstance } from "./instance";

/* eslint-disable camelcase */
export type SaveStateCOWData = {

    readonly m_WaitForRespawn: SaveStructureInstance;
    readonly m_PlayerInventory: {
        readonly m_ContainerBackpack: {
            readonly m_ID: "Backpack";
            readonly m_ItemCounts: {
                readonly conTinderBox: number;
                readonly townTeleport: number;
                readonly questShovel: number;
                readonly bluntSmithHammer: number;
                readonly shieldblacksmith: number;
                readonly shieldbucklerwood: number;
                readonly conRum: number;
                readonly bluntBeastman: number;
                readonly $id: string;
            };
        };
    };
};

export type SaveStateCSData = {

    readonly m_AugmentedDamagePhysical: SaveStructureIntegerInstance;
    readonly m_AugmentedDamageMagic: SaveStructureIntegerInstance;
};

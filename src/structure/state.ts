/**
 * @author WMXPY
 * @namespace ForTheKing_Structure
 * @description State
 */

import { SaveStructureAnyInstance, SaveStructureInstance, SaveStructureIntegerInstance, SaveStructureStringInstance } from "./instance";

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
    readonly m_AugmentedDefensePhysical: SaveStructureIntegerInstance;
    readonly m_AugmentedDefenseMagic: SaveStructureIntegerInstance;
    readonly m_AugmentedEvadeRating: SaveStructureIntegerInstance;
    readonly m_AugmentedToughness: SaveStructureIntegerInstance;
    readonly m_AugmentedAwareness: SaveStructureIntegerInstance;
    readonly m_AugmentedFortitude: SaveStructureIntegerInstance;
    readonly m_AugmentedQuickness: SaveStructureIntegerInstance;
    readonly m_AugmentedVitality: SaveStructureIntegerInstance;
    readonly m_AugmentedTalent: SaveStructureIntegerInstance;
    readonly m_AugmentedLuck: SaveStructureIntegerInstance;
    readonly m_AugmentedMaxFocus: SaveStructureIntegerInstance;
    readonly m_AugmentedMaxHealth: SaveStructureIntegerInstance;

    readonly m_ActionPoints: SaveStructureIntegerInstance;
    readonly m_FocusPoints: SaveStructureIntegerInstance;
    readonly m_HealthCurrent: SaveStructureIntegerInstance;
    readonly m_PlayerXP: SaveStructureIntegerInstance;
    readonly m_PlayerLevel: SaveStructureIntegerInstance;
    readonly m_Gold: SaveStructureIntegerInstance;

    readonly m_ActiveCurses: SaveStructureIntegerInstance;
    readonly m_PermaCurses: SaveStructureIntegerInstance;
    readonly m_ActiveAuras: SaveStructureIntegerInstance;

    readonly m_DevotedSanctumID: {
        readonly m_BigIndex: number;
        readonly m_SmallIndex: null;
        readonly $type: string;
        readonly $id: string;
    };
    readonly m_MySanctumID: SaveStructureAnyInstance;
    readonly m_Pipe: SaveStructureAnyInstance;
    readonly m_GhostPoints: SaveStructureIntegerInstance;
    readonly m_ResistDeathPoints: SaveStructureIntegerInstance;
    readonly m_InnQue: SaveStructureIntegerInstance;
    readonly m_PoisonLvl: SaveStructureIntegerInstance;
    readonly m_DiseaseLvl: SaveStructureIntegerInstance;
    readonly m_DiseaseType: SaveStructureStringInstance;
    readonly m_RoundsAbandoned: SaveStructureIntegerInstance;
    readonly m_StatTrack: {
        readonly TotalDamage: number;
        readonly HightestDamage: number;
        readonly killCount: number;
        readonly $type: any;
    };
};

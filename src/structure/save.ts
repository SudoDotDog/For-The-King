/**
 * @author WMXPY
 * @namespace ForTheKing_Structure
 * @description Save
 */

/* eslint-disable camelcase */
export type SaveStructurePosition = {

    readonly x: number;
    readonly y: number;
    readonly z: number;
};

export type SaveStructureInstance = {

    readonly $content: boolean;
    readonly $type: "System.Boolean";
} | {

    readonly $content: number;
    readonly $type: "System.Int32";
} | {

    readonly $content: string;
    readonly $type: "System.String";
};

export type SaveStructureGameInfo = {

    readonly m_Version: "1.1.00";
    readonly m_GameDefinition: string;
    readonly m_GameRoomName: string;
    readonly m_GameType: string;
    readonly m_Diff: string;
    readonly m_DiffType: string;
    readonly m_SaveTime: string;
    readonly m_GameDay: number;
    readonly m_Duration: number;
    readonly m_PlayedWith: string[];
    readonly m_PlayedWithClass: string[];
    readonly m_PlayedWithLevel: string[];
    readonly m_TOD: string;
    readonly m_IsAutoSave: boolean;
    readonly m_Rules: {
        readonly m_ChaosFrequency: number;
        readonly m_StartLifePool: number;
        readonly m_Inflation: number;
    };
    readonly m_Rules2: {
        readonly m_Params: {
            readonly chaos: number;
            readonly lifepool: number;
            readonly inflation: number;
            readonly $id: string;
        };
        readonly $id: string;
    };
    readonly m_MapGenSeed: number;
    readonly m_PreferredStartRealms: null;
};

export type SaveStructureGameStates = {

    readonly m_GameLogicStates: string;
    readonly m_GameFlowStates: string;
    readonly m_PlayerCurrentTurn: {
        readonly m_TurnIndex: number;
        readonly m_PhotonID: number;
    };
    readonly m_CurrentPlayerInOW: boolean;
    readonly m_QuestList: any[];
    readonly m_QuestIDs: number[];
    readonly m_AirShipStates: any;
    readonly m_IsAutoSave: boolean;
};


export type SaveStructurePlayer = {

    readonly m_InstData: SaveStructureInstance[];
    readonly m_PlayerID: {
        readonly m_TurnIndex: number;
        readonly m_PhotonID: number;
    };
    readonly m_CharacterName: any;
    readonly m_StateCOWData: string;
    readonly m_StateCSData: string;
};

export type SaveStructure = {

    readonly m_GameInfo: SaveStructureGameInfo;
    readonly m_Map: {
        readonly m_BigHexArray: string[];
        readonly m_BigHaxOceanArray: null;
        readonly m_BigHexPosArray: SaveStructurePosition[];
        readonly m_BigHexRotArray: number[];
        readonly m_BorderHexPosArray: SaveStructurePosition[];
        readonly m_BorderHexRotArray: number[];
        readonly m_MiniHexArray: string[];
        readonly m_MiniHexInstArray: any[];
        readonly m_MiniHexStateDataArray: string[];
        readonly m_CloudRevealArray: Array<number[] | null>;
        readonly m_DarkCloudArray: any[];
        readonly m_HexLandRevealArray: number[][];
    };
    readonly m_GameStates: SaveStructureGameStates;
    readonly m_Duration: number;
    readonly m_OnlinePlayerIds: any;
    readonly m_PlayerSerialize: SaveStructurePlayer[];
};

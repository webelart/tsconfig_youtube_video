/**
 * -------------------
 * compilerOptions -> Type Checking
 */
declare function fn(n: number): boolean;
declare function verifyAge(age: number): void;
declare let mistypeVariable: any;
declare var evalX: any;
interface UserDefaults {
    name: string;
    colorThemeOverride?: "dark" | "light";
}
declare const settings: UserDefaults;
declare const a: number;
declare function f(): void;
declare function fn2(s: string): void;
declare class Album {
    setup(): void;
}
declare class MLAlbum extends Album {
    setup(): void;
}
declare class SharedAlbum extends Album {
    setup(): void;
}
declare function lookupHeadphonesManufacturer(color: "blue" | "black"): string | undefined;
declare class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number);
    getAreaFunction(): () => number;
    getAreaFunction2(): () => number;
}
interface GameSettings {
    speed: "fast" | "medium" | "slow";
    quality: "high" | "low";
    [key: string]: string;
}
declare const settings2: GameSettings;
interface EnvironmentVars {
    NAME: string;
    OS: string;
    [propName: string]: string;
}
declare const env: EnvironmentVars;
declare const sysName: string;
declare const os2: string;
declare const nodeEnv1: string | undefined;
declare const nodeEnv2: string;
declare const createKeyboard: (modelID: number) => {
    type: string;
    modelID: number;
};
declare const createDefaultKeyboard: (modelID: number) => {
    type: string;
    modelID: number;
};
declare function fn3(x: string): number;
declare const n1: number;
declare const n2: number;
declare function fn5(x: string): void;
declare type StringOrNumberFunc = (ns: string | number) => void;
declare let func1: StringOrNumberFunc;
declare const loggedInUsername: string;
declare const users: {
    name: string;
    age: number;
}[];
declare const loggedInUser: {
    name: string;
    age: number;
} | undefined;
declare class UserAccount {
    name: string;
    accountType: string;
    email: string;
    address: string | undefined;
    constructor(name: string);
}
/**
 * -------------------
 * compilerOptions -> Modules
 */
/**
 * -------------------
 * compilerOptions -> Emit
 */
/**
 * -------------------
 * compilerOptions -> JavaScript Support
 */
/**
 * -------------------
 * compilerOptions -> Editor Support
 */
/**
 * -------------------
 * compilerOptions -> Interop Containts
 */
/**
 * -------------------
 * compilerOptions -> Backwards Compatibility
 */
/**
 * -------------------
 * compilerOptions -> Language and Environment
 */
/**
 * -------------------
 * compilerOptions -> Compiler Diagnostics
 */
/**
 * -------------------
 * compilerOptions -> Projects
 */
/**
 * -------------------
 * compilerOptions -> Output Formatting
 */
/**
 * -------------------
 * compilerOptions -> Completeness
 */
/**
 * -------------------
 * compilerOptions -> Watch Options
 */

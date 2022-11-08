/**
 * -------------------
 * compilerOptions -> Type Checking 
 */

// compilerOptions -> Type Checking -> allowUnreachableCode
function fn(n: number) {
    if (n > 5) {
        return true;
    } else {
        return false; 
    }

    return true;
}

// compilerOptions -> Type Checking -> allowUnusedLabels
function verifyAge(age: number) {
    let i, j;

    loop1:
    for (i = 0; i < 3; i++) {
        loop2:
        for (j = 0; j < 3; j++) {
            if (i === 1 && j === 1) {
                continue loop1;
            }
            console.log(`i = ${i}, j = ${j}`);
        }
    }
}

// compilerOptions -> Type Checking -> alwaysStrict
let mistypeVariable;

/*
    Assuming no global variable mistypeVarible exists
   this line throws a ReferenceError due to the
   misspelling of "mistypeVariable" (lack of an "a")
*/
mistypeVariable = 17;

var evalX = eval("'use strict'; var x = 42; x;");

// compilerOptions -> Type Checking -> exactOptionalPropertyTypes 
interface UserDefaults {
    // The absence of a value represents 'system'
    name: string;
    colorThemeOverride?: "dark" | "light";
}

const settings: UserDefaults = {
    name: "Elena"
};
settings.colorThemeOverride = "dark";
settings.colorThemeOverride = "light";
 

// But not:
settings.colorThemeOverride = undefined;


// compilerOptions -> Type Checking -> noFallthroughCasesInSwitch
const a: number = 6;

function f() {
    switch (a) {
        case 0:
            console.log("even");
            break;
        case 1:
            console.log("odd");
            break;
    }
}

// compilerOptions -> Type Checking -> noImplicitAny
function fn2(s: string) {
    // No error?
    console.log(s.substring(3));
}
fn2(42);

// compilerOptions -> Type Checking -> noImplicitOverride
class Album {
    setup() {}
}
   
class MLAlbum extends Album {
    override setup() {}
}
   
class SharedAlbum extends Album {
    setup() {}
}

// compilerOptions -> Type Checking -> noImplicitReturns
function lookupHeadphonesManufacturer(color: "blue" | "black"): string | undefined {
    if (color === "blue") {
        return "beats";
    } else {
        "bose";
    }
    return;
}
// compilerOptions -> Type Checking -> noImplicitThis
class Rectangle {
    width: number;
    height: number;
   
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
   
    getAreaFunction() {
        return function () {
            // the context for this inside the function inside getAreaFunction is not the instance of the Rectangle.
            return this.width * this.height;
        };
    }

    getAreaFunction2() {
        return () => {
            return this.width * this.height;
        };
    }
}
// compilerOptions -> Type Checking -> noPropertyAccessFromIndexSignature
interface GameSettings {
    // Known up-front properties
    speed: "fast" | "medium" | "slow";
    quality: "high" | "low";
   
    // Assume anything unknown to the interface
    // is a string.
    [key: string]: string;
}
   
const settings2: GameSettings = {
    speed: "fast",
    quality: "high",
    test: 'test',
    '0fasdf': '23'
};
settings2['0fasdf'];
settings2

// compilerOptions -> Type Checking -> noUncheckedIndexedAccess
interface EnvironmentVars {
    NAME: string;
    OS: string;
   
    // Unknown properties are covered by this index signature.
    [propName: string]: string;
}
   
declare const env: EnvironmentVars;

// Declared as existing
const sysName = env.NAME;
const os2 = env.OS;

// Not declared, but because of the index
// signature, then it is considered a string
const nodeEnv1 = env['NODE_ENV'];

const nodeEnv2: string

// compilerOptions -> Type Checking -> noUnusedLocals

const createKeyboard = (modelID: number) => {
    const defaultModelID = 23;
    return { type: "keyboard", modelID };
};

// compilerOptions -> Type Checking -> noUnusedParameters
const createDefaultKeyboard = (modelID: number) => {
    const defaultModelID = 23;
    return { type: "keyboard", modelID: defaultModelID };
};

// compilerOptions -> Type Checking -> strict
/*
    Related:
        alwaysStrict
        strictNullChecks
        strictBindCallApply
        strictFunctionTypes
        strictPropertyInitialization
        noImplicitAny
        noImplicitThis
        useUnknownInCatchVaria
*/
// compilerOptions -> Type Checking -> strictBindCallApply
function fn3(x: string) {
    return parseInt(x);
}
   
const n1 = fn3.call(undefined, "10");
const n2 = fn3.call(undefined, false);

// compilerOptions -> Type Checking -> strictFunctionTypes
function fn5(x: string) {
    console.log("Hello, " + x.toLowerCase());
}

type StringOrNumberFunc = (ns: string | number) => void;

// Unsafe assignment
let func1: StringOrNumberFunc = fn5;
// Unsafe call - will crash
func1(10);


// compilerOptions -> Type Checking -> strictNullChecks
declare const loggedInUsername: string;
 
const users = [
  { name: "Oby", age: 12 },
  { name: "Heera", age: 32 },
];
 
const loggedInUser = users.find((u) => u.name === loggedInUsername);
console.log(loggedInUser.age);

// compilerOptions -> Type Checking -> strictPropertyInitialization
class UserAccount {
    name: string;
    accountType = "user";
   
    email: string;
    address: string | undefined;
   
    constructor(name: string) {
      this.name = name;
      // Note that this.email is not set
    }
}
// compilerOptions -> Type Checking -> useUnknownInCatchVariables
try {
    // ...
} catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
}

/**
 * -------------------
 * compilerOptions -> Modules
 */

// compilerOptions -> Modules -> allowUmdGlobalAccess
// compilerOptions -> Modules -> baseUrl
// compilerOptions -> Modules -> module
// compilerOptions -> Modules -> moduleResolution
// compilerOptions -> Modules -> moduleSuffixes
// compilerOptions -> Modules -> noResolve
// compilerOptions -> Modules -> paths
// compilerOptions -> Modules -> resolveJsonModule
// compilerOptions -> Modules -> rootDir
// compilerOptions -> Modules -> rootDirs
// compilerOptions -> Modules -> typeRoots
// compilerOptions -> Modules -> types


/**
 * -------------------
 * compilerOptions -> Emit
 */

// compilerOptions -> Emit -> declaration
// compilerOptions -> Emit -> declarationDir
// compilerOptions -> Emit -> declarationMap
// compilerOptions -> Emit -> downlevelIteration
// compilerOptions -> Emit -> emitBOM
// compilerOptions -> Emit -> emitDeclarationOnly
// compilerOptions -> Emit -> importHelpers
// compilerOptions -> Emit -> importsNotUsedAsValues
// compilerOptions -> Emit -> inlineSourceMap
// compilerOptions -> Emit -> inlineSources
// compilerOptions -> Emit -> mapRoot
// compilerOptions -> Emit -> newLine
// compilerOptions -> Emit -> noEmit
// compilerOptions -> Emit -> noEmitHelpers
// compilerOptions -> Emit -> noEmitOnError
// compilerOptions -> Emit -> outDir
// compilerOptions -> Emit -> outFile
// compilerOptions -> Emit -> preserveConstEnums
// compilerOptions -> Emit -> preserveValueImports
// compilerOptions -> Emit -> removeComments
// compilerOptions -> Emit -> sourceMap
// compilerOptions -> Emit -> sourceRoot
// compilerOptions -> Emit -> stripInternal


/**
 * -------------------
 * compilerOptions -> JavaScript Support
 */

// compilerOptions -> JavaScript Support -> allowJs
// compilerOptions -> JavaScript Support -> checkJs
// compilerOptions -> JavaScript Support -> maxNodeModuleJsDepth

/**
 * -------------------
 * compilerOptions -> Editor Support
 */

// compilerOptions -> Editor Support -> disableSizeLimit
// compilerOptions -> Editor Support -> plugins

/**
 * -------------------
 * compilerOptions -> Interop Containts
 */

// compilerOptions -> Interop Containts -> allowSyntheticDefaultImports
// compilerOptions -> Interop Containts -> esModuleInterop
// compilerOptions -> Interop Containts -> forceConsistentCasingInFileNames
// compilerOptions -> Interop Containts -> isolatedModules
// compilerOptions -> Interop Containts -> preserveSymlinks

/**
 * -------------------
 * compilerOptions -> Backwards Compatibility
 */

// compilerOptions -> Interop Containts -> charset
// compilerOptions -> Interop Containts -> keyofStringsOnly
// compilerOptions -> Interop Containts -> noImplicitUseStrict
// compilerOptions -> Interop Containts -> noStrictGenericChecks
// compilerOptions -> Interop Containts -> out
// compilerOptions -> Interop Containts -> suppressExcessPropertyErrors
// compilerOptions -> Interop Containts -> suppressImplicitAnyIndexErrors

/**
 * -------------------
 * compilerOptions -> Language and Environment
 */

// compilerOptions -> Language and Environment -> emitDecoratorMetadata
// compilerOptions -> Language and Environment -> experimentalDecorators
// compilerOptions -> Language and Environment -> jsx
// compilerOptions -> Language and Environment -> jsxFactory
// compilerOptions -> Language and Environment -> jsxFragmentFactory
// compilerOptions -> Language and Environment -> jsxImportSource
// compilerOptions -> Language and Environment -> lib
// compilerOptions -> Language and Environment -> moduleDetection
// compilerOptions -> Language and Environment -> noLib
// compilerOptions -> Language and Environment -> reactNamespace
// compilerOptions -> Language and Environment -> target
// compilerOptions -> Language and Environment -> useDefineForClassFields

/**
 * -------------------
 * compilerOptions -> Compiler Diagnostics
 */

// compilerOptions -> Compiler Diagnostics -> diagnostics
// compilerOptions -> Compiler Diagnostics -> explainFiles
// compilerOptions -> Compiler Diagnostics -> extendedDiagnostics
// compilerOptions -> Compiler Diagnostics -> generateCpuProfile
// compilerOptions -> Compiler Diagnostics -> listEmittedFiles
// compilerOptions -> Compiler Diagnostics -> listFiles
// compilerOptions -> Compiler Diagnostics -> traceResolution

/**
 * -------------------
 * compilerOptions -> Projects
 */

// compilerOptions -> Projects -> composite
// compilerOptions -> Projects -> disableReferencedProjectLoad
// compilerOptions -> Projects -> disableSolutionSearching
// compilerOptions -> Projects -> disableSourceOfProjectReferenceRedirect
// compilerOptions -> Projects -> incremental
// compilerOptions -> Projects -> tsBuildInfoFile

/**
 * -------------------
 * compilerOptions -> Output Formatting
 */

// compilerOptions -> Output Formatting -> noErrorTruncation
// compilerOptions -> Output Formatting -> preserveWatchOutput
// compilerOptions -> Output Formatting -> pretty

/**
 * -------------------
 * compilerOptions -> Completeness
 */

// compilerOptions -> Completeness -> skipDefaultLibCheck
// compilerOptions -> Completeness -> skipLibCheck

/**
 * -------------------
 * compilerOptions -> Watch Options
 */
// compilerOptions -> Watch Options -> assumeChangesOnlyAffectDirectDependencies

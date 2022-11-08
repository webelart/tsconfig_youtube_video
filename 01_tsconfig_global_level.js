const obj = {
    /* Compiler Options */
    compilerOptions: {
        /* Type Checking */

        /*1. allowUnreachableCode
            • undefined (default) — provide suggestions as warnings to editors
            • true — unreachable code is ignored
            • false — raises compiler errors about unreachable code
        */
        allowUnreachableCode: false, // true, undefined


        /*2. allowUnusedLabels
            The error occurs because you declared a variable (without using const or let or var before it), and never use it. 

            • undefined (default) — provide suggestions as warnings to editors
            • true — unused labels are ignored
            • false — raises compiler errors about unused labels
        */
        allowUnusedLabels: false, // true, undefined


        /*3. alwaysStrict
            Ensures that your files are parsed in the ECMAScript strict mode, and emit “use strict” for each source file.
        */
        alwaysStrict: true, // false


        /*4. exactOptionalPropertyTypes
         *   Without this flag enabled, there are three values which you can
             set colorThemeOverride to be: “dark”, “light” and undefined.

             Wiht only dard and light
         */
        exactOptionalPropertyTypes: true, // false


        /*5. noFallthroughCasesInSwitch
            Report errors for fallthrough cases in switch statements. Ensures that any non-empty case inside a switch statement includes either break or return. This means you won’t accidentally ship a case fallthrough bug.
        */
        noFallthroughCasesInSwitch: true,


        /*6. noImplicitAny
            In some cases where no type annotations are present, TypeScript will fall back to a type of any for a variable when it cannot infer the type.
        */
        noImplicitAny: true, // false


        /*7. noImplicitOverride
            Using noImplicitOverride you can ensure that the sub-classes never go out of sync, by ensuring that functions which override include the keyword override.
        */
        noImplicitOverride: true, // false


        /*8. noImplicitReturns
            When enabled, TypeScript will check all code paths in a function to ensure they return a value.
        */
        noImplicitReturns: true, // false


        /*9. noImplicitThis
            Raise error on ‘this’ expressions with an implied ‘any’ type.
        */
        noImplicitThis: true, // false


        /*10. noPropertyAccessFromIndexSignature
            Without this flag, TypeScript will allow you to use the dot syntax to access fields which are not defined:
        */
        noPropertyAccessFromIndexSignature: true, // false


        /*11. noUncheckedIndexedAccess
         Turning on noUncheckedIndexedAccess will add undefined to any un-declared field in the type.
        */
        noUncheckedIndexedAccess: true, // false


        /*12. noUnusedLocals
            Report errors on unused local variables.
        */
        noUnusedLocals: true, // false


        /*13. noUnusedParameters
            Report errors on unused parameters in functions.
        */
        noUnusedParameters: true, // false


        /*14. strict
            The strict flag enables a wide range of type checking behavior that results in stronger guarantees of program correctness. 
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
        strict: true,


        /*15. strictBindCallApply
            When set, TypeScript will check that the built-in methods of functions call, bind, and apply are invoked with correct argument for the underlying function:
        */
        strictBindCallApply: true, // false


        /*16. strictFunctionTypes
            When enabled, this flag causes functions parameters to be checked more correctly.
        */
        strictFunctionTypes: true, // false


        /*17. strictNullChecks
            When strictNullChecks is false, null and undefined are effectively ignored by the language. This can lead to unexpected errors at runtime.

            When strictNullChecks is true, null and undefined have their own distinct types and you’ll get a type error if you try to use them where a concrete value is expected.
        */
        strictNullChecks: true, // false


        /*18. strictPropertyInitialization
            When set to true, TypeScript will raise an error when a class property was declared but not set in the constructor.
        */
        strictPropertyInitialization: true, // false


        /*19. useUnknownInCatchVariables
            In TypeScript 4.0, support was added to allow changing the type of the variable in a catch clause from any to unknown.
        */
        useUnknownInCatchVariables: true,

        /* Modules */
        // https://stackoverflow.com/questions/56104065/how-to-override-a-typescript-umd-global-type-definition
        allowUmdGlobalAccess: true, // false
        baseUrl: './src',
        /** */
        module: 'esnext',
        moduleSuffixes: [".ios", ".native", ""],
        noResolve: '', // ????
        paths: {},
        resolveJsonModule: true,
        rootDir: '',
        rootDirs: '',
        typeRoots: '',
        types: '',

        /* Emit */
        declaration: '',
        declarationDir: '',
        declarationMap: '',
        downlevelIteration: '',
        emitBOM: '',
        emitDeclarationOnly: '',
        importHelpers: '',
        importsNotUsedAsValues: '',
        inlineSourceMap: '',
        inlineSources: '',
        mapRoot: '',
        newLine: '',
        noEmit: '',
        noEmitHelpers: '',
        noEmitOnError: '',
        outDir: 'dist',
        outFile: '',
        preserveConstEnums: '',
        preserveValueImports: '',
        removeComments: '',
        sourceMap: '',
        sourceRoot: '',
        stripInternal: '',

        /* JavaScript Support */
        allowJs: '',
        checkJs: '',
        maxNodeModuleJsDepth: '',

        /* Editor Support */
        disableSizeLimit: '',
        plugins : '',

        /* Interop Containts */
        allowSyntheticDefaultImports : '',
        esModuleInterop : '',
        forceConsistentCasingInFileNames : '',
        isolatedModules : '',
        preserveSymlinks : '',

        /* Backwards Compatibility */
        charset: '',
        keyofStringsOnly: '',
        noImplicitUseStrict: '',
        noStrictGenericChecks: '',
        out: '',
        suppressExcessPropertyErrors: '',
        suppressImplicitAnyIndexErrors: '',

        /* Language and Environment */
        emitDecoratorMetadata: '',
        experimentalDecorators: '',
        jsx: '',
        jsxFactory: '',
        jsxFragmentFactory: '',
        jsxImportSource: '',
        lib: '',
        moduleDetection: '',
        noLib: '',
        reactNamespace: '',
        target: '',
        useDefineForClassFields: '',

        /* Compiler Diagnostics */
        diagnostics: '',
        explainFiles: '',
        extendedDiagnostics: '',
        generateCpuProfile: '',
        listEmittedFiles: '',
        listFiles: '',
        traceResolution: '',

        /* Projects */
        composite: '',
        disableReferencedProjectLoad: '',
        disableSolutionSearching: '',
        disableSourceOfProjectReferenceRedirect: '',
        incremental: '',
        tsBuildInfoFile: '',

        /* Output Formatting */
        noErrorTruncation: '',
        preserveWatchOutput: '',
        pretty: '',

        /* Completeness */
        skipDefaultLibCheck: '',
        skipLibCheck: '',

        /* Command Line — nothing*/

        /* Watch Options */
        assumeChangesOnlyAffectDirectDependencies: '',
    },
    watchOptions: {
        watchFile: '',
        watchDirectory: '',
        fallbackPolling: '',
        synchronousWatchDirectory: '',
        excludeDirectories: '',
        excludeFiles: '',
    },
    typeAcquisition: {
        enable: '',
        include: '',
        exclude: '',
        disableFilenameBasedTypeAcquisition: '',
    },

    /* Root Fields */
    files: [],
    extends: [],
    include: [],
    exclude: [],
    references: []
}
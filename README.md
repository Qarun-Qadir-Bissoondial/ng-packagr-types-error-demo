# ng-packagr-types-error-demo

```
Angular CLI: 9.1.7
Node: 13.13.0
OS: linux x64

Angular: 9.1.9
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
Ivy Workspace: Yes

Package                            Version
------------------------------------------------------------
@angular-devkit/architect          0.901.7
@angular-devkit/build-angular      0.901.7
@angular-devkit/build-ng-packagr   0.901.7
@angular-devkit/build-optimizer    0.901.7
@angular-devkit/build-webpack      0.901.7
@angular-devkit/core               9.1.7
@angular-devkit/schematics         9.1.7
@angular/cli                       9.1.7
@ngtools/webpack                   9.1.7
@schematics/angular                9.1.7
@schematics/update                 0.901.7
ng-packagr                         9.1.5
rxjs                               6.5.5
typescript                         3.8.3
webpack                            4.42.0
```

## Test-Lib
test-lib contains 2 entry points after following similar steps from [this tutorial](https://medium.com/angular-in-depth/improve-spa-performance-by-splitting-your-angular-libraries-in-multiple-chunks-8c68103692d0)

## Goal

Add custom declaration files to each secondary entry point. Not a duplicate of [#193](https://github.com/ng-packagr/ng-packagr/issues/193).

## Steps to reproduce

1. Clone this repo
2. Run `npm install`
3. Run `ng build --project test-lib`.

Points to note after building:

1. The secondary entry points are created successfully in `dist/test-lib`
2. Each entry point folder has the `d.ts` file
3. The triple-slash reference is off in the `name.component.d.ts` and `time.component.d.ts` since it matches the `types` string elements in `tsconfig.lib.json`.


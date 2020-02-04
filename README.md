# NG9 xi18n Ivy Lib Error

This repo demonstrates an error when trying to extract localized text from an Angular 9 Ivy build library

## To run

1. Clone the repository
2. To reproduce the error run the following from the root folder
```
npm run xi18n
```

you end up with the following error
```
ERROR in Unexpected value 'I18nModule in .../ng9-xi18n-lib/app/node_modules/lib-i18n/lib/i18n.module.d.ts' imported by the module 'AppModule in .../ng9-xi18n-lib/app/src/app/app.module.ts'. Please add a @NgModule annotation.
'lib-i18n' is not a known element:
1. If 'lib-i18n' is an Angular component, then verify that it is part of this module.
2. If 'lib-i18n' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message. ("<h1>{{title}}</h1>
[ERROR ->]<lib-i18n></lib-i18n>
")
```

however, if you try running `ng serve` on the app, it works just fine
```
npm start
```
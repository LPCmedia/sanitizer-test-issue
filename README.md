# Fooooooo

minimal reproduction of issues when trying to mock dom sanitizer in tests.

Seems that fixture.detectChanges is not using DomSanitizer's bypassSanitizationTrustResourceUrl and raises an xss error when interpreting the template's html.

see [repro](https://github.com/angular/angular/issues/44271)

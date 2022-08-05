import { __decorate, __param, __metadata } from 'tslib';
import { InjectionToken, Inject, NgZone, defineInjectable, inject, Injectable, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

var OpenCvConfigToken = new InjectionToken('OpenCV config object token');
var NgxOpenCVService = /** @class */ (function () {
    function NgxOpenCVService(options, _ngZone) {
        this._ngZone = _ngZone;
        this.cvState = new BehaviorSubject({
            ready: false,
            error: false,
            loading: true,
            state: 'loading'
        });
        if (!options) {
            options = {};
        }
        this.configModule = this.generateConfigModule(options);
        this.loadOpenCv();
    }
    /**
     * load the OpenCV script
     */
    NgxOpenCVService.prototype.loadOpenCv = function () {
        var _this = this;
        this.cvState.next(this.newState('loading'));
        // create global module variable
        window['Module'] = this.configModule;
        // create script element and set attributes
        var script = document.createElement('script');
        script.setAttribute('async', '');
        script.setAttribute('type', 'text/javascript');
        // listen for errors
        script.addEventListener('error', function () {
            var err = new Error('Failed to load ' + _this.configModule.scriptUrl);
            _this.cvState.next(_this.newState('error'));
            _this.cvState.error(err);
        }, { passive: true });
        // set script url
        script.src = this.configModule.scriptUrl;
        // insert script as first script tag
        var node = document.getElementsByTagName('script')[0];
        if (node) {
            node.parentNode.insertBefore(script, node);
        }
        else {
            document.head.appendChild(script);
        }
    };
    /**
     * generates a new state object
     * @param change - the new state of the module
     */
    NgxOpenCVService.prototype.newState = function (change) {
        var newStateObj = {
            ready: false,
            loading: false,
            error: false,
            state: ''
        };
        Object.keys(newStateObj).forEach(function (key) {
            if (key !== 'state') {
                if (key === change) {
                    newStateObj[key] = true;
                    newStateObj.state = key;
                }
                else {
                    newStateObj[key] = false;
                }
            }
        });
        return newStateObj;
    };
    /**
     * generates a config module for the global Module object
     * @param options - configuration options
     */
    NgxOpenCVService.prototype.generateConfigModule = function (options) {
        var _this = this;
        return {
            scriptUrl: options.openCVDirPath ? options.openCVDirPath + "/opencv.js" : "/assets/opencv/opencv.js",
            wasmBinaryFile: 'opencv_js.wasm',
            usingWasm: true,
            onRuntimeInitialized: function () {
                _this._ngZone.run(function () {
                    console.log('openCV Ready');
                    _this.cvState.next(_this.newState('ready'));
                    if (options.runOnOpenCVInit) {
                        options.runOnOpenCVInit();
                    }
                });
            }
        };
    };
    NgxOpenCVService.ctorParameters = function () {
        return [
            { type: undefined, decorators: [{ type: Inject, args: [OpenCvConfigToken,] }] },
            { type: NgZone }
        ];
    };
    NgxOpenCVService.ɵprov = defineInjectable({ factory: function NgxOpenCVService_Factory() { return new NgxOpenCVService(inject(OpenCvConfigToken), inject(NgZone)); }, token: NgxOpenCVService, providedIn: "root" });
    NgxOpenCVService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(OpenCvConfigToken)),
        __metadata("design:paramtypes", [Object, NgZone])
    ], NgxOpenCVService);
    return NgxOpenCVService;
}());

var NgxOpenCVModule = /** @class */ (function () {
    function NgxOpenCVModule() {
    }
    NgxOpenCVModule_1 = NgxOpenCVModule;
    NgxOpenCVModule.forRoot = function (config) {
        return {
            ngModule: NgxOpenCVModule_1,
            providers: [{ provide: OpenCvConfigToken, useValue: config }]
        };
    };
    var NgxOpenCVModule_1;
    NgxOpenCVModule = NgxOpenCVModule_1 = __decorate([
        NgModule({
            declarations: [],
            exports: [],
            providers: [NgxOpenCVService]
        })
    ], NgxOpenCVModule);
    return NgxOpenCVModule;
}());
var a = 0;

/**
 * Generated bundle index. Do not edit.
 */

export { NgxOpenCVModule, NgxOpenCVService, OpenCvConfigToken };
//# sourceMappingURL=ngx-opencv.js.map

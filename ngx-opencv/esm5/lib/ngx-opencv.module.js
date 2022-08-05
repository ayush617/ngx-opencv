import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { NgxOpenCVService, OpenCvConfigToken } from './ngx-open-cv.service';
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
export { NgxOpenCVModule };
var a = 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW9wZW5jdi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmN2LyIsInNvdXJjZXMiOlsibGliL25neC1vcGVuY3YubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQVExRTtJQUFBO0lBT0EsQ0FBQzt3QkFQWSxlQUFlO0lBQ25CLHVCQUFPLEdBQWQsVUFBZSxNQUFvQjtRQUNqQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFlO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUM5RCxDQUFDO0lBQ0osQ0FBQzs7SUFOVSxlQUFlO1FBTDNCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxFQUFFO1lBQ1gsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLGVBQWUsQ0FPM0I7SUFBRCxzQkFBQztDQUFBLEFBUEQsSUFPQztTQVBZLGVBQWU7QUFTNUIsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T3BlbkNWQ29uZmlnfSBmcm9tICcuL21vZGVscyc7XHJcbmltcG9ydCB7Tmd4T3BlbkNWU2VydmljZSwgT3BlbkN2Q29uZmlnVG9rZW59IGZyb20gJy4vbmd4LW9wZW4tY3Yuc2VydmljZSc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gIGV4cG9ydHM6IFtdLFxyXG4gIHByb3ZpZGVyczogW05neE9wZW5DVlNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hPcGVuQ1ZNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogT3BlbkNWQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hPcGVuQ1ZNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBOZ3hPcGVuQ1ZNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogT3BlbkN2Q29uZmlnVG9rZW4sIHVzZVZhbHVlOiBjb25maWcgfV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhID0gMDtcclxuIl19
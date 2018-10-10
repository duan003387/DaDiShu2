var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var start = (function (_super) {
    __extends(start, _super);
    function start() {
        return _super.call(this) || this;
    }
    start.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    start.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.Init();
    };
    start.prototype.Init = function () {
        var _this = this;
        this.height = this.stage.stageHeight;
        this.btn_Start.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.parent.addChild(new game());
            _this.parent.removeChild(_this);
        }, this);
    };
    return start;
}(eui.Component));
__reflect(start.prototype, "start", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=start.js.map
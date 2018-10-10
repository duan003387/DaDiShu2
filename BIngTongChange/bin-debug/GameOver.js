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
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        return _super.call(this) || this;
    }
    GameOver.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameOver.prototype.childrenCreated = function () {
        var _this = this;
        this.height = this.stage.stageHeight;
        _super.prototype.childrenCreated.call(this);
        this.scoreText.text = GameUtil.Constant.score.toString();
        this.btnPlayAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.parent.addChild(new game());
            GameUtil.Constant.score = 0;
            _this.parent.removeChild(_this);
        }, this);
    };
    return GameOver;
}(eui.Component));
__reflect(GameOver.prototype, "GameOver", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameOver.js.map
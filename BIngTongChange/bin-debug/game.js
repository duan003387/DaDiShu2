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
var game = (function (_super) {
    __extends(game, _super);
    function game() {
        var _this = _super.call(this) || this;
        _this.tongNum = 0;
        _this.time = 120;
        _this.speed = 1;
        _this.count = 0;
        return _this;
    }
    game.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    game.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.Init();
    };
    game.prototype.Init = function () {
        var _this = this;
        egret.startTick(this.Update, this);
        //定时器
        var s = setInterval(function () {
            if (_this.time > 0) {
                _this.time--;
                _this.timeDownTXT.text = _this.time.toString();
            }
            else {
                clearInterval(s);
            }
        }, 1000);
        this.StageH = this.stage.stageHeight;
        this.StageW = this.stage.stageWidth;
        this.height = this.StageH;
    };
    game.prototype.Update = function () {
        this.count++;
        if (this.count == Math.floor(120 / this.speed)) {
            this.PeopleChange();
            this.count = 0;
            this.speed += 0.05;
        }
        //判断游戏是否结束
        if (this.time <= 0) {
            this.parent.addChild(new GameOver());
            egret.stopTick(this.Update, this);
            this.parent.removeChild(this);
        }
        return false;
    };
    game.prototype.PeopleChange = function () {
        var _this = this;
        var ran = Math.floor(Math.random() * this.group.numChildren);
        var g = this.group.getChildAt(ran);
        var _loop_1 = function (i) {
            if (g.numChildren < 4) {
                if (ran == i) {
                    var random_1 = Math.floor(Math.random() * 3);
                    this_1.group.getChildAt(i).visible = true;
                    var img_1 = new egret.Bitmap(RES.getRes(GameUtil.peopleEnemy[random_1]));
                    g.addChild(img_1);
                    img_1.mask = g.getChildAt(0);
                    var h = img_1.y;
                    img_1.y += img_1.height;
                    var tw_1 = egret.Tween.get(img_1).to({ y: img_1.y - img_1.height }, 500).to({ y: img_1.y }, 500).call(function () {
                        _this.group.getChildAt(i).visible = false;
                        img_1.y -= img_1.height;
                        egret.Tween.removeTweens(img_1);
                        g.getChildAt(2).visible = false;
                        g.getChildAt(3).visible = false;
                        g.removeChild(img_1);
                        img_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, function () { }, _this);
                    });
                    img_1.touchEnabled = true;
                    img_1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                        tw_1.setPaused(true);
                        img_1.touchEnabled = false;
                        _this.tongNum++;
                        GameUtil.Constant.score++;
                        g.getChildAt(2).visible = true;
                        g.getChildAt(3).visible = true;
                        _this.tongNumTXT.text = _this.tongNum.toString();
                        img_1.texture = RES.getRes(GameUtil.peopleEnemyWet[random_1]);
                        setTimeout(function () {
                            tw_1.setPaused(false);
                        }, 200);
                    }, this_1);
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.group.numChildren; i++) {
            _loop_1(i);
        }
    };
    return game;
}(eui.Component));
__reflect(game.prototype, "game", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=game.js.map
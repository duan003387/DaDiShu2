var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameUtil;
(function (GameUtil) {
    var Constant = (function () {
        function Constant() {
        }
        Constant.score = 0;
        return Constant;
    }());
    GameUtil.Constant = Constant;
    __reflect(Constant.prototype, "GameUtil.Constant");
    var peopleEnemy;
    (function (peopleEnemy) {
        peopleEnemy[peopleEnemy["person-fs_png"] = 0] = "person-fs_png";
        peopleEnemy[peopleEnemy["person-lj_png"] = 1] = "person-lj_png";
        peopleEnemy[peopleEnemy["person-ldh_png"] = 2] = "person-ldh_png";
    })(peopleEnemy = GameUtil.peopleEnemy || (GameUtil.peopleEnemy = {}));
    var peopleEnemyWet;
    (function (peopleEnemyWet) {
        peopleEnemyWet[peopleEnemyWet["person-fs-wet_png"] = 0] = "person-fs-wet_png";
        peopleEnemyWet[peopleEnemyWet["person-lj-wet_png"] = 1] = "person-lj-wet_png";
        peopleEnemyWet[peopleEnemyWet["person-ldh-wet_png"] = 2] = "person-ldh-wet_png";
    })(peopleEnemyWet = GameUtil.peopleEnemyWet || (GameUtil.peopleEnemyWet = {}));
})(GameUtil || (GameUtil = {}));
//# sourceMappingURL=GameUtil.js.map
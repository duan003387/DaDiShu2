class game extends eui.Component implements eui.UIComponent {
	private StageH;
	private StageW;
	private group: eui.Group;
	private tongNumTXT: eui.Label;
	public tongNum = 0;

	public timeDownTXT: eui.Label;
	private time = 120;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.Init();
	}
	private Init() {
		egret.startTick(this.Update, this);
		//定时器
		let s = setInterval(() => {
			if (this.time > 0) {
				this.time--;
				this.timeDownTXT.text = this.time.toString();
			}
			else {
				clearInterval(s);
			}
		}, 1000)
		this.StageH = this.stage.stageHeight;
		this.StageW = this.stage.stageWidth;
		this.height = this.StageH;

	}

	private speed = 1;
	private count = 0;
	private Update(): boolean {
		this.count++;
		if (this.count == Math.floor(120 / this.speed)) {
			this.PeopleChange();
			this.count = 0;
			this.speed += 0.05;
		}

		//判断游戏是否结束
		if (this.time <= 0) {
			this.parent.addChild(new GameOver());
			egret.stopTick(this.Update, this)
			this.parent.removeChild(this);
		}
		return false;
	}

	private PeopleChange() {
		let ran = Math.floor(Math.random() * this.group.numChildren);
		let g: eui.Group = <eui.Group>this.group.getChildAt(ran);
		for (let i = 0; i < this.group.numChildren; i++) {
			if (g.numChildren < 4) {
				if (ran == i) {
					let random = Math.floor(Math.random() * 3);
					this.group.getChildAt(i).visible = true;
					let img: egret.Bitmap = new egret.Bitmap(RES.getRes(GameUtil.peopleEnemy[random]))
					g.addChild(img);
					img.mask = g.getChildAt(0);

					let h = img.y;
					img.y += img.height;

					let tw = egret.Tween.get(img).to({ y: img.y - img.height }, 500).to({ y: img.y }, 500).call(() => {
						this.group.getChildAt(i).visible = false;
						img.y -= img.height;
						egret.Tween.removeTweens(img);
						g.getChildAt(2).visible = false;
						g.getChildAt(3).visible = false;
						g.removeChild(img)
						img.removeEventListener(egret.TouchEvent.TOUCH_TAP, () => { }, this)
					})


					img.touchEnabled = true;
					img.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
						tw.setPaused(true)
						img.touchEnabled = false;
						this.tongNum++;
						GameUtil.Constant.score++;
						g.getChildAt(2).visible = true;
						g.getChildAt(3).visible = true;
						this.tongNumTXT.text = this.tongNum.toString();
						img.texture = RES.getRes(GameUtil.peopleEnemyWet[random]);
						setTimeout(() => {
							tw.setPaused(false)
						}, 200);
					}, this)
				}
			}
		}
	}
}
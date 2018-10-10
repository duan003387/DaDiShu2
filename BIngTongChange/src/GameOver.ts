class GameOver extends eui.Component implements eui.UIComponent {
	public btnPlayAgain: eui.Button;
	public btnFenXiang: eui.Button;
	public scoreText: eui.Label;


	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		this.height = this.stage.stageHeight;
		super.childrenCreated();
		this.scoreText.text = GameUtil.Constant.score.toString();
		this.btnPlayAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.parent.addChild(new game());
			GameUtil.Constant.score = 0;
			this.parent.removeChild(this);
		}, this)
	}

}
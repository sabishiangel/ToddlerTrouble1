module scenes {
  export class StartScene extends objects.Scene {
    // Private Instance Variables
    private _welcomeLabel: createjs.Bitmap;
    private _startButton: objects.Button;
    private _tutorialButton: objects.Button;    
    private _nursery: createjs.Bitmap;


    // Public Properties

    // Constructor
    constructor() {
      super();

      this.Start();
    }

    // Private Mathods
    private _startButtonClick():void {
      managers.Game.currentScene = config.Scene.PLAY;
    }

    private _tutorialButtonClick():void {
      managers.Game.currentScene = config.Scene.TUT;
    }


    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {


      this._nursery = new createjs.Bitmap(managers.Game.assetManager.getResult("nursery"));
      this._nursery.scaleX = 640 / this._nursery.getBounds().width;
      this._nursery.scaleY = 480 / this._nursery.getBounds().height;

      this._welcomeLabel = new objects.GameObject("logo");
      this._welcomeLabel.x = 320;
      this._welcomeLabel.y = 100;
      

      this._startButton = new objects.Button("startButton", 320, 260);
      this._tutorialButton = new objects.Button("tutorial", 320, 380);
      
      this.Main();
    }

    public Update(): void {
      // this._ocean.Update();
    }

    // This is where the fun happens
    public Main(): void {
      // add the ocean object
      this.addChild(this._nursery);

      // add the welcome label to the scene
      this.addChild(this._welcomeLabel);

      // add the startButton to the scene
       this.addChild(this._startButton);
       this.addChild(this._tutorialButton);
       
       this._tutorialButton.on("click", this._tutorialButtonClick);

       this._startButton.on("click", this._startButtonClick);
    }
  }
}

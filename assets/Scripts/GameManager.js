cc.Class({
    extends: cc.Component,

    properties: {
        xChicken: 0,
        yChicken: 0,

        xCar: 0,
        yCar: 0,


        isRunGame: false,

        chicken: cc.Node,
        camera: cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        if(!this.isRunGame) return;
        this.runGame();
    },

    runGame(){
        if (this.xCar == 0 || this.xChicken == 0) return;
        if(Math.abs(this.xChicken - this.xCar) <= 150 && Math.abs(this.yChicken - this.yCar) <= 20) {{
            this.chicken.getComponent("ChickenController").isDeath=true;
            this.isRunGame = false;
            this.camera.getComponent("CameraController").isZoom = true;
        }}
    }
});

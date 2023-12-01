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
        light: cc.Node,
        car : {
            default: [],
            type: [cc.Node],
        },
        _car : {
            default: [],
            type: [cc.Component],
        },

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this._light = this.light.getComponent("TrafficLightController");
        this.car.forEach(element => {
            this._car.push(element.getComponent('CarController'));
        });
    },

    update (dt) {
        this._car.forEach(element => {
            if(!element.node.active) return;
            if(element.y >= -40){
                element.runCar(dt);
                return;
            }
            //element.runCar(dt);
            //cc.log("GameMNG");
            if(this._light.isGreenLight){
                element.runCar(dt);
            } else if(this._light.isYellowLight){
                element.runCar(dt);
            }
        });
        // if(!this.isRunGame) return;
        // this.runGame();
    },

    // runGame(){
    //     if (this.xCar == 0 || this.xChicken == 0) return;
    //     if(Math.abs(this.xChicken - this.xCar) <= 150 && Math.abs(this.yChicken - this.yCar) <= 20) {{
    //         this.chicken.getComponent("ChickenController").isDeath=true;
    //         this.isRunGame = false;
    //         this.camera.getComponent("CameraController").isZoom = true;
    //     }}
    // }
});

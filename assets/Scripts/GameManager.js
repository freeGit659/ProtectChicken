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
            if(element.y = -40 && this._light.isRedLight){
                return;
            }
            if(element.y > -40){
                element.runCar(dt);
            }else if(element.y < -40){
                element.runCar(dt);
            }
        //     //element.runCar(dt);
        //     //cc.log("GameMNG");
        });
        // if(!this.isRunGame) return;
        // this.runGame();
        console.log('xanh: '+ this._light.isGreenLight, 'do: ' + this._light.isRedLight, 'vang' +this._light.isYellowLight);
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

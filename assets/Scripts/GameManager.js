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

    },

});

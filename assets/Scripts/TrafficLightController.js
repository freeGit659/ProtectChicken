///<reference path="../../creator.d.ts"/>
cc.Class({
    extends: cc.Component,

    properties: {

        isRedLight : false,
        isYellowLight : false,
        isGreenLight : false,
        _time: 0,
        _countLabel: 0,

        timeRedLight: {
            default: 5,
            serializable: true,
            toolTip: "Time red light on"
        },
        timeYellowLight: {
            default: 2,
            serializable: true,
            toolTip: "Time yellow light on"
        },
        timeGreenLight: {
            default: 5,
            serializable: true,
            toolTip: "Time green light on"
        },

        ani : cc.Animation,

        // chicken:cc.Node,
        // car:cc.Node,
        // gameManager : cc.Node,

        // label: cc.Label,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // cc.error(this.node);
    },

    start () {

    },

    update (dt) {
        if(!this.isGreenLight && this._time < this.timeGreenLight) {
            this.turnOnGreenLight();
            this.isGreenLight = true;
        } else if (!this.isYellowLight && this._time >= this.timeGreenLight) {
            this.turnOnYellowLight();
            this.isYellowLight = true;
        }else if (!this.isRedLight && this._time >= this.timeGreenLight + this.timeYellowLight) {
            this.turnOnRedLight();
            this.isRedLight = true;
        }
        else if (this._time >= this.timeGreenLight + this.timeRedLight + this.timeYellowLight) {
            this._time = 0;
            this.isRedLight = false;
            this.isYellowLight = false;
            this.isGreenLight = false;
        }
        this._time += dt;
    },

    turnOnRedLight(){
        this.ani.play('onRedLight');
        this.ani.stop('onGreenLight');
        this.ani.stop('onYellowLight')
        cc.log("red");
    },
    turnOnYellowLight(){
        this.ani.play('onYellowLight');
        this.ani.stop('onRedLight');
        cc.log("yellow");
    },
    turnOnGreenLight(){
        this.ani.play('onGreenLight');
        this.ani.stop('onRedLight');
        this.ani.stop('onYellowLight')
        cc.log("green");
    }

});

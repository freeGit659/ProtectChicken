
cc.Class({
    extends: cc.Component,

    properties: {
        redSprite: cc.Sprite,
        yellowSprite: cc.Sprite,
        greenSprite: cc.Sprite,

        isGreenLight : false,
        _red : new cc.Color(255,0,0),
        _yellow : new cc.Color(255,255,0),
        _green : new cc.Color(0,255,0),
        _black : new cc.Color(0,0,0),
        _time: 0,
        _timeFlash : 0,
        _count : 0,
        _color: 1,

        chicken:cc.Node,
        car:cc.Node

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // cc.error(this.node);
    },

    start () {
        this.turnOffLight(this.redSprite);
        this.turnOffLight(this.greenSprite)
        this.turnOffLight(this.yellowSprite)
    },

    update (dt) {
        if(this._time > 0 && this._color == 1){
            this.turnOnLight(this.redSprite,this._red)
            this.turnOffLight(this.greenSprite)
            this.turnOffLight(this.yellowSprite)
            this._color = 2;
            // if(this.flashLight(this.redSprite, this._red, 0.5,3,dt)) {
            // }
        }
        if(this._time > 3.5 && this._color == 2){
            if(this.flashLight(this.yellowSprite, this._yellow, 0.5,3,dt)) {
                this._color = 3;
                this.turnOffLight(this.redSprite)
                this.turnOffLight(this.greenSprite)
            }
        }

        if(this._time > 7 && this._color == 3){
            this.turnOffLight(this.yellowSprite)
            this.turnOffLight(this.redSprite)
            if(this.flashLight(this.greenSprite, this._green, 0.5,3,dt)) {
               this.chicken.getComponent("ChickenController").isWalk=true;
               this.car.getComponent("CarController").isRun = true;
                this._color = 4;
            }
        }
        // if(this._time > 15) {
        //     this._time = 0;
        //     this._color = 1;
        // }
        this._time = this._time + dt;
    },

    turnOnLight(sprite, color){
        sprite.node.opacity = 255;
        sprite.node.color = color;
    },

    turnOffLight(sprite){
        sprite.node.color = this._black;
    },

    flashLight(sprite, color,timeFlash, times, dt){
        if(this._timeFlash ===0 ){
            sprite.node.color = this._black;
        }
        this._timeFlash += dt;
        if(this._timeFlash >= timeFlash){
            sprite.node.color = color;
            this._timeFlash = 0;
            this._count++;
            if(this._count === times) {
                this.turnOnLight(sprite, color);
                this._count = 0;
                return true;
            }
            else return false;
        }
    },
});

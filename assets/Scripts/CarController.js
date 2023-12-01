cc.Class({
    extends: require('CarManager'),

    properties: {
        // xStart : 200,
        // xTarget : -700,

        // yStart : 200,
        // yxTarget : -700,
        timeSpawn: 0,

        arr : [],

        isRunAnimation : false,
        isRun:false,

        isLeft: {
            default: false,
            serializable: true,
        },

        xDefault: 0,
        yDefault: 0,
        scaleXDefault: 0,
        scaleYDefault: 0,

        speedDefault :{
            default: 5,
            serializable: true,
        },
        speedZoomDefault: {
            default: 0.05,
            serializable: true,

        },

        speed :{
            default: 5,
            serializable: true,
        },
        speedZoom: {
            default: 0.05,
            serializable: true,

        },

        light: cc.Node,
        chicken: cc.Node,
        

        // gameManager : cc.Node,
        // anim: cc.Animation,
        // audio: cc.AudioSource,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.xDefault = this.node.x;
        this.yDefault = this.node.y;
        this.scaleXDefault = this.node.scaleX;
        this.scaleYDefault = this.node.scaleY;
    },
    start () {
        this._light = this.light.getComponent("TrafficLightController");
        this._chicken = this.chicken.getComponent("ChickenController");
    },

    update (dt) {
        this.disableCar();
        this.stop(dt);
        //cc.log(this.node.x, this.node.y);
    },

    runCar(dt){
        this.arr = this.carMoving(dt, this.speed, this.speedZoom, this.node.x, this.node.y, this.node.scaleX, this.node.scaleY, this.isLeft);
        this.speed = this.arr[0];
        this.speedZoom = this.arr[1];
        this.node.x = this.arr[2];
        this.node.y = this.arr[3];
        this.node.scaleX = this.arr[4];
        this.node.scaleY = this.arr[5];
    },

    spawnCar(){
        this.speed = this.speedDefault;
        this.speedZoom = this.speedZoomDefault;
        this.node.x = this.xDefault;
        this.node.y = this.yDefault;
        this.node.scaleX = this.scaleXDefault;
        this.node.scaleY = this.scaleYDefault;
    },

    stop(dt){
            if(((this.node.y >= -65 && this.node.y <= -64) ||(this.node.y >= 91 && this.node.y <= 92)) && this._light.isRedLight){
                cc.log('dung');
            }else{
                this.runCar(dt);
            }
            
    },

    disableCar(){
        if(this.node.y < -500){
            this.node.active = false;
        }
    },

    hurtChicken(){
        if(Math.abs(this._chicken.node.x - this.node.x) <= 50 && Math.abs(this._chicken.node.y - this.node.y) <= 10) {{
            this._chicken.isDeath=true;
        }}
    },
    runAnimation(){
        if(!this.isRunAnimation){
            this.audio.play();
            this.anim.play('CarRun');
            this.isRunAnimation = true;
        }
    }
});

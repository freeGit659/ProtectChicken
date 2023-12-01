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

    },

    update (dt) {
        this.disableCar();
    },

    runCar(dt){
        this.arr = this.carMoving(dt, this.speed, this.speedZoom, this.node.x, this.node.y, this.node.scaleX, this.node.scaleY, this.isLeft);
        this.speed = this.arr[0];
        this.speedZoom = this.arr[1];
        this.node.x = this.arr[2];
        this.node.y = this.arr[3];
        this.node.scaleX = this.arr[4];
        this.node.scaleY = this.arr[5];

        //cc.log(this.arr);
    },

    spawnCar(){
        this.speed = this.speedDefault;
        this.speedZoom = this.speedZoomDefault;
        this.node.x = this.xDefault;
        this.node.y = this.yDefault;
        this.node.scaleX = this.scaleXDefault;
        this.node.scaleY = this.scaleYDefault;
        cc.log('spawn')
    },

    disableCar(){
        if(this.node.y < -500){
            this.node.active = false;
        }
    },

    
    // carMoving(dt){
    //     if(this.node.x >= 2 && this.node.y >= -40) {
    //         this.speed += dt*1;
    //         this.speedZoom += this.speedZoom*dt;
    //     }
    //     else {
    //         this.speed += dt*10;
    //     }
    //     this.node.x -= this.speed*dt;
    //     this.node.y -= this.speed*dt;
    //     this.node.scaleX += this.speedZoom*dt; 
    //     this.node.scaleY += this.speedZoom*dt;
    //     console.log(Math.round(this.node.x), Math.round(this.node.y), this.speed, this.speedZoom)
    // },
    runAnimation(){
        if(!this.isRunAnimation){
            this.audio.play();
            this.anim.play('CarRun');
            this.isRunAnimation = true;
        }
    }
});

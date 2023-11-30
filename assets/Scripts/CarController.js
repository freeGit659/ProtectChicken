cc.Class({
    extends: cc.Component,

    properties: {
        // xStart : 200,
        // xTarget : -700,

        // yStart : 200,
        // yxTarget : -700,

        isRunAnimation : false,
        isRun:false,
        speed : 0,
        speedZoom: 0.05,

        // gameManager : cc.Node,
        // anim: cc.Animation,
        // audio: cc.AudioSource,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    start () {

    },

    update (dt) {
            this.speed += dt*100;
            this.node.x -= this.speed*dt;
            this.node.y -= this.speed*dt;
            this.node.scaleX += this.speedZoom*dt; 
            this.node.scaleY += this.speedZoom*dt;
            console.log(this.speed); 
    },

    runAnimation(){
        if(!this.isRunAnimation){
            this.audio.play();
            this.anim.play('CarRun');
            this.isRunAnimation = true;
        }
    }
});

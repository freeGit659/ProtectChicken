cc.Class({
    extends: cc.Component,

    properties: {
        xStart : 200,
        xTarget : -700,

        isRunAnimation : false,
        isRun:false,
        speed : 300,

        gameManager : cc.Node,
        anim: cc.Animation,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.node.x = this.xStart;
    },

    update (dt) {
        if(this.isRun && this.node.x > this.xTarget){
            this.node.x -= this.speed*dt;
            this.gameManager.getComponent("GameManager").xCar = this.node.x;
            this.gameManager.getComponent("GameManager").yCar = this.node.y;
            this.runAnimation();
        }
    },

    runAnimation(){
        if(!this.isRunAnimation){
            this.anim.play('CarRun');
            this.isRunAnimation = true;
        }
    }
});

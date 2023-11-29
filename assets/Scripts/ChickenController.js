cc.Class({
    extends: cc.Component,

    properties: {
        yStart : -50,
        yTarget : -200,

        
        isWalk:false,
        isAnimationOn: false,
        isDeath: false,

        speed : 50,

        anim:cc.Animation,
        audio1: cc.AudioSource,
        audio2: cc.AudioSource,
        gameManager : cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.node.y = this.yStart;
        this.anim = this.getComponent(cc.Animation);
        this.audio = this.getComponent(cc.AudioSource);
    },

    update (dt) {
        if(this.isDeath) {
            this.death();
        }
        if(this.isWalk && this.node.y > this.yTarget){
            this.node.y -= this.speed*dt;
            this.gameManager.getComponent("GameManager").xChicken = this.node.x;
            this.gameManager.getComponent("GameManager").yChicken = this.node.y;
            if(!this.isAnimationOn) {
                this.anim.play('ChickenRun');
                this.isAnimationOn = true;
            }
        }
        else {
            if(this.isAnimationOn) {
                this.anim.stop('ChickenRun');
                this.isAnimationOn= false;
            }
        }
    },
    death(){
        this.anim.stop('ChickenRun');
        this.anim.play('ChickenDeath');
        this.audio2.play();
        this.audio1.play();
        this.isDeath = false;
    },
});

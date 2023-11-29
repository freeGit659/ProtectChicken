cc.Class({
    extends: cc.Component,

    properties: {
        yStart : -50,
        yTarget : -200,

        
        isWalk:false,
        isWalking: false,
        isDeath: false,

        speed : 50,

        anim:cc.Animation,
        audio: cc.AudioSource,
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
            if(!this.isWalking) {
                this.anim.play('ChickenRun');
                this.isWalking = true;
            }
        }
        else {
            if(this.isWalking) {
                this.anim.stop('ChickenRun');
                this.isWalking = false;
            }
        }
    },
    death(){
        this.anim.stop('ChickenRun');
        this.anim.play('ChickenDeath');
        this.audio.play();
        this.isDeath = false;
    },
});

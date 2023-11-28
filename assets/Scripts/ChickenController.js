cc.Class({
    extends: cc.Component,

    properties: {
        yStart : -50,
        yTarget : -200,

        
        isWalk:false,
        isWalking: false,

        speed : 40,

        anim:cc.Animation,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.node.y = this.yStart;
        this.anim = this.getComponent(cc.Animation);
            // console.log(this.anim);
    },

    update (dt) {
        if(this.isWalk && this.node.y > this.yTarget){
            this.node.y -= this.speed*dt;
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
});

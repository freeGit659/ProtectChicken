cc.Class({
    extends: cc.Component,

    properties: {
        // yStart : -50,
        // yTarget : -200,

        _isPressLeft : false,
        _isPressRight: false,
        
        isStart: false,
        isWalk:false,
        isAnimationOn: false,
        isDeath: false,
        isIdle: false,

        speed : 50,

        button: cc.Node,
        anim:cc.Animation,
        audio1: cc.AudioSource,
        audio2: cc.AudioSource,
        // gameManager : cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onKeyDown: function (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.left:
                this._isPressLeft = true;
                break;
            case cc.macro.KEY.right:
                this._isPressRight = true;
                break;
        }
    },

    onKeyUp: function (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.left:
                this._isPressLeft = false;
                break;
            case cc.macro.KEY.right:
                this._isPressRight = false;
                break;
        }
    },
    // onLoad () {},

    start () {
        this.setIdle();
        this.anim = this.getComponent(cc.Animation);
        this.audio = this.getComponent(cc.AudioSource);
    },

    update (dt) {
        if(this.isDeath) {
            this.death();
            return;
        }
        if(!this.isStart) return;
        this.moving(dt);
       
    },

    moving(dt){
        if(this._isPressLeft){
            this.node.x -= this.speed*dt;
            this.flip(false);
            if(!this.isAnimationOn) {
                this.anim.stop('ChickenIdle');
                this.anim.play('ChickenRun');
                this.isAnimationOn = true;
                this.isIdle = true;
            }
        } else if (this._isPressRight){
            this.node.x += this.speed*dt;
            this.flip(true);
            if(!this.isAnimationOn) {
                this.anim.stop('ChickenIdle');
                this.anim.play('ChickenRun');
                this.isAnimationOn = true;
                this.isIdle = true;
            }
        }
        else {
            if(this.isAnimationOn) {
                this.anim.stop('ChickenRun');
                this.setIdle();
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

    setIdle(){
        this.anim.play('ChickenIdle');
    },

    flip(isRight){
        if(isRight) this.node.scaleX =1;
        else this.node.scaleX =-1;
    },
    startGame(){
        this.isStart = true;
        this.button.active = false;
    }
});

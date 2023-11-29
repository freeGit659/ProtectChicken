const { Camera } = require("three");

cc.Class({
    extends: cc.Component,

    properties: {
        speedZoom: 0.05,
        speedCamera: 50,
        zoomTarget: 2,
        xTarget: -250,
        yTarget: -210,
        isZoom: false,

        camera: cc.Camera,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        this.zoomIn(dt);
    },

    zoomIn(dt){
        if(!this.isZoom) return;
        if(this.camera.zoomRatio < this.zoomTarget){
            this.camera.zoomRatio += this.speedZoom*dt;
        } 
        if( this.node.x > this.xTarget){
            this.node.x -= this.speedCamera*dt;
        }
        if(this.node.y > this.yTarget){
            this.node.y -= this.speedCamera*dt;
        }
    }
});

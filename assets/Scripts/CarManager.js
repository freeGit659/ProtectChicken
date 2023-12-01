cc.Class({
    extends: cc.Component,

    properties: {
        arr : [],

        car: [cc.Node],

        carController: [],

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.car.forEach(element => {
            this.carController.push(element.getComponent("CarController"));
        });
    },

    update (dt) {
        this.carController.forEach(element => {
            if(!element.node.active && element.timeSpawn <= 0){
                element.timeSpawn = Math.floor(Math.random() * 10) +1;
                cc.log(element.timeSpawn);
            }
            if(!element.node.active){
                element.timeSpawn -= dt;
                if(element.timeSpawn <=0){
                    element.node.active = true;
                    element.spawnCar();
                    element.timeSpawn = 0;
                }
            }   
        });
    },

    carMoving(dt, speed, speedZoom, x, y, scaleX, scaleY, isLeft){
        //cc.log("CarMng");
        if(y >= -40) {
            speed += dt/100;
            speedZoom += speedZoom*dt;
            scaleX += 0.1*speedZoom*dt; 
            scaleY += 0.1*speedZoom*dt;
            if(isLeft) {
                x -= speed*dt;
                y -= speed*dt;
            } else {
                x += speed*dt;
                y -= speed*dt;
            }
        }
        else {
            speed += dt*1;
            scaleX += 0.6*speedZoom*dt; 
            scaleY += 0.6*speedZoom*dt;
            if(isLeft) {
                x -= 8*speed*dt;
                y -= 5*speed*dt;
            } else {
                x += 5*speed*dt;
                y -= 5*speed*dt;
            }
        }
        return this.arr = [speed, speedZoom, x, y, scaleX, scaleY];
    },
    // spawnCar(element){
    //     element.node.active = true;
    //     element.speed = this.speedDefault;
    //     element.speedZoom = this.speedZoomDefault;
    //     elemnode.x = this.xDefault;
    //     node.y = this.yDefault;
    //     this.node.scaleX = this.scaleXDefault;
    //     this.node.scaleY = this.scaleYDefault;
    //     cc.log('spawn')
    // },

    // disableCar(){
    //     if(!this.node.active) return;
    //     if(this.node.y < -500){
    //         this.node.active = false;
    //     }
    // },
});

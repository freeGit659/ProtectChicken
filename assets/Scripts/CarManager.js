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
        if(y >= -40) {
            speed += dt/10000;
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
            scaleX += 2*speedZoom*dt; 
            scaleY += 2*speedZoom*dt;
            if(isLeft) {
                x -= 15*speed*dt;
                y -= 20*speed*dt;
            } else {
                x += 15*speed*dt;
                y -= 20*speed*dt;
            }
        }
        return this.arr = [speed, speedZoom, x, y, scaleX, scaleY];
    },
});

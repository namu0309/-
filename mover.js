class Mover {
    constructor(x,y) {
        this.pos = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0); 
        this.w = 20;
    }
    
    applyForce(force) {
        this.acc.add(force);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0,0);
    }

    edge() {
        if (this.pos.x > height) {
            this.vel.y *= -1;
            this.pos.y = height;    
        }
    }

    show() {
        ellipse(this.pos.x,this.pos.y, this.w);
    }
}
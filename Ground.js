class Ground{
    constructor(x,y,w,h){
        let options = {
            isStatic :  true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w = w;
        this.h = h ;
        this.position = {
            x : x,
            y: y
        };
       

    }

    show(){
        let pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill(148,127,146);
        rect(pos.x,pos.y,this.w,this.h)
        pop();
    }
}
// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

// Exercise 1 
export function Size(width=80, height=60){
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight){
    this.width = newWidth;
    this.height = newHeight;
}

// Exercise 2 
export function Position(x=0, y=0 ){
    this.x = x;
    this.y = y;
}
Position.prototype.move = function(newX, newY){
    this.x = newX;
    this.y = newY;
}


// Exercise 3
export class ProgramWindow {
    constructor(){
        this.screenSize = new Size(800,600);
        this.size = new Size();
        this.position = new Position();
    }

    // Exercise 4
    // @param {Size} s
    resize(s){
        (this.position.x + s.width > this.screenSize.width)
        ? this.size.width = s.width - (this.position.x + s.width -  this.screenSize.width) 
        : this.size.width = s.width;
        
        (this.position.y + s.height > this.screenSize.height)
        ? this.size.height = s.height - (this.position.y + s.height -  this.screenSize.height) 
        : this.size.height = s.height; 

        if(s.width < 1) this.size.width = 1;
        if(s.height < 1) this.size.height = 1;
    }


    // Exercise 5
    move(pos){
        (pos.x + this.size.width > this.screenSize.width)
        ? this.position.x = this.screenSize.width - this.size.width
        : this.position.x = pos.x;

        (pos.y + this.size.height > this.screenSize.height)
        ? this.position.y = this.screenSize.height - this.size.height
        : this.position.y = pos.y;

        if(pos.x < 0) this.position.x = 0
        if(pos.y < 0) this.position.y = 0
    }
}

// Exercise 6
/**
 * @param {ProgramWindow} ProgramWindowObj
 */
export function changeWindow(ProgramWindowObj){
    ProgramWindowObj.resize( new Size(400,300))
    ProgramWindowObj.move(new Position(100,150))
    return ProgramWindowObj
}


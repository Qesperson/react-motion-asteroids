import { game } from "./index";
import { MovingObject } from "./movingObject";

export class Ship extends MovingObject {
    dead = false
    maxVelocity = 6
    friction = 0.08

    start = () => {
        game.inputs.set('w', this.accelerate)
        game.inputs.set('a', () => this.turn('left'))
        game.inputs.set('d', () => this.turn('right'))
    }
    
    }
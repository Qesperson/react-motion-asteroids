import { motionValue, MotionValue, } from "framer-motion"
import { uniqueId } from "lodash"

export interface IMovingObjectOptions {
    x?: number
    y?: number
    velocity?: number
    angle?: number
    radius?: number
    wraps?: boolean
}

export class MovingObject {
    id = uniqueId()
	dead = false
	x: MotionValue<number>
	y: MotionValue<number>
	angle: MotionValue<number>
	velocity: number
	radius: number
	wraps = true
	maxVelocity = 10
	friction = 0

    constructor(options = {} as IMovingObjectOptions) {
        const {
			x = 0,
			y = 0,
			angle = 0,
			velocity = 0,
			radius = 12,
			wraps = true,
		} = options

        this.x = motionValue(x)
        this.y = motionValue(y)
        this.angle = motionValue(angle)
        this.velocity = velocity
        this.radius = radius
        this.wraps = wraps
    }

    turn = (direction: 'left' | 'right') => {
        if(direction === 'left') {
            this.angle.set(this.angle.get() - 4)
        }

        if(direction === 'right') {
            this.angle.set(this.angle.get() + 4)
        }
    }

    accelerate = () => {
        if(this.velocity < this.maxVelocity) {
            this.velocity += 1
        }
    }
}
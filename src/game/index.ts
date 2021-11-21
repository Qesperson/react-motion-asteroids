import { range, random } from 'lodash'
import { makeObservable, computed, observable } from 'mobx'
import { Ship } from './ship'

export var screen = {
    width: 600,
    height: 400
}

export class Game {
    constructor() {
        window.addEventListener('keypress', this.handleKeyPress)
        window.addEventListener('keyup', this.handleKeyUp)
        window.addEventListener('keydown', this.handleKeyDown)

        this.ship = new Ship({
            x: screen.width / 2,
            y: screen.height / 2
        })
    }

    /* ----------------------------------- User inputs ----------------------------- */

    presses = new Map<string, () => void>()
    inputs = new Map<string, () => void>()
    keyBuffer = new Set<string>([])

    handleKeyPress = (event: KeyboardEvent) => {
        const action = this.presses.get(event.key)
        if(action) action()
        console.log(action)
    }

    handleKeyUp = (event: KeyboardEvent) => {
        this.keyBuffer.delete(event.key)
    }

    handleKeyDown = (event: KeyboardEvent) => {
        this.keyBuffer.add(event.key)
    }

    handleKey = (key: string) => {
        const action = this.inputs.get(key)
        if(action) action()
    }

    lives = 3

	shots = 0

	hits = 0

    ship: Ship

}


makeObservable(Game, {

})

export var game = new Game()
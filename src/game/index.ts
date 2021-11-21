import { range, random } from 'lodash'
import { makeObservable, computed, observable } from 'mobx'

export const screen = {
    width: 600,
    height: 400
}

export class Game {
    constructor() {
        window.addEventListener('keypress', this.handleKeyPress)
        window.addEventListener('keyup', this.handleKeyUp)
        window.addEventListener('keydown', this.handleKeyDown)
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
}


makeObservable(Game, {})

export const game = new Game()
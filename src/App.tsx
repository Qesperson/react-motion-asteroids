import React from 'react'
import { range, random } from 'lodash'
import { observer } from 'mobx-react-lite'
import { motion } from 'framer-motion'

import { game, screen } from './game/index'

import './App.css'
import { Ship } from './components/index'

function App() {
    const { lives } = game

    const stars = React.useMemo(() => {
        return range(100 - lives).map((i) => (
            <motion.div
                style={{
                    position: 'absolute',
                    x: random(0, screen.width),
                    y: random(0, screen.height),
                    height: random(1, 2),
                    width: random(1, 2),
                    backgroundColor: '#41ff02',
                }}
            />
        ))
    }, [lives])

    return (
        <div
            className='App'
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
                height: '100vh',
                placeItems: 'center',
                placeContent: 'center',
                fontSize: 32,
                color: '#41FF00',
                fontFamily: 'VT323, monospace',
                backgroundColor: '#1e1f2c',
            }}
        >
            <motion.div
                style={{
                    height: screen.height,
                    width: screen.width,
                    border: '1px solid #41FF00',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                {stars}
                {
                    //Ship
                    lives > 0 && (
                        <Ship
                            x={game.ship.x}
                            y={game.ship.y}
                            angle={game.ship.angle}
                            radius={game.ship.radius}
                        />
                    )
                }
            </motion.div>
        </div>
    )
}

export default App

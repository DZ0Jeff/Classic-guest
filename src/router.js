import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Games from './pages/games'
import Navbar from './components/navbar'

import RokingKats from './pages/game/roking-kats'
import PokemonFirered from './pages/game/pokemon-firered'
import SuperMario95 from './pages/game/supermario95'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <>
                    <Navbar/>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/games" component={Games} />

                    {/* Games */}
                    <div className="container game-container">
                        <div className="row">
                            <div className="col-md-12 game-col">
                                <Route path="/game/rokingcats" component={RokingKats} />
                                <Route path="/game/pokemon-firered" component={PokemonFirered} />
                                <Route path="/game/supermario-95" component={SuperMario95} />
                            </div>
                        </div>
                    </div>
                </>
            </Switch>
        </BrowserRouter>
    )
}
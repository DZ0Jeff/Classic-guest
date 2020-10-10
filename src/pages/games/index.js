import React from 'react';
import { Link } from 'react-router-dom'

import './index.css'

import SupermarioImg from '../../assets/images/supermario.png'
import RokingKatsImg from '../../assets/images/roking-kats.png'
import PokemonFirered from '../../assets/images/pokemon-firered.png'

function Games() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center text-white">
            <h1 className="mb-5">Selecione o seu game</h1>
          </div>

          <div className="col-md-12">
            <ul className="games-list">
              <li className="box-game">
                <Link to="/game/rokingcats">
                  <img src={RokingKatsImg} alt="Roking cats" />
                  <span>Roking cats</span>
                </Link>
              </li>
              
              <li className="box-game">
                <Link to="/game/pokemon-firered"> 
                  <img src={PokemonFirered} alt="Pokemon Fire Red" />
                  <span>Pokemon Fire Red</span> 
                </Link>
              </li>
              
              <li className="box-game">
                <Link to="/game/supermario-95">
                  <img src={SupermarioImg} alt="Super mario 95" />
                  <span>Super mario 95</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Games;

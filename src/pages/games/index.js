import React from 'react';
import { Link } from 'react-router-dom'

import './index.css'

function Games() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center text-white">
            <h1>Selecione o seu game</h1>
          </div>

          <div className="col-md-12">
            <ul className="games-list">
              <li><Link to="/game/rokingcats">Roking cats</Link></li>
              <li><Link to="/game/pokemon-firered">Pokemon Fire Red</Link></li>
              <li><Link to="/game/supermario-95">Super mario 95</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Games;

import React from 'react'
import {Link} from 'react-router-dom'

import './index.css'

export default function greetings(){
    return(
        <div className="container">
            <div className="row">
                <div className="jumbotron bg-dark text-white">
                    <h1 className="display-4">Classical guest</h1>
                    <p className="lead">A classical taste for gamers</p>
                    <hr className="my-4" />
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quis porro culpa at dolorum! Sint consequuntur, aut accusantium eveniet iure aliquam! Ullam ex exercitationem quis accusantium autem nisi fuga facere! </p>
                </div>
            
                <div className="col-md-12 d-flex justify-content-around">
                    <Link className="btn btn-primary" to="/games">Games</Link>
                    <Link className="btn btn-secondary" to="/about">About</Link>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import {Switch, useLocation, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition} from 'react-transition-group'

import "../src/Styles/animation.css"

import Home from '../src/components/pages/Home'
import Cadastro from '../src/components/pages/Cadastro'
import Cardapio from '../src/components/pages/Cardapio'
import Pedido from '../src/components/pages/Pedido'
export default function Routes() {
    const location = useLocation();
    return ( 
    <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
                <Route path="/" exact component={Home} />
                <Route path="/Cadastro" exact component={Cadastro} />
                <Route path="/Cardapio" exact component={Cardapio} />
                <Route path="/Pedido" exact component={Pedido} />
             </Switch>
        </CSSTransition>
    </TransitionGroup>
    )
}
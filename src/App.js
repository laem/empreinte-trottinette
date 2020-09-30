import React from 'react'
import illustration from './trottinette.svg'
import './App.css'
// On définit une liste de règles publicodes
import { résultat, engine } from './Calcul.js'
import { Documentation } from 'publicodes'
import {
	BrowserRouter as Router,
	Redirect,
	Switch,
	Route,
} from 'react-router-dom'

function App() {
	return (
		<div
			css={`
				margin: 0 auto;
				max-width: 800px;
				h1 {
					margin-bottom: 2rem;
				}
			`}
		>
			<Router>
				<header>
					<h1>Trottinette partagée - empreinte carbone</h1>
				</header>
				<div
					css={`
						img {
							max-height: 10rem;
						}
						display: flex;
						justify-content: center;
					`}
				>
					<img src={'/' + illustration} css="width: 20rem" />
					<div>
						<p>
							L'empreinte totale d'une trottinette partagée est estimée à
							<strong>{résultat}</strong>
						</p>
						<p>
							Cet excellente estimation tranche avec tous les autres modes de
							transport qui sont largement plus polluants, excepté le TGV qui
							obtient un résultat similaire.{' '}
						</p>
						<p>
							Nous publions donc ci-dessous le calcul dans son intégralité pour
							que chacun puisse le comprendre et le remettre en question.
						</p>
					</div>
				</div>
				<h2>Explication du calcul</h2>
				<Switch>
					<Route path="/">
						<Redirect to="/empreinte/par-km-voyageur" />
					</Route>
				</Switch>
				<Documentation engine={engine} documentationPath={''} />
				{/* Composants de l'app */}
			</Router>
		</div>
	)
}

export default App

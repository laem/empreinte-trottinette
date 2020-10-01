import React from 'react'
import illustration from './trottinette.svg'
import './App.css'
// On définit une liste de règles publicodes
import { result, engine } from './Calcul.js'
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
							max-height: 14rem;
						}
						display: flex;
						justify-content: center;
					`}
				>
					<img src={'/' + illustration} css="width: 20rem" />
					<div>
						<p>
							Les trottinettes électriques partagées ont débarqué dans les
							grandes villes en 2019 et se sont imposées comme une alternative à
							la marche, au vélo, aux transports en commun et à la voiture.
						</p>
						<p>
							Pourtant, malgré la taille réduite de ce véhicule, il n'est pas du
							tout évident qu'il soit écologique, du moins quand il remplace
							autre chose qu'un trajet en voiture ou en taxi, indétronables dans
							leur inefficacité.
						</p>
						<p>
							L'empreinte totale d'une trottinette partagée pour un trajet d'
							<strong>1km </strong> est estimée à{' '}
							<strong>{Math.round(result.nodeValue * 1000)} gCO2e</strong>.
						</p>
						<p>
							Nous publions ci-dessous le calcul dans son intégralité pour que
							chacun puisse le comprendre et le remettre en question.
						</p>
					</div>
				</div>
				<h2>Explication du calcul</h2>
				<Switch>
					<Route path="/">
						<Redirect to="/transport/trottinette-électrique-partagée" />
					</Route>
				</Switch>
				<Documentation engine={engine} documentationPath={''} />
				{/* Composants de l'app */}
			</Router>
		</div>
	)
}

export default App

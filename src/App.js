import React, { useState } from 'react'
import illustration from './trottinette.svg'
import './App.css'
// On définit une liste de règles publicodes
import { result as rawResult, engine } from './Calcul.js'
import { Documentation } from 'publicodes'
import {
	BrowserRouter as Router,
	Redirect,
	Switch,
	Route,
} from 'react-router-dom'

function App() {
	const [brand, setBrand] = useState(null)
	const result = rawResult.nodeValue * (brand ? brand.factor : 1)
	return (
		<div
			css={`
				margin: 0 auto;
				padding: 0 1rem 1rem;
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
						display: flex;
						justify-content: center;
					`}
				>
					<img src={'/' + illustration} css="width: 30rem" />
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
							<strong css="background: var(--color); padding: .1rem .6rem; color: white">
								{Math.round(result * 1000)} gCO2e
							</strong>
							.
						</p>
						<p>
							Nous publions ci-dessous le calcul dans son intégralité pour que
							chacun puisse le comprendre et le remettre en question.
						</p>
					</div>
				</div>
				<div
					css={`
						ul {
							display: flex;
							justify-content: center;
							margin-top: 0.6rem;
							li {
								margin: 0 1rem;
								display: inline;
								padding-top: 1rem;
								img {
									width: 6rem;
								}
							}
						}
					`}
				>
					<ul>
						{[
							{
								image:
									'https://images.ctfassets.net/f107dq97zt0a/5GILZcaTN10DDEvXQwrkhL/610543a3f37344b7690ad002ceb4cc9d/Logo.svg',
								factor: 2,
							},
							{
								image: 'https://ridedott.com/images/dott-logo-black.svg',
								factor: 3,
							},
							{
								image:
									'https://www.tier.app/wp-content/themes/tier2.1/images/tier-logo.svg',
								factor: 4,
							},
						].map(({ image, factor }) => (
							<li className="ui__ card">
								<button onClick={() => setBrand({ factor })}>
									<img src={image} />
								</button>
							</li>
						))}
					</ul>
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

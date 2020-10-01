import Engine, { formatValue } from 'publicodes'
import './ui/index.css'
import rules from './modèle.yaml'

// On initialise un moteur en lui donnant le publicode.
// Ce publicode va être parsé
export const engine = new Engine(rules)
export const result = engine
	.setSituation({
		'transport . trottinette électrique partagée . distance': '1',
	})
	.evaluate('transport . trottinette électrique partagée')

export const formattedResult = formatValue(result, {
	precision: 1,
})

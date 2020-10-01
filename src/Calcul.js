import Engine, { formatValue } from 'publicodes'
import './ui/index.css'
import rules from './modèle.yaml'

// On initialise un moteur en lui donnant le publicode.
// Ce publicode va être parsé
export const engine = new Engine(rules)
const evaluation = engine.evaluate(
	'transport . trottinette électrique partagée'
)

export const résultat = formatValue(evaluation, {
	precision: 1,
})

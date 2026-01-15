import ProgramPage from '../../components/ProgramPage'
import { getProgram } from '../../data/programsData'

function ArtificialIntelligence() {
    const program = getProgram('artificial-intelligence')
    return <ProgramPage program={program} />
}

export default ArtificialIntelligence

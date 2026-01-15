import ProgramPage from '../../components/ProgramPage'
import { getProgram } from '../../data/programsData'

function InternetOfThings() {
    const program = getProgram('internet-of-things')
    return <ProgramPage program={program} />
}

export default InternetOfThings

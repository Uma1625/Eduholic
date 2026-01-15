import ProgramPage from '../../components/ProgramPage'
import { getProgram } from '../../data/programsData'

function DataScience() {
    const program = getProgram('data-science')
    return <ProgramPage program={program} />
}

export default DataScience

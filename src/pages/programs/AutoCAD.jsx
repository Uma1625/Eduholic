import ProgramPage from '../../components/ProgramPage'
import { getProgram } from '../../data/programsData'

function AutoCAD() {
    const program = getProgram('autocad')
    return <ProgramPage program={program} />
}

export default AutoCAD

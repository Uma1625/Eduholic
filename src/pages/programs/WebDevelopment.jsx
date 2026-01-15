import ProgramPage from '../../components/ProgramPage'
import { getProgram } from '../../data/programsData'

function WebDevelopment() {
    const program = getProgram('web-development')
    return <ProgramPage program={program} />
}

export default WebDevelopment

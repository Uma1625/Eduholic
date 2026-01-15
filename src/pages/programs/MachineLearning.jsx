import ProgramPage from '../../components/ProgramPage'
import { getProgram } from '../../data/programsData'

function MachineLearning() {
    const program = getProgram('machine-learning')
    return <ProgramPage program={program} />
}

export default MachineLearning

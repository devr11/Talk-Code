import { useState } from "react"
import { useNavigate, useParams } from "react-router"

function ProblemPage() {
    const {id} = useParams()
    const navigate = useNavigate()

    const [currentProblemId, setCurrentProblemId] = useState("two-sum")
    const [currentProblemId, setCurrentProblemId] = useState("two-sum")

  return (
    <div>ProblemPage</div>
  )
}

export default ProblemPage
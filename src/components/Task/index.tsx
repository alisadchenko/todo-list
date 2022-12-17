import "./index.scss"

interface TaskProps {
  name: string
  description: string
  details: string
}

const Task = ({
  name,
  description,
}: TaskProps) => {
  return (
    <li className="task">
      <input
        type="checkbox"
      />
      <h3>{name}</h3>
      <div>{description}</div>
    </li>
  )
}

export default Task

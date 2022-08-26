// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-card-container">
      <div className="todo-detail-container">
        <p className="title">{title}</p>
        <button type="button" className="delete-btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem

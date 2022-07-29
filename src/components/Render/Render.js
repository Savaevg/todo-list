import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Checkbox from '@mui/material/Checkbox';
import './Render.css'

const render = {
    wrapper:{
        overflowX:'hidden',
        overflowY:'auto',
        maxHeight:'300px'
    },
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        padding: '0 10px',
        height: '45px',
        borderBottom: '1px solid rgba(26, 148, 170, 0.815)'
    },
    item:{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        width: '100%',
        cursor: 'pointer'
    },

}

const Todo = ({ todo, index, markTodo, isOpenTodo }) => {
    const isFinishedTodo = todo.isFinished && 'todo-finished'
    return (<div style={render.container}>
        <span><Checkbox
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleOutlineIcon />}
            onClick={(e) => markTodo(e.target.checked, index)}
            checked={todo.isFinished}
        /></span>
        <div style={render.item} onClick={() => isOpenTodo({ ...todo, index })}>

            <span className={isFinishedTodo}>{todo.todoName}</span>
            <ArrowForwardIosIcon fontSize='small' />
        </div>

    </div>
    )
}

const Render = ({ todo, markTodo, isOpenTodo }) => {
    return (
        <div style={render.wrapper}>
            {todo.map((todo, index) => (
                <Todo todo={todo} key={todo.id} markTodo={markTodo} index={index} isOpenTodo ={isOpenTodo} />
            ))}

        </div>
    )
}


export default Render
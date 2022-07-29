import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import s from'./Display.module.css'

const item = {
    title: {
        color:'red',
        margin:'0 auto',
        fontWeight: 550,
        fontSize:'25px'
    }
}

const Display = ({isOpen, formData, closeButton, editTodo, removeTodo}) => (
        <Dialog open={isOpen} onClose={closeButton} className = {s.todo}>
            <DialogTitle style = {item.title}>
            <div>Your Todo</div>
            </DialogTitle>
            <DialogContent className={s.content}>
<div>
    <h2>{formData.todoName}</h2>
    <div>{formData.todoNote}</div>
</div>
            </DialogContent>
            <DialogActions >
                <div className={s.action}>
                    <Button color='secondary' variant='outlined' onClick={removeTodo} className={s.but}>Remove</Button>
                    <div>
                        <Button color='primary' onClick={editTodo}>Edit</Button>
                        <Button color='primary' onClick={closeButton}>Close</Button>
                    </div>
                </div>

            </DialogActions>



        </Dialog>
    )


export default Display
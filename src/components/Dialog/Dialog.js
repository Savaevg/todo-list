import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import s from './Dialog.module.css'
const item = {
    todo : {   
        paddingBottom: '25px',
        marginTop: '10px'
    },
    title: {
        color:'red',
        margin:'0 auto',
        fontWeight: 500,
    },
}

const Dialogs = ({isOpen,openDialog,formData,setFieldValue,todoSubmit}) => {
    return (
        <Dialog open = {isOpen} onClose = {openDialog}>
            <DialogTitle style={item.title}>{formData.isEdit ? 'Edit todo':'ADD NEW TODO'}</DialogTitle>
            <DialogContent>
                <form className={s.form} onSubmit={todoSubmit}>
                    <TextField style={item.todo} label='TODO' variant='outlined' onChange={(e)=> setFieldValue('todoName', e.target.value)} value={formData.todoName}/>
                    <TextField className = {s.note} label='NOTE' variant='outlined' onChange={(e)=>setFieldValue('todoNote', e.target.value)} value={formData.todoNote} multiline minRows={4}/>
                </form>
            </DialogContent>
            <DialogActions>
                <Button color='primary' onClick = {openDialog}>Close</Button>
                <Button color='primary' disabled={!formData.todoName} type ='submit' onClick = {todoSubmit}>{formData.isEdit ? 'Edit':'Add'}</Button>

            </DialogActions>



        </Dialog>
        
    )
}

export default Dialogs
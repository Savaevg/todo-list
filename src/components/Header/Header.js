import s from './Header.module.css'
import moment from 'moment';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import Dialogs from '../Dialog/Dialog';
import Display from '../Display/Display';


const Header = ({totalCount,isOpen,openDialog,formData,setFieldValue,todoSubmit,isOpenDisplay,closeButton,editTodo,removeTodo}) => {
    const weekDay = moment().format('dddd')
    const date = moment().date()
    return (
        <div className = {s.header}>
            <div className={s.wrapper}>
                <div className={s.count}>
                    <span className={s.finish}>{totalCount.finished}</span>
                <div className={s.total}>
                    <span>Tasks</span>
                    <span>{`/ ${totalCount.total}`}</span>
                </div>
                </div>
                <div className ={s.date}>
                    <span className={s.weekday}>{weekDay}</span>
                    <span className={s.date}>{date}</span>
                </div>
            </div>
                <div className = {s.but} onClick = {openDialog}>
                    <AddToPhotosIcon color='primary'/>
                    <span className = {s.background}></span>
                </div>
                <Dialogs isOpen = {isOpen} openDialog={openDialog} formData={formData} setFieldValue={setFieldValue} todoSubmit={todoSubmit}/>
                <Display formData={formData} isOpen={isOpenDisplay} closeButton={closeButton} editTodo={editTodo} removeTodo={removeTodo} />
            

            
        </div>
    )
}

export default Header
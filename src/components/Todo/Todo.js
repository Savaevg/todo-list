import React, {useState} from 'react';
import Header from '../Header/Header';
import Actions from '../Actions/Actions';
import Render from '../Render/Render';
import s from './Todo.module.css';
import { v4 as uuidv4 } from 'uuid';


const initialForm = {
    isEdit: false,
    todoName:'',
    todoNote:'',
    isFinished: false,
    id:'',
    index:null
}

const filterTab = (tab,todo) => {
  if(tab === 0) {
    return todo
  } else if (tab === 1) {
    return todo.filter(todo => !todo.isFinished)
  } else if (tab === 2) {
    return todo.filter(todo => todo.isFinished)
  }
}

const getFinishCount = (todo) => todo.reduce((a,b)=> {
  a.total=todo.length
  if(b.isFinished) {
    a.finished = a.finished + 1 
  }
  return a
},{total:0, finished:0})


const Todo = () => {
  const [tab, setTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenDisplay, setIsOpenDisplay] = useState(false)
  const [todo,setTodos] = useState([])
  const [formData, setFormData] = useState(initialForm)

  const totalCount = getFinishCount(todo)

  const sortedTodos = filterTab(tab,todo)

  const resetAll = () => {
    setIsOpen(false)
    setIsOpenDisplay(false)
    setFormData(initialForm)
  }
  const openDialog = () => setIsOpen ((prevState) => !prevState)
  const setFieldValue = (fieldName,value) =>  setFormData((prevState) => ({ ...prevState, [fieldName]: value }))
  const changeTab = (tabValue)=> setTab(tabValue)
  const todoSubmit = (e)=> {
    e.preventDefault()
    if (formData.isEdit) {
      const editTodos = todo
      editTodos.splice(formData.index,1,{...formData, isEdit:false, index:null})
      setTodos(editTodos)
    } else {
      setTodos((prevTodos)=>[...prevTodos, {...formData, id:uuidv4() }])
    }
    resetAll() 
  }

  const markTodo = (isCheked,index)=>{
    const update = todo.slice()
    update.splice(index,1,{...todo[index], isFinished:isCheked})
    setTodos(update)
  }

  const isOpenTodo = (todo) => {
    setIsOpenDisplay(true)
    setFormData(todo)
  }

  const editTodo = ()=> {
    setFormData((prevState) => ({...prevState, isEdit:true}))
    setIsOpenDisplay(false)
    openDialog()
  }

  const removeTodo = () => {
    setTodos(todo.filter(item=> item.id !== formData.id)) 
    resetAll()
  }
  return (
    <div className = {s.wrapper}>
      <Header totalCount={totalCount} isOpen = {isOpen} openDialog={openDialog} setFieldValue={setFieldValue} formData={formData} todoSubmit={todoSubmit} editTodo={editTodo} isOpenDisplay={isOpenDisplay} removeTodo={removeTodo} closeButton = {resetAll}/>
      <Actions changeTab={changeTab} tab={tab}/>
      <Render todo={sortedTodos} markTodo={markTodo} isOpenTodo={isOpenTodo}/>
      
  
    </div>
  )
}
 export default Todo;

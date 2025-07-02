'use client'
import { useContext } from 'react'
import './post.css'
import { Authcontext } from '@/Context/AuthContext'

interface props{
    userId?:number
    id:number
    title:string
    body:string
    setTitle:any
    setBody:any
    setId:any
    handleDelete?: any
    handleUpdate?: any
}

export default ((props:props) =>{
    const context = useContext(Authcontext)

    function handleUpdate(){
        context.setUpdateModal(true)
        props.setTitle(props.title)
        props.setBody(props.body)
        props.setId(props.id)
    }

    function handleDelete(){
        props.handleDelete(props.id)
    }

    return(
        <div className='container'>
            <div> <h2>Título: {props.title}</h2> <p>{props.id}</p></div>
            <p>{props.body}</p>
            <div>
                <button onClick={handleDelete}>Excluir</button>
                <button onClick={handleUpdate}>Atualizar</button>
            </div>
        </div>
    )
})
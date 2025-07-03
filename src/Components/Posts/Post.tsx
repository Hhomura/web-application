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
        <div className='bg-amber-50 m-4 p-3 rounded-2xl flex flex-col justify-around w-2/3 shadow-lg'>
            <div className='flex flex-col my-2 '>
                <h2 className='text-center text-xl'>{props.title}</h2></div>
                <p className='my-3 text-center'>{props.body}</p>
            <div className='my-2 flex'>
                <button className='text-gray-400 underline px-2 py-2 hover:cursor-pointer' onClick={handleDelete}>Excluir</button>
                <button className='text-gray-400 underline px-2 py-2 hover:cursor-pointer' onClick={handleUpdate}>Editar</button> 
            </div>
        </div>
    )
})
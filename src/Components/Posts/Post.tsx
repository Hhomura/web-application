'use client'
import { useContext, useEffect, useState } from 'react'
import './post.css'
import { Authcontext } from '@/Context/AuthContext'
import send from '../../../public/send.svg'
import Coment from './Coments/Coment'
import Image from 'next/image'

interface props{
    userId?:number
    id:number
    title:string
    body:string
    setTitle:any
    setBody:any
    setId:any
    setComment:any
    handleDelete?: any
    handleUpdate?: any
    handleComment?:any
    handleSubmitComment?:any
    comments?:[]
    comment:string
    setCommentIndex?:any
    handleDeleteComment?:any
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

    function handleIdentify(){
        props.setId(props.id)
        console.log(props.id)
    }

    return(
        <div className='bg-gray-500 m-4 p-3 rounded-2xl flex flex-col justify-around w-2/3 shadow-xl/20 transform transition ease-in-out duration-300' onClick={handleIdentify}>
            <div className='flex flex-col my-2 '>
                <h2 className='text-center text-2xl text-white'>{props.title}</h2></div>
                <p className='my-3 text-center text-white'>{props.body}</p>
            <div className='my-2 flex'>
                <button className='text-gray-400 underline px-2 py-2 hover:cursor-pointer' onClick={handleDelete}>Excluir</button>
                <button className='text-gray-400 underline px-2 py-2 hover:cursor-pointer' onClick={handleUpdate}>Editar</button> 
            </div>

            <div className='border-t-2 border-gray-400 pt-3'>

                <div>
                    <form action="" className='flex' onSubmit={props.handleSubmitComment}>
                        <input className='bg-white p-2 mx-2 w-xl flex-1/2 rounded-sm' type="text" onChange={props.handleComment} value={props.comment}/>
                        <button className='hover:cursor-pointer transform hover:scale-110 transition duration-200' type='submit'><Image alt='alt' src={send} height={50} width={50}/></button>
                    </form>
                </div>

                {props.comments?.map((item, index) => (
                    <Coment id={index} coment={item} key={index} setCommentIndex={props.setCommentIndex} handleDeleteComment={props.handleDeleteComment} setComment={props.setComment}/>
                ))}
        
            </div>
            
        </div>
    )
})
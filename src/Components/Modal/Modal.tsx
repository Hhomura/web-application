import { useContext } from 'react'
import Form from '../Form/Form'
import './modal.css'
import { Authcontext } from '@/Context/AuthContext'

interface props{
    handleBody:any
    handleTitle:any
    handleUpdate:any
    handleCreate:any
    title:string
    body:string
    id:number
    handleModal:any
}

export default ((prop:props) =>{

    return (
        <div className='fixed bg-black w-full h-full flex justify-center items-center flex-col'>
            <Form handleInputBody={prop.handleBody} handleInputTitle={prop.handleTitle} id={prop.id} body={prop.body} title={prop.title} handleUpdateData={prop.handleUpdate} handleCreateData={prop.handleCreate}/>
            <button className='text-white underline my-10 hover:cursor-pointer' onClick={prop.handleModal}>Fechar Modal</button>
        </div>
    )
})
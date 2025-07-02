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
        <div className='container_modal'>
            <Form handleInputBody={prop.handleBody} handleInputTitle={prop.handleTitle} id={prop.id} body={prop.body} title={prop.title} handleUpdateData={prop.handleUpdate} handleCreateData={prop.handleCreate}/>
            <button onClick={prop.handleModal}>Fechar Modal</button>
        </div>
    )
})
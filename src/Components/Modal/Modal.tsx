import { useContext } from 'react'
import Form from '../Form/Form'
import './modal.css'
import { Authcontext } from '@/Context/AuthContext'
import FormComment from '../Form/FormComment'

interface props{
    handleBody:any
    handleTitle:any
    handleUpdate:any
    handleCreate:any
    handleComment:any
    handleUpdateComment:any
    title:string
    body:string
    id:number
    indexComment:number
    comment:string
    handleModal:any
}

export default ((prop:props) =>{

    const context = useContext(Authcontext)

    return (
        <div className='fixed bg-black w-full h-full flex justify-center items-center flex-col'>
            {context.updateComment ? (
                <FormComment comment={prop.comment} handleInputComment={prop.handleComment} handleUpdateComment={prop.handleUpdateComment} id={prop.indexComment}/>
            ):(
                <Form handleInputBody={prop.handleBody} handleInputTitle={prop.handleTitle} id={prop.id} body={prop.body} title={prop.title} handleUpdateData={prop.handleUpdate} handleCreateData={prop.handleCreate}/>    
            )}
            
            <button className='text-white underline my-10 hover:cursor-pointer' onClick={prop.handleModal}>Fechar Modal</button>
        </div>
    )
})
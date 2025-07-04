import { useContext } from 'react'
import profile from '../../../../public/profile.png'
import Image from 'next/image'
import { Authcontext } from '@/Context/AuthContext'

interface props {
    id: number
    coment: string
    setComment:any
    setCommentIndex:any
    handleDeleteComment:any
}

export default ((prop: props) => {

    const context = useContext(Authcontext)

    function handleIdentify(){
        prop.setCommentIndex(prop.id)
        console.log(prop.id)
    }

    function handleUpdate(){
        context.setUpdateModal(true)
        context.setUpdateComment(true)
        prop.setComment(prop.coment)
    }

    return (
        <div className='flex my-4 flex-col border-t-2' onClick={handleIdentify}>
            <div className='flex my-4'>
                <Image className='bg-white mx-2 rounded-xl' width={50} height={50} src={profile} alt='profile default' />

                <div>
                    <p className='text-white'>Unknown user</p>
                    <p className='text-white'>{prop.coment}</p>
                </div>
            </div>

            <div className='my-2 flex'>
                <button className='text-gray-400 underline px-2 hover:cursor-pointer' onClick={prop.handleDeleteComment}>excluir comentário</button>
                <button className='text-gray-400 underline px-2 hover:cursor-pointer' onClick={handleUpdate}>editar comentário</button> 
            </div>
        </div>
    )
})
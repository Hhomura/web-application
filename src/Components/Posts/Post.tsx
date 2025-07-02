'use client'
import './post.css'

interface props{
    userId?:number,
    id:number,
    title:string,
    body:string
    handleDelete?: any,
    handleUpdate?: any
}

function handleClick(){
    console.log("Click")
}

export default ((props:props) =>{
    return(
        <div className='container'>
            <div> <h2>Título: {props.title}</h2> <p>{props.id}</p></div>
            <p>{props.body}</p>

            <div>
                <button type='submit' onClick={props.handleDelete}>Excluir</button>
                <button type='submit' onClick={props.handleUpdate}>Atualizar</button>
            </div>
        </div>
    )
})
import './form.css'

interface props{
    inp_type?:string
    name?:string
    label?:string
    id?:string
    handleInput?:any
    value?:any
}

export default ((props:props) =>{
    return(
        <div>
            {props.value? (
                <>
                <div className='flex flex-col'>
                    <label className='m-1' htmlFor={props.name}>{props.label}</label>
                    <textarea className='m-1 bg-gray-500 p-2 text-white h-20' name={props.name} id={props.id} value={props.value} onChange={props.handleInput}/>
                </div>
                </>
            ):(
                <>
                <div className='flex flex-col'>
                    <label className='m-1' htmlFor={props.name}>{props.label}</label>
                    <textarea className='m-1 bg-gray-500 p-2 text-white h-20' name={props.name} onChange={props.handleInput}/>
                </div>
                
                </>
            )}
        </div>
    )
})
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
                <label htmlFor={props.name}>{props.label}</label>
                <input className='input' type={props.inp_type} name={props.name} id={props.id} value={props.value} onChange={props.handleInput}/>
                </>
            ):(
                <>
                <label htmlFor={props.name}>{props.label}</label>
                <input className='input' type={props.inp_type} name={props.name} onChange={props.handleInput}/>
                </>
            )}
        </div>
    )
})
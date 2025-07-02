interface props{
    inp_type?:string
    name?:string
    id?:string
    handleInput?:any
    value?:any
}

export default ((props:props) =>{
    return(
        <div>
            {props.value? (
                <>
                <label htmlFor={props.name}>{props.name}</label>
                <input type={props.inp_type} name={props.name} id={props.id} value={props.value} onChange={props.handleInput}/>
                </>
            ):(
                <>
                <label htmlFor={props.name}>{props.name}</label>
                <input type={props.inp_type} name={props.name} onChange={props.handleInput}/>
                </>
            )}
        </div>
    )
})
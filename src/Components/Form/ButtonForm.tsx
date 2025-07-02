import './form.css'

interface props{
    type_btn:any
    text:string
}

export default ((prop:props) =>{
    return (
        <button type={prop.type_btn}>{prop.text}</button>
    )
})
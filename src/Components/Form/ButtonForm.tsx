import './form.css'

interface props{
    type_btn:any
    text:string
}

export default ((prop:props) =>{
    return (
        <button className = 'bg-green-500 text-white rounded-sm px-2 py-1 mx-2 my-3 hover:cursor-pointer transition duration-300 ease-in-out hover:bg-green-900  hover:text-white' type={prop.type_btn}>{prop.text}</button>
    )
})
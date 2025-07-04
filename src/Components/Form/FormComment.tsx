import ButtonForm from "./ButtonForm"
import InputForm from "./InputForm"

interface props {
    comment: string
    id: number
    handleInputComment: any
    handleUpdateComment: any
}

export default ((prop:props) => {
    return (
        <>
            <form className="flex flex-col justify-center bg-white p-10 rounded-lg opacity-100 w-2/5" action="" onSubmit={prop.handleUpdateComment}>
                <InputForm inp_type="input" label="Comentário" name="comment" handleInput={prop.handleInputComment} value={prop.comment}/>
                <ButtonForm text="Editar comentário" type_btn="submit" />
            </form>
        </>
    )
})
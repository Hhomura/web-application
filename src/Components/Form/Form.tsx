import ButtonForm from "./ButtonForm"
import InputForm from "./InputForm"

interface props {
    title: string
    body: string
    id:number
    handleInputTitle: any
    handleInputBody: any
    handleUpdateData: any
    handleCreateData: any
}

export default ((prop: props) => {
    return (
        <>
            {prop.id ? (
                <form action="" onSubmit={prop.handleUpdateData}>
                    <InputForm inp_type="input" label="Titulo" name={prop.title} handleInput={prop.handleInputTitle} value={prop.title} />
                    <InputForm inp_type="input" label="Descrição" name={prop.body} handleInput={prop.handleInputBody} value={prop.body} />
                    <ButtonForm text="Atualizar" type_btn="submit" />
                </form>
            ) : (
                <form action="" onSubmit={prop.handleCreateData}>
                    <InputForm inp_type="input" label="Titulo" name="title" handleInput={prop.handleInputTitle}/>
                    <InputForm inp_type="input" label="Descrição" name="body" handleInput={prop.handleInputBody}/>
                    <ButtonForm text="Criar" type_btn="submit" />
                </form>
            )}
        </>
    )
})
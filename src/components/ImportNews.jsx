import { useEffect, useState } from "react"

 function ImportNews() {
    const [textoDaNoticia, setTextoDaNoticia] = useState("")

    async function getDados() {
        const resposta = await fetch("http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release")
        const data = await resposta.json()
        setTextoDaNoticia(data.items[0].titulo)
    }
    useEffect(() => {
        getDados()
    }, [])

    return (
        <div>
            <strong>Noticia:</strong>
            <p>{textoDaNoticia}</p>
        </div>
    )

}
export default ImportNews;
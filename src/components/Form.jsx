import { useState, useEffect } from "react"

function Form() {

    const [formValues, setFormValues] = useState({
        nome: "",
        email: "",
        idade: "",
    });

    const [mensage, setMensage] = useState("Preencha todos os campos")

    useEffect(() => {
        const values = Object.values(formValues)
        const check = values.filter((value) => value !== "").length === 3;

        if (check) {
            setMensage('Parabéns, você preencheu todos os campos obrigatórios!!!')
        } else {
            setMensage("Preencha todos os campos")
        }
    }, [formValues])

    return (
        <div>
            <h2>Formulário</h2>
            <p>nome, email, e idade tem preenchimento obrigatorio</p>
            <form>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={formValues.nome}
                        onChange={event => {
                            setFormValues(prevState => ({
                                ...prevState,
                                nome: event.target.value
                            }))
                        }}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={formValues.email}
                        onChange={event => {
                            setFormValues(prevState => ({
                                ...prevState,
                                email: event.target.value
                            }))
                        }}
                    />
                </label>
                <br />
                <label>
                    Idade:
                    <input
                        type="number"
                        value={formValues.idade}
                        onChange={event => {
                            setFormValues(prevState => ({
                                ...prevState,
                                idade: event.target.value
                            }))
                        }}
                    />
                </label>
                <h3>{mensage}</h3>
            </form>
        </div>
    );
}

export default Form;
import { useState, useEffect } from "react"

function Form() {

    const [formValues, setFormValues] = useState({
        nome: "",
        email: "",
        idade: "",
    });

    const [mensage, setMensage] = useState("Preencha todos os campos")

    // function handleINputNameChange(event) {
    //     setFormValues({ ...formValues, nome: event.target.value });
    //     if (formValues.nome !== '') {
    //         validadeForm();
    //     }
    // }

    // function handleINputEmailChange(event) {
    //     setFormValues({ ...formValues, email: event.target.value });
    //     if (formValues.nome !== '') {
    //         validadeForm();
    //     }
    // }

    // function handleINputIdadeChange(event) {
    //     setFormValues({ ...formValues, idade: event.target.value });
    //     if (formValues.idade !== '') {
    //         validadeForm();
    //     }
    // }

    // function validadeForm(){
    //     if (formValues.nome !== '' && formValues.email !== '' && formValues.idade !== '') {
    //         alert('Parabéns, você preencheu todos os campos obrigatórios!!!')
    //     }
    // }

    useEffect(() => {
        const values = Object.values(formValues)
        const check = values.reduce((acumulator, currentValue) => {
            if (valor) {
                acumulator += 1
            }
            return acumulator
        }, 0)
        if (check === 2) {
            setMensage('Parabéns, você preencheu todos os campos obrigatórios!!!')
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
            </form>
        </div>
    );
}

export default Form;
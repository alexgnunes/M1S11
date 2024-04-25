import { useState } from "react"

function Form() {

    const [formValues, setFormValues] = useState({
        nome: "",
        email: "",
        idade: "",
    });

    function handleINputNameChange(event) {
        setFormValues({ ...formValues, nome: event.target.value });
        if (formValues.nome !== '') {
            validadeForm();
        }
    }

    function handleINputEmailChange(event) {
        setFormValues({ ...formValues, email: event.target.value });
        if (formValues.nome !== '') {
            validadeForm();
        }
    }

    function handleINputIdadeChange(event) {
        setFormValues({ ...formValues, idade: event.target.value });
        if (formValues.idade !== '') {
            validadeForm();
        }
    }

    function validadeForm(){
        if (formValues.nome !== '' && formValues.email !== '' && formValues.idade !== '') {
            alert('Parabéns, você preencheu todos os campos obrigatórios!!!')
        }
    }

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
                        onChange={handleINputNameChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={formValues.email}
                        onChange={handleINputEmailChange}
                    />
                </label>
                <br />
                <label>
                    Idade:
                    <input
                        type="number"
                        value={formValues.idade}
                        onChange={handleINputIdadeChange}
                    />
                </label>
            </form>
        </div>
    );
}

export default Form;
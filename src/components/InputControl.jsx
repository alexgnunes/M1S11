import { useState, useRef } from "react"
import { Button } from "./Button"

export default function InputControl() {
    const [text, setText] = useState("");
    const [stringList, setStringList] = useState([]);
    const inputRef = useRef(null);

    function handleOnChange(event) {
        const inputValue = event.target.value;
        const onlyLetters = /^[a-zA-Z]*$/;

        if (inputValue.match(onlyLetters)) {
            setText(inputValue);
        }
    }

    function handleSubmit() {
        setStringList([...stringList, text]);
        setText("");
        inputRef.current.focus();
    }

    return (
        <div>
            <span>{text}</span>
            <br />
            <input
                ref={inputRef}
                className="inputControl"
                value={text}
                onChange={handleOnChange}
            />
            <br />
            <br />
            <Button onClick={handleSubmit} >Submit</Button>
            <br />
            <br />
            <ul>
                {stringList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
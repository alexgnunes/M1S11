import { useState, useRef } from "react"

export default function InputControlado() {
    const [text, setText] = useState("");
    const inputRef = useRef(null);

    function handleOnChange(event) {
        setText(event.target.value);
    }

    return (
        <div>

            <br />
            <input
                ref={inputRef}
                className="inputControl"
                value={text}
                onChange={handleOnChange}
            />
            <br />
            <span>{text}</span>
        </div>
    )
}
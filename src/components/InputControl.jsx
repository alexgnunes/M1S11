import { useState } from "react"
import { Button } from "./Button"

export default function InputControl() {
    const [text, setText] = useState("")


    function handleOnChange(event) {
        var isText = false;
         isText = isNaN(event.target.value)
        console.log(isText);

        if (isText) {
            setText(event.target.value)
        }
    }

    return (
        <div>
            <span>{text}</span>
            <br />
            <input
                className="inputControl"
                value={text}
                onChange={handleOnChange}
            />
            <br />
            <br />
            <Button>Submit</Button>
            {/* onClick={handleSubmit} */}
        </div>
    )
}
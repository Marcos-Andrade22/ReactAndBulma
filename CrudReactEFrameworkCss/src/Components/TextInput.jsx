import React from "react";

const TextInput = ({label, value, onChange, placeholder}) =>{

    const inputRef = React.useRef(null);

    const handleClick = () =>{
        if(inputRef.current){
            inputRef.current.select();
        }
    }

    return(
        <div style={{marginBottom: "10px"}}>
            <label>
                {label}
                <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                onClick={handleClick}
                style={{ marginLeft: "5px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
            </label>
        </div>
    );
};

export default TextInput;
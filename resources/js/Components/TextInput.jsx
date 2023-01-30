import React, { useEffect, useRef } from "react";

export default function TextInput({
    type,
    id,
    name,
    placeholder,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            className={
                `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
                className
            }
            autoComplete={autoComplete}
            required={required}
            onChange={(e) => handleChange(e)}
            ref={input}
        />
    );
}

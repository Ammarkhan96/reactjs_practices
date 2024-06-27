import React from 'react';

const TextInput = ({ value, onChange }) => {
    return (
        <input
            className="px-5 py-3 border border-grey-300"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Enter todo here..."
            
        />
    )
}

export default TextInput;

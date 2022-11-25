import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [ inputValue, setInputValue ] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) return;
        // addCategory((category) => [inputValue, ...category])
        onNewCategory( newInputValue )
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type='text'
                placeholder='Buscar gifs'
                onChange={ onInputChange }
                value={ inputValue }
            />
        </form>
    )
}
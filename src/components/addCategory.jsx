import { useState } from 'react';
import PropTypes from 'prop-types';

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
        setInputValue('')
        onNewCategory( newInputValue )
    }

    return (
        <form aria-label='form' onSubmit={ onSubmit }>
            <input
                type='text'
                placeholder='Buscar gifs'
                onChange={ onInputChange }
                value={ inputValue }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
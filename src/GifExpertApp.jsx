import { useState } from 'react';
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['One Piece'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories ])
    }
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory onNewCategory={ onAddCategory } /*addCategory={ setCategories }*/ />
            {/* Listado de Gif */}
            { categories.map( (categorie) => (
                    // <div key={ categorie }>
                    //     <li>{ categorie }</li>
                    // </div>
                    <GifGrid
                        category={ categorie }
                        key={ categorie }
                    />
                ))
            }
            {/* Gif Item*/}
        </>
    )
}
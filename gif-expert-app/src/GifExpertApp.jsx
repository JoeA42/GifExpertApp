import { useState } from 'react'
import {AddCategory} from "./components/AddCategory";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch', "Dragon Ball"]);

    const onAddCategory = () => {
        setCategories([...categories, 'Valorant'])
    }

    return (
        <>

            <h1>Gif Expert App</h1>

            {/* Input */}

            <AddCategory setCategories={ setCategories }/>

            {/* Listado de gifs */}

            <ol>
                {categories.map( category => {
                    return <li key={category}>{category}</li>
                })}

                {/*<li>123</li>*/}

            </ol>
            {/* Gif Item*/}
        </>
    )
}

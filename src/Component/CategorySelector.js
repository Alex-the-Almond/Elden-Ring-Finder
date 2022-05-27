import React, {useState} from 'react';
import axios from 'axios';

const CategorySelector = (props) => {
    
    const { items, armors, weapons} = props
    
    
    return(
        <form>
                <label>
                    <select name='type-of-item'>
                        <option>--Choose a type of item--</option>
                        <option value={items}>Items</option>
                        <option value={weapons}>Weapons</option>
                        <option value={armors}>Armors</option>
                    </select>
                </label>
        </form>
    )
}

export default CategorySelector;
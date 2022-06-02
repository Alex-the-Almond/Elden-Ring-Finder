import React, {useState} from 'react';
import axios from 'axios'
import '../App.css';

const CategorySelector = (props) => {
    
    const { items, armors, weapons, onChangeHandler, onSearchHandler, search, onSubmit} = props
    
    
    
    
    return(
        <div>
        <form onChange={onChangeHandler}>
                <label>
                    <select className='type-of-item'>
                        <option>--Choose a type of item--</option>
                        <option value={items}>items</option>
                        <option value={weapons}>weapons</option>
                        <option value={armors}>armors</option>
                    </select>
                </label>
        </form>
        
        <form onSubmit={onSubmit}>
            <div>
                    <label>
                        <input type='text' placeholder='--Search--' className='search' onChange={onSearchHandler} value={search}/>
                        <div>
                        <button className='submit-btn' onSubmit={onSubmit}>Submit</button>
                        </div>
                    </label>
                </div>
        </form>
        </div>
    )
}

export default CategorySelector;
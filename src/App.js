import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import EldenRingItemInfo from './Component/EldenRingItemInfo'
import CategorySelector from './Component/CategorySelector'

function App() {

  const [data, setData] = useState([]);
  const [viewData, setViewData] = useState([]);

  const onChangeHandler = (evt) => {
    evt.preventDefault();
    const value = evt.target.value;
    axios.get(`https://eldenring.fanapis.com/api/${value}?limit=9999`)
    .then(res => {
      setData(res.data.data)
      })
      .catch(err => {
        console.log(err)
    })
  }

  const onSearchHandler = (evt) => {
    evt.preventDefault();
    const value = evt.target.value;
    data.map((item) => {
      if(item.name.toLowerCase().includes(value)){
        setViewData([item, ...viewData])
      }
      console.log(data)
    })
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    
}

  useEffect(() => {
    axios.get(`https://eldenring.fanapis.com/api/items?limit=9999`)
    .then(res => {
      setData(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

   return (
    <div className="App">
      <CategorySelector onChangeHandler={onChangeHandler} onSearchHandler={onSearchHandler} />
      {
        viewData.map((data, elem) =>(
          <EldenRingItemInfo data={data} key={elem} className='item'/>
        ))
      }
    </div>
  );
}

export default App;

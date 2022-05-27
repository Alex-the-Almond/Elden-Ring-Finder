import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import EldenRingItemInfo from './Component/EldenRingItemInfo'
import CategorySelector from './Component/CategorySelector'

function App() {

  const [data, setData] = useState([]);

  const onChangeHandler = (evt) => {
    evt.preventDefault();
    const value = evt.target.value;
    axios.get(`https://eldenring.fanapis.com/api/${value}?limit=1`)
    .then(res => {
      setData(res.data.data[0])
      .catch(err => {
        console.log(err)
      })
    })
    
}


  useEffect(() => {
    axios.get(`https://eldenring.fanapis.com/api/items?limit=1`)
    .then(res => {
      console.log(res)
      setData(res.data.data[0])
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  console.log(data)


  return (
    <div className="App">
      <CategorySelector onChangeHandler={onChangeHandler}/>
      <EldenRingItemInfo data={data}/>
    </div>
  );
}

export default App;

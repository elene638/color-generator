import React from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';

function App() {

  const [color, setColor] = React.useState('');
  const [error, setError] = React.useState(false);
  const [list, setList] = React.useState(new Values('#f15025').all(10));

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error);
    }

  }

  const handleChange = (event) => {
    setColor(event.target.value)
  }

  return (
    <div className='main'>
      <div className='header'>
        <h1>Color Generator</h1>
        <form onSubmit={handleSubmit}>
            <input 
              type='text' 
              placeholder='#f15025' 
              value={color} 
              onChange={handleChange}
              className={`${error ? 'error' : null}`}
            />
            <button type='submit'>Submit</button>
        </form>
      </div>
      <div className='colors'>
       { list.map((color, index) => {
        return <SingleColor 
          key={index}
          {...color}
          index={index}
          hexColor={color.hex}
        />
       })}
      </div>
    </div>
  )
}

export default App

// key={index}
//           {...color}
//           index={index}
//           hexColor={color.hex}
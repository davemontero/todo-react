import { useState } from 'react'
import '../styles/App.css'
import { ImCross } from 'react-icons/im';


const App = () => {

  const [item, setItem] = useState('')
  const [list, setList] = useState([])

  const handleOnChange = e => setItem(e.target.value)

  const handleKey = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setList([...list, e.target.value])
      setItem('')
    }
  }

  const handleClick = (e) => {
    const filt = list.filter((_,x) => {
      return (x != e.currentTarget.id)
    })
    setList(filt)
  }

  return (
    <div className="todo-container">
      <h1 className='todo-title'>todos</h1>
      <ul className="todo">
        <li>
          <input 
            autoFocus
            type="text" 
            className='todo-input'
            name='add'
            placeholder='Ingresar item'
            value={item}
            onChange={handleOnChange}
            onKeyPress={handleKey}
          />
        </li>
        {
          list.map((i,x) => <li className='todo-item' key={x}>{i} <span id={x} onClick={handleClick}><ImCross className='delete'/></span></li>)
        }
        {
          ( list.length > 0 ) ? <li className='todo-item todo-counter'>{ list.length === 1 ? `${list.length} item left` : `${list.length} items left` }</li> : null
        }
        
      </ul>
    </div>
  )
}

export default App
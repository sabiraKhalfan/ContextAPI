import React from 'react'
import { Consumer } from './Components/Context'
const HomePage = () => {
  return (
    <div>
        <Consumer >
            {(data)=>(
            <h4>
                Name:{data.name} id:{data.id}
            </h4>
            )}
        </Consumer>
     
    </div>
  )
}

export default HomePage
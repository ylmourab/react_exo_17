import React from 'react'

function Component(props) {
    return (
        <div>
            <h1>yo</h1>
            <button onClick={() => props.fonction(4)}>Ajouter</button>
            
        </div>
    )
}

export default Component

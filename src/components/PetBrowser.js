import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  

  render() { 
    let allThePets = this.props.pets.map(pet => (<Pet value={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
      ))
    return(<div className="ui cards">{allThePets}</div>)
  }
}

export default PetBrowser

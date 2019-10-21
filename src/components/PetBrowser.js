import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  isAdopted = pet => {
    return this.props.onAdoptPet.includes(pet.id)
  }

  
  
  render() {
    const petCards = this.props.pets.map(pet => (
              <Pet pet={pet} key={pet.id}
              onAdoptPet={this.props.onAdoptPet}
                />
    ))
      return (<div className="ui cards">{petCards}</div>)
    
  }
}

export default PetBrowser

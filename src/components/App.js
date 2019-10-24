//importing in all our files that we will be using
import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  // has a state of pets,and filters 
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  // will be the function to set the state of filter 
  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  // willl grab the pets from the data (or soon to be back end)
  onFindPetsClick = () => {
    let type = this.state.filters.type
    let baseURL = '/api/pets'
    if (type !== 'all') {
      baseURL += `?type=${type}`
    }
      fetch(baseURL)
        .then(response => response.json())
        .then(data => this.setState({pets: data}));
    
  }

  // once adopt pet is clicked
  onAdoptPet = petId => {
    let pets = this.state.pets.map(pet => {return pet.id === petId ? {...pet, isAdopted: true} : pet})
    this.setState({
      pets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}  />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
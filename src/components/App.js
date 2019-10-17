import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    const newFilterValue = event.target.value
    this.setState({
      ...this.state,
      filters: {
        type: newFilterValue
      }
    })
  }

  updatePetsState = (petsData) => {
    this.setState({
      ...this.state,
      pets: petsData
    })
  }

  onFindPetsClick = (event) => {
    //can probably use a switch statement here
    // check this.state.filters.type value then ...
    let apiURL = ""
    switch (this.state.filters.type) {
      case "all":
        apiURL = "/api/pets"
        break;
      case "dog":
        apiURL = "/api/pets?type=dog"
        break;
      case "cat":
        apiURL = "/api/pets?type=cat"
        break;
      case "micropig":
        apiURL = "/api/pets?type=micropig"
        break;
      default:
        console.log("Malformed State - unable to fetch")
        break;
    }

    fetch(apiURL)
      .then(resp => resp.json())
      .then(petsData => {
        this.updatePetsState(petsData)
      })   
  }

  onAdoptPet = (petId) => { 
    this.updateAdoptedStatus(petId)
  }
  
  updateAdoptedStatus = (petId) => {
    const petArr = this.state.pets 
    const foundPet = petArr.find(pet => pet.id === petId)
    foundPet.isAdopted = true

    this.setState({
      ...this.state,
      pets: petArr
    })
    // go through the pets array and find the specific pet by id, then change it's isAdopted to true
  }

  componentDidMount = () => {
    this.onFindPetsClick()
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

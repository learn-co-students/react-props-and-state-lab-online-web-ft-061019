import React from 'react'

class Pet extends React.Component {
  displayGender = (gender) => {
    if (gender === 'male') {
      return "♂"
    } else {
      return "♀"
    }
  }

  handleAdoptPet = event => {
    const petId = this.props.pet.id
    this.props.onAdoptPet(petId)
  }

  adoptible = (isAdopted) => {
    if (isAdopted) {
      return (
        <button className="ui disabled button">Already adopted</button>
      )
    } else {
      return (
        <button onClick={this.handleAdoptPet} className="ui primary button">Adopt pet</button>
      )
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.displayGender(this.props.pet.gender)}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptible(this.props.pet.isAdopted)}
        </div>
      </div>
    )
  }
}

export default Pet

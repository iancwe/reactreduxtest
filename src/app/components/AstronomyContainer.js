import React, { Component } from 'react'
import AstronomyCard from './AstronomyCard'
import axios from 'axios'

class AstronomyContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      astronomy: []
    }
  }

  componentDidMount () {
    const API_KEY = 'moWN9YwGrPh3KiFObRT9KuSuJZNaumb7wkG2VZno'
    const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='

    axios.get(END_POINT + API_KEY)
    .then(response => {
      this.setState({
        astronomy: response.data
      })
      console.log(response.data)
    })
    .catch(error => {
      console.log(error, 'Failed to Fetch Data')
    })
  }

  render () {
    const { astronomy } = this.state
    return (
      <AstronomyCard data={astronomy} />
    )
  }

}

export default AstronomyContainer

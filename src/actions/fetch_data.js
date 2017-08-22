import axios from 'axios'

export default function fetchData () {
  const API_KEY = 'moWN9YwGrPh3KiFObRT9KuSuJZNaumb7wkG2VZno'// API KEY
  const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='// API END_POINT
  const request = axios.get(END_POINT + API_KEY) // Get request

  return { // Return plain object with props
    type: 'FETCH_DATA', // Action Type
    payload: request // Action Payload (Cargo)
  }
}

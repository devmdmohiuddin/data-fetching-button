import React from 'react'
import CardItems from './components/CardItems'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <Container>
      <h3 className='text-center m-3'>On Button Click Display a Specific Amount Data From an Array Or API</h3>
      <CardItems />
    </Container>
  )
}

export default App

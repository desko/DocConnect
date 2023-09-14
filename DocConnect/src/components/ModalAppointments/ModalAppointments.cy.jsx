import React from 'react'
import ModalAppointments from './ModalAppointments'

describe('<ModalAppointments />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ModalAppointments />)
  })
})
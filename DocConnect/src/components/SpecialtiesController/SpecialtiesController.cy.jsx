import React from 'react'
import SpecialtiesController from './SpecialtiesController'

describe('<SpecialtiesController />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SpecialtiesController />)
  })
})
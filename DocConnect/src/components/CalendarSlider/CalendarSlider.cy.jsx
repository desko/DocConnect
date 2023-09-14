import CalendarSlider from './CalendarSlider';
import '@testing-library/cypress/add-commands';
import theme from '../../styles/theme/theme';
import {ChakraProvider} from '@chakra-ui/react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../store/store';
import {useState} from 'react';

import {generateDatesOneMonthLaterWithoutWeekends, dateFormatter} from '../../common/helpers';
import {APPOINTMENTS_HOURS} from '../../common/constants';

describe('<CalendarSlider />', () => {
  const days = generateDatesOneMonthLaterWithoutWeekends();

  const Wrapper = () => {
    const [selected, setSelected] = useState({});

    return (
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Provider store={store}>
            <CalendarSlider
              selected={selected}
              setSelected={setSelected}
            />
          </Provider>
        </ChakraProvider>
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    cy.mount(
        <Wrapper></Wrapper>,
    );
  });

  it('renders with elements', () => {
    cy.findByRole('button', {name: /previous/i}).as('previous').should('exist');
    cy.findByRole('button', {name: /next/i}).as('next').should('exist');

    days.forEach((day) => {
      const transformedDay = dateFormatter('en-US', day);

      cy.get(`[aria-label="${transformedDay} hours"]`).as('day').should('exist');

      APPOINTMENTS_HOURS.forEach((hour) => {
        cy.get('@day').find(`[aria-label="${hour}"]`).should('exist');
      });
    });
  });

  it('selects only one hour available', () => {
    const transformedDay = dateFormatter('en-US', days[0]);
    cy.get(`[aria-label="${transformedDay} hours"]`).as('day');
    cy.get('@day').find(`[aria-label="${APPOINTMENTS_HOURS[0]}"]`).as('btn1');
    cy.get('@day').find(`[aria-label="${APPOINTMENTS_HOURS[1]}"]`).as('btn2');

    cy.get('@btn1').click();
    cy.get('@btn1').should('have.attr', 'data-active');
    cy.get('@btn2').should('not.have.attr', 'data-active');

    cy.get('@btn2').click();
    cy.get('@btn2').should('have.attr', 'data-active');
    cy.get('@btn1').should('not.have.attr', 'data-active');
  });

  it('changes days shown with buttons', () => {
    const transformedDay1 = dateFormatter('en-US', days[0]);
    const transformedDay2 = dateFormatter('en-US', days[1]);
    cy.get(`[aria-label="${transformedDay1} hours"]`).as('day1');
    cy.get(`[aria-label="${transformedDay2} hours"]`).as('day2');

    cy.findByRole('button', {name: /previous/i}).as('previous');
    cy.findByRole('button', {name: /next/i}).as('next');

    cy.get('@previous').should('have.attr', 'disabled');
    cy.get('@next').should('not.have.attr', 'disabled');

    cy.get('@day1').parent().should('have.class', 'swiper-slide-active');
    cy.get('@day2').parent().should('not.have.class', 'swiper-slide-active');

    cy.get('@next').click();

    cy.get('@day1').parent().should('not.have.class', 'swiper-slide-active');
    cy.get('@day2').parent().should('have.class', 'swiper-slide-active');
  });
});

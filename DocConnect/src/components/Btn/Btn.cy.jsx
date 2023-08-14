import '@testing-library/cypress/add-commands';
import theme from '../../styles/theme/theme';
import {Box, ChakraProvider, Text} from '@chakra-ui/react';
import Btn from './Btn';
import colors from '../../styles/theme/colors.theme';
import chaiColors from 'chai-colors';
import {hamburgerButtonChild} from '../Header/Header.theme';
chai.use(chaiColors);

describe('<Btn />', () => {
  beforeEach(() => {
    const mockText = 'test';
    const mockClick = cy.stub().as('btn-click');
    cy.mount(
        <ChakraProvider theme={theme}>
          <Btn text={mockText}
            customProps={{
              onClick: mockClick,
            }}
          />
        </ChakraProvider>,
    );
    cy.findByRole('button', {name: /test/i}).as('btn');
  });

  it('renders button with text test', () => {
    cy.get('@btn').should('exist');
  });

  it('should click button', () => {
    cy.get('@btn').click();
    cy.get('@btn-click').should('have.been.called');
  });

  it('button should be disabled', () => {
    const mockText = 'disabled';
    cy.mount(
        <ChakraProvider theme={theme}>
          <Btn text={mockText}
            customProps={{
              isDisabled: true,
            }}
          />
        </ChakraProvider>,
    );

    cy.findByRole('button', {name: /disabled/i}).as('disabled').should('exist');
    cy.get('@disabled').should('have.attr', 'disabled');
  });

  it('button should be outline variant', () => {
    const mockText = 'test';
    cy.mount(
        <ChakraProvider theme={theme}>
          <Btn text={mockText}
            customProps={{
              variant: 'customOutline',
            }}
          />
        </ChakraProvider>,
    );

    cy.findByRole('button', {name: /test/i}).as('btnOutline').should('exist');
    cy.get('@btnOutline').should('have.css', 'border-width', `1px`);
    cy.get('@btnOutline').should('have.css', 'border-color').and('be.colored', colors.bodyText);
  });

  it('button should be hamburger variant', () => {
    const active = false;
    cy.mount(
        <ChakraProvider theme={theme}>
          <Box
            role='group'
            data-checked={active || null}
          >
            <Btn
              customProps={{
                'variant': 'hamburger',
                'aria-label': 'Menu Button',
                'data-checked': active || null,
              }}
            >
              <Text
                as='span'
                {...hamburgerButtonChild}
              ></Text>
            </Btn>
          </Box>
        </ChakraProvider>,
    );

    cy.findByRole('button', {name: /menu button/i}).as('menu-btn');
    cy.get('@menu-btn').should('exist');
    cy.get('@menu-btn').children('span').as('hamburger-child').should('exist');
    cy.get('@hamburger-child').should('have.css', 'opacity', '1');
  });

  it('button should be hamburger variant - open ', () => {
    const active = true;
    cy.mount(
        <ChakraProvider theme={theme}>
          <Box
            role='group'
            data-checked={active || null}
          >
            <Btn
              customProps={{
                'variant': 'hamburger',
                'aria-label': 'Menu Button',
                'data-checked': active || null,
              }}
            >
              <Text
                as='span'
                {...hamburgerButtonChild}
              ></Text>
            </Btn>
          </Box>
        </ChakraProvider>,
    );

    cy.findByRole('button', {name: /menu button/i}).as('menu-btn');
    cy.get('@menu-btn').should('exist');
    cy.get('@menu-btn').children('span').as('hamburger-child').should('exist');
    cy.get('@hamburger-child').should('have.css', 'opacity', '0');
  });
});

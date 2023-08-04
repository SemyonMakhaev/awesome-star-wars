import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { __mockHelpers } from 'src/api/__mocks__/helpers';
import { createCharacterMock } from 'src/tests/helpers';
import App from 'src/App';
import 'src/tests/mock/intersection-observer';

describe('Character page', () => {
  it('should show character data correctly when data has been provided by API', () => {
    const characterMock = createCharacterMock();

    __mockHelpers.setCharacterResponse(characterMock);
    __mockHelpers.setHasCharacterError(false);

    render((
      <MemoryRouter initialEntries={['/1']}>
        <App />
      </MemoryRouter>
    ));

    // Wait for API response
    setTimeout(() => {
      expect(screen.getByTestId('character-name')).toBe('Luce Skywalker');
    });
  });

  it('should go to People page on `Back` click', async () => {
    const characterMock = createCharacterMock();

    __mockHelpers.setCharacterResponse(characterMock);
    __mockHelpers.setHasCharacterError(false);

    render((
      <MemoryRouter initialEntries={['/1']}>
        <App />
      </MemoryRouter>
    ));

    await userEvent.click(screen.getByTestId('back-link'));

    expect(screen.getByTestId('heading')).toHaveTextContent('Star wars explorer');
  });

  it('should show loader while data is fetching', () => {
    const characterMock = createCharacterMock();

    __mockHelpers.setCharacterResponse(characterMock);
    __mockHelpers.setHasCharacterError(false);

    render((
      <MemoryRouter initialEntries={['/1']}>
        <App />
      </MemoryRouter>
    ));

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('should show message when character not found', () => {
    __mockHelpers.setCharacterResponse(undefined); // Character not found
    __mockHelpers.setHasCharacterError(false);

    render((
      <MemoryRouter initialEntries={['/1']}>
        <App />
      </MemoryRouter>
    ));

    // Wait for API response
    setTimeout(() => {
      const notFoundMessage = screen.getByTestId('not-found-message');

      expect(notFoundMessage).toBeInTheDocument();
      expect(notFoundMessage).toHaveTextContent('Character not found');
    });
  });

  it('should correctly render page when API is not responding correctly', () => {
    const characterMock = createCharacterMock();

    __mockHelpers.setCharacterResponse(characterMock);
    __mockHelpers.setHasCharacterError(false); // API error

    render((
      <MemoryRouter initialEntries={['/1']}>
        <App />
      </MemoryRouter>
    ));

    // Wait for API response
    setTimeout(() => {
      const notFoundMessage = screen.getByTestId('not-found-message');

      expect(notFoundMessage).toBeInTheDocument();
      expect(notFoundMessage).toHaveTextContent('Character not found');
    });
  });
});

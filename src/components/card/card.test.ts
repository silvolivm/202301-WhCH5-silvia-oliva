import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Card } from './card.js';
import { PokeStructure } from '../../models/Poke';
import { Poke } from '../../mocks/Pokes';

describe('Given Card component', () => {
  test('It should be in the document', () => {
    document.body.innerHTML = '<ul></ul>';
    const mockPoke: PokeStructure = Poke[0];
    const element = new Card('ul', mockPoke);
    expect(element).toBeInstanceOf(Card);

    const li = screen.getByRole('listitem');
    expect(li).toBeInTheDocument();
    const span = screen.getByText(mockPoke.name);
    expect(span).toBeInTheDocument();
  });
});

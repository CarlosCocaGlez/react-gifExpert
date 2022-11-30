import { render, screen } from "@testing-library/react";
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Probando el componente GifGrid', () => {
    const category = 'One Piece';
    test('Debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });
        render(<GifGrid category={ category } />);
        // screen.debug();
        expect( screen.getByText( category) );
        expect( screen.getByText('Cargando...') );
    });

    test('Debe de mostrar items cuando se cargan las imagenes', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Luffy',
                url: 'https://localhost/luffy.jpg'
            },
            {
                id: 'DEF',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        render(<GifGrid category={ category } />);
        expect( screen.getAllByRole('img').length ).toBe(2);
    });
});
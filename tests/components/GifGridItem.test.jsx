import {render, screen} from "@testing-library/react";
import {GifGridItem} from "../../src/components/GifGridItem";

describe('Pruebas en GifGridItem', () => {
    const title = 'Luffy';
    const url = 'https://one-piece.com/luffy.jpg'
    test('Debe hacer match con el snpashot', () => {
        const { container } = render( <GifGridItem url={ url } title={ title } />)
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifGridItem url={ url } title={ title } />)
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifGridItem url={ url } title={ title } />);
        expect(screen.getByText( title )).toBeTruthy();
    })
});
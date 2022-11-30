import { GifExpertApp } from "../src/GifExpertApp";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Probando el componente de GifExpertApp', () => {
    test('escribir en el input', () => {

        render( <GifExpertApp /> );

        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Luffy' } });
        expect(input.value).toBe('Luffy');
    })
    test('postear el formulario', () => {

        render( <GifExpertApp /> );
        screen.debug();
    })
    test('tomar el snapshot', () => {

        const { container } = render( <GifExpertApp /> );
        expect(container).toMatchSnapshot();
    })
});

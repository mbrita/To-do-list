import App from "./App";
import {fireEvent, render, screen} from "@testing-library/react";


describe('App', () => {
    let inputElement: HTMLInputElement, addButton: HTMLButtonElement

    beforeEach(() => {
        render(<App/>);
        inputElement = screen.getByPlaceholderText('What needs to be done?');
        addButton = screen.getByTestId('add new todo btn');
        fireEvent.change(inputElement, {target: {value: 'Test Todo 1'}});
        fireEvent.click(addButton);
    });

    test('should add a new todo item when addItemHandler is called', () => {
        const todoItem = screen.getByText('Test Todo 1');
        expect(todoItem).toBeInTheDocument();
    });

    test('should clear completed items', () => {
        const checkButton = screen.getByTestId('check item');

        fireEvent.click(checkButton);

        fireEvent.change(inputElement, {target: {value: 'Test Todo 2'}});
        fireEvent.click(addButton);

        const todoItem2 = screen.queryByText('Test Todo 2');

        const clearButton = screen.getByTestId('clear completed Todos')
        fireEvent.click(clearButton);

        expect(screen.queryByText('Test Todo 1')).toBeNull();
        expect(todoItem2).toBeInTheDocument();
    });

    test('should show only active items', () => {
        const checkButton = screen.getByTestId('check item');

        fireEvent.click(checkButton);

        fireEvent.change(inputElement, {target: {value: 'Test Todo 2'}});
        fireEvent.click(addButton);

        const showCompletedButton = screen.getByTestId('show active items')
        fireEvent.click(showCompletedButton);

        expect(screen.queryByText('Test Todo 2')).toBeInTheDocument();
        expect(screen.queryByText('Test Todo 1')).toBeNull();
    });

    test('should show only completed items', () => {
        const checkButton = screen.getByTestId('check item');

        fireEvent.click(checkButton);

        fireEvent.change(inputElement, {target: {value: 'Test Todo 2'}});
        fireEvent.click(addButton);

        const showCompletedButton = screen.getByTestId('show completed items')
        fireEvent.click(showCompletedButton);

        expect(screen.queryByText('Test Todo 1')).toBeInTheDocument();
        expect(screen.queryByText('Test Todo 2')).toBeNull();
    });
});

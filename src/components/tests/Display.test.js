import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from '../Display'

const testShow = {
    name: "Greatest Show",
    summary: "Best greatest show ever!",
    seasons: [
        {id:0, name: " ", episodes:[]},
    ]
}

test("renders without error", () => {
    render(<Display />);
});

test("render component when button is clicked", async () => {
    render(<Display show={testShow} />);
    const show = screen.queryByTestId("show-container");
    await waitFor(() => expect(show).toBeInTheDocument());
    const button = screen.getByRole("button");
    userEvent.click(button);
    })

test('test to have correct number of seasons', () => {
    render(<Display show={testShow} />);
    const button = screen.queryByTestId("show-container");
    userEvent.click(button);
    waitFor(() => expect(screen.getAllByTestId('season-option')).toHaveLength(testShow.seasons.length));
})

const testClick = jest.fn()

test('test if optional function is being called',async () => {
    render(<Display handleClick={testClick} />)
    const button = screen.getByRole('button')
    userEvent.click(button)
    await waitFor(() => expect(testClick).toHaveBeenCalledTimes(1))
})
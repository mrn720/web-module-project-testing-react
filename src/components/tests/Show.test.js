import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Show from './../Show';

const testShow = {
    //add in approprate test data structure here.
    name:"",
    summary:"",
    seasons: [{ id: 0, name: "season 1", episode:[] }]
}

test('renders testShow and no selected Season without errors', ()=>{
    render(<Show show = {testShow} selectedSeason = "none" />)
});

test('renders Loading component when prop show is null', () => {
    render(<Show show = {null}/>);
    const loading = screen.queryByText("Fetching data...");
    expect(loading).toHaveTextContent("Fetching data...");
});

test('renders same number of options seasons are passed in', ()=>{
    render(<Show show = {testShow} selectedSeason = "none" />);
    const seasonOptions = screen.getAllByTestId("season-option");
    expect(seasonOptions).toHaveLength(1);
});

test('handleSelect is called when an season is selected', () => {
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    render(<Show show = {testShow} selectedSeason = "none" />)
    const episode = screen.queryByTestId("episodes-container");
    expect(episode).not.toBeInTheDocument();

});
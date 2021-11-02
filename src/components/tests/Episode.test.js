import React from 'react';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';
const testEpisode = {
    id:1,
    name: "",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "summary",
    runtime: 1
}

const testEpisodeWithoutImage = {
    //Add in approprate test data structure here.
    id:2,
    name: "",
    image: null,
    season: 1,
    number: 1,
    summary: "wiithout image",
    runtime: 1
}

test("renders without error", () => {
    render(<Episode episode = {[]}/>)
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode = {testEpisode}/>)
    //
    const summary = screen.getByText(/summary/i);

    //Three expect statements
    expect(summary).toBeTruthy();
    expect(summary).toBeInTheDocument();
    expect(summary).toHaveTextContent(testEpisode.summary);
});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode = {testEpisodeWithoutImage}/>);
    //
    const image = screen.getByAltText("./stranger_things.png");

    //Image should not be in the doc
    expect(image).toHaveAttribute("alt", "./stranger_things.png");
    expect(image).toBeTruthy();
})
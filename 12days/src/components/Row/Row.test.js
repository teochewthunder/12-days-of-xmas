import React from "react";
import { render, screen } from "@testing-library/react";
import Row from "./Row";

let content = [
    { text: '' },
    { text: 'a partridge in a pear tree!' },
    { text: 'two turtle doves, and' },
    { text: 'three french hens' },
    { text: 'four calling birds' },
    { text: 'five gold rings' },
    { text: 'six swans a-swimming'},
    { text: 'seven geese a-laying' },
    { text: 'eight maids a-milking' },
    { text: 'nine ladies dancing' },
    { text: 'ten lords a-leaping' },
    { text: 'eleven pipers piping' },
    { text: 'twelve drummers drumming' }
];

describe("Row", () => {
	it("should display title according to day", () => {
		let day = 2;
		let currentDay = 1; // any value

	    render(
	        <Row
	        	day={ day }
	        	currentDay={ currentDay }
	        />
	    );

		expect(screen.queryByText(content[day].text)).toBeInTheDocument();
	});

	it("should display number of images according to day", () => {
		let day = 2;
		let currentDay = 1; // any value

	    render(
	        <Row
	        	day={ day }
	        	currentDay={ currentDay }
	        />
	    );

		expect(screen.queryAllByTestId("imgDay")).toHaveLength(2);
	});

	it("should be hidden if current day is lower than day", () => {
		let day = 2;
		let currentDay = 1; 

	    const { container } = render(
	        <Row
	        	day={ day }
	        	currentDay={ currentDay }
	        />
	    );

		expect(container.firstChild.classList.contains("Hidden")).toBe(true);
	});

	it("should not be hidden if current day is not lower than day", () => {
		let day = 2;
		let currentDay = 3; 

	    const { container } = render(
	        <Row
	        	day={ day }
	        	currentDay={ currentDay }
	        />
	    );

		expect(container.firstChild.classList.contains("Hidden")).toBe(false);
	});
});
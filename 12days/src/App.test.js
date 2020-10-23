import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
	it("should react to up/down button", () => {
	    render(
	        <App/>
	    );

		userEvent.click(screen.getByTestId("BtnUp"));
		expect(screen.getByTestId("lblCurrentDay").textContent).toBe("2");
		userEvent.click(screen.getByTestId("BtnDown"));
		expect(screen.getByTestId("lblCurrentDay").textContent).toBe("1");
	});

	it("should not react to down button if day is 1", () => {
	    render(
	        <App/>
	    );

		userEvent.click(screen.getByTestId("BtnDown"));
		expect(screen.getByTestId("lblCurrentDay").textContent).toBe("1");
	});

	it("should not react to up button if day is 12", () => {
	    render(
	        <App/>
	    );

		userEvent.click(screen.getByTestId("BtnUp"));
		userEvent.click(screen.getByTestId("BtnUp"));
		userEvent.click(screen.getByTestId("BtnUp"));
		userEvent.click(screen.getByTestId("BtnUp"));
		userEvent.click(screen.getByTestId("BtnUp"));
		userEvent.click(screen.getByTestId("BtnUp"));
		userEvent.click(screen.getByTestId("BtnUp"));
		userEvent.click(screen.getByTestId("BtnUp"));
		userEvent.click(screen.getByTestId("BtnUp"));
		userEvent.click(screen.getByTestId("BtnUp"));
		userEvent.click(screen.getByTestId("BtnUp"));
		userEvent.click(screen.getByTestId("BtnUp"));
		userEvent.click(screen.getByTestId("BtnUp"));
		expect(screen.getByTestId("lblCurrentDay").textContent).toBe("12");
	});
});
import React from "react";
import ReactDOM from "react-dom";
import { Appointment } from "../src/Appointment";

describe("Appointment", () => {
    let container;
    
    beforeEach(() => {
        container = document.createElement("div");
    });

    const renderCustomer = (customer) => ReactDOM.render(<Appointment customer={customer} />, container);

    it("renders first name of customer", () => {
        renderCustomer({ firstName: "Ashley" })
        expect(container.textContent).toMatch("Ashley")
    })

    it("renders first name of another customer", () => {
        renderCustomer({ firstName: "Jordan" })
        expect(container.textContent).toMatch("Jordan")
    })

})
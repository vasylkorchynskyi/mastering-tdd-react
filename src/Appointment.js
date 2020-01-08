import React from "react";

const Appointment = ({ customer: { firstName } }) => (
    <div>{firstName}</div>
)

export { Appointment }
import React from 'react';
import './Form.scss';
import Checkbox from "./Checkbox/Checkbox"


const Form = () => {
    const title1 = "Alkohol";
    const title2 = "Softs"
    const title3 = "Addictives"
    const alkohols = ["Vodka", "Gin", "Rum", "Sweet Vermout", "Dry Vermouth", "Tequila", "Whisky"];
    const softs = ["Cola", "Tonic", "Soda", "Orange Juice", "Sprite", "Apple Juice"];
    const Addictives = ["Mint", "Lemon", "Sugar", "Ice Cubes", "Orange", "Sirup", "Lemon juice"];

return (
    <form className="form">
        <section className="section">
            <h2>{title1}</h2>
            <ul className="list">
                {alkohols.map(element => (
                    <Checkbox name={element} key={element} className="checkbox"/>
                ))}
            </ul>
        </section>
        <section className="section">
            <h2>{title2}</h2>
            <ul className="list">
                {softs.map(element => (
                    <Checkbox name={element} key={element} className="checkbox"/>
                ))}
            </ul>
        </section>
        <section className="section">
            <h2>{title3}</h2>
            <ul className="list">
                {Addictives.map(element => (
                    <Checkbox name={element} key={element} className="checkbox"/>
                ))}   
            </ul>
        </section>
        <button type="submit" className="submit-button">Generate</button>   
    </form>
)
};


export default Form;
import React, { useState } from 'react';
import './App.css';
import Row from './components/Row';

function App() {
	const [currentDay, setCurrentDay] = useState(1);

    const daySuffix = [
    	"st",
    	"nd",
    	"rd",
    	"th",
    	"th",
    	"th",
    	"th",
    	"th",
    	"th",
    	"th",
    	"th",
    	"th"
    ]

    const BtnClickUp = () => {
    	if (currentDay < 12) {
    		let toDay = currentDay;
    		setCurrentDay(0);

    		setTimeout(() => {
    				setCurrentDay(toDay + 1);
    			},
    			500
    		);   		
    	}
    }

    const BtnClickDown = () => {
    	if (currentDay > 1) {
    		let toDay = currentDay;
    		setCurrentDay(0);
    		setTimeout(() => {
    				setCurrentDay(toDay - 1);
    			},
    			500
    		);        	
    	}    	
    }

    const dayControls = (
    	<div className="dayControl">
    		<div className="dayText">
    		{ currentDay == 0 ? '' : currentDay }
    		<sup> 
    			{ currentDay == 0 ? '' : daySuffix[currentDay - 1]  }
    		</sup>
    		</div>

    		<div className="dayButtons">
    			<div className="dayButton" onClick={ BtnClickUp }>^</div>
    			<div className="dayButton" onClick={ BtnClickDown }>^</div>
    		</div>
    	</div>
    );

    return (
        <div className="App">
        	<h1>On the { dayControls } day of Christmas my true love gave to me</h1>
            <Row currentDay = {currentDay} day="12" />
            <Row currentDay = {currentDay} day="11" />
            <Row currentDay = {currentDay} day="10" />
            <Row currentDay = {currentDay} day="9" />
            <Row currentDay = {currentDay} day="8" />
            <Row currentDay = {currentDay} day="7" />
            <Row currentDay = {currentDay} day="6" />
            <Row currentDay = {currentDay} day="5" />
            <Row currentDay = {currentDay} day="4" />
            <Row currentDay = {currentDay} day="3" />
            <Row currentDay = {currentDay} day="2" />
            <Row currentDay = {currentDay} day="1" />           
        </div>
    );
}

export default App;

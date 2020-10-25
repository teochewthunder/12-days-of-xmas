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

    const BtnClickUp = () => {console.log("up");
    	if (currentDay < 12) {
    		setCurrentDay(currentDay + 1);		
    	}
    }

    const BtnClickDown = () => {console.log("down");
    	if (currentDay > 1) {
            setCurrentDay(currentDay - 1);       	
    	}    	
    }

    const dayControls = (
    	<div className="dayControl">
    		<div className="dayText">
                <span data-testid="lblCurrentDay">
	    		{ currentDay }
                </span>
	    		<sup> 
	    			{ daySuffix[currentDay - 1] }
	    		</sup>
    		</div>

    		<div className="dayButtons">
    			<div className="dayButton" data-testid="BtnUp" onClick={ BtnClickUp }>&#9650;</div>
    			<div className="dayButton" data-testid="BtnDown" onClick={ BtnClickDown }>&#9660;</div>
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

import React from 'react';
import day1 from '../../svg/day1.svg';
import day2 from '../../svg/day2.svg';
import day3 from '../../svg/day3.svg';
import day4 from '../../svg/day4.svg';
import day5 from '../../svg/day5.svg';
import day6 from '../../svg/day6.svg';
import day7 from '../../svg/day7.svg';
import day8 from '../../svg/day8.svg';
import day9 from '../../svg/day9.svg';
import day10 from '../../svg/day10.svg';
import day11 from '../../svg/day11.svg';
import day12 from '../../svg/day12.svg';
import './Row.css';

function Row(props) {
    let day = props.day;
    let currentDay = props.currentDay;

    let content = [
        { text: '', file: '' },
        { text: 'a partridge in a pear tree!', file: day1 },
        { text: 'two turtle doves, and', file: day2 },
        { text: 'three french hens', file: day3 },
        { text: 'four calling birds', file: day4 },
        { text: 'five gold rings', file: day5 },
        { text: 'six swans a-swimming', file: day6},
        { text: 'seven geese a-laying', file: day7 },
        { text: 'eight maids a-milking', file: day8 },
        { text: 'nine ladies dancing', file: day9 },
        { text: 'ten lords a-leaping', file: day10 },
        { text: 'eleven pipers piping', file: day11 },
        { text: 'twelve drummers drumming', file: day12 }
    ];

    let arr = [];
    for (let i = 0; i < day; i++) arr.push('');

    const images = arr.map((item, index) => (
            <img key={ day+'img'+index } src={ content[day].file } width="100" height="100" />
        )
    );
       
    return (
        <div 
            className={ 'Row' + (currentDay >= day ? '' : ' Hidden') } 
            style={{transition:'all 0.5s', transitionDelay: ((currentDay + 1 - day) * 0.5) + 's'}}
        >
            <h1>{ content[day].text }</h1>
            { images }
        </div>
    );
}

export default Row;

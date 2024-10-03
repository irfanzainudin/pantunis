import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);

// Taken from: https://coreui.io/blog/how-to-generate-a-random-number-in-javascript/
const getRandomIntegerInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
}

function random() {
    var rid = getRandomIntegerInclusive(0, 4);
    const randomWords = [
        "Full narrow is Sarawak’s stream,\nWhere pineapples rise on the swell.\nThis craft has insufficient beam,\nTo hold you. Precious one, farewell!",
        "random",
        "magnificient",
        "super",
        "drinking"
    ];

    return randomWords[rid];
}

function TekaKataComponent() {
    const [input, setInput] = useState("");
    var [word, setWord] = useState(random());
    const [result, setResult] = useState(<Emoji symbol="❔" label="tick"/>);
    
    const handleChange = e => {
        setInput(e.target.value);
    };

    const check = e => {
        e.preventDefault();
        
        const capitalized = word.charAt().toUpperCase() + word.slice(1)

        if (input === word || input === capitalized) {
            setResult(<Emoji symbol="✅" label="tick"/>);
        } else if (input !== word) {
            setResult(<Emoji symbol="❌" label="cross"/>);
        } else {
            setResult(<Emoji symbol="❔" label="question mark"/>);
        }

        setTimeout( () => {
            newWord();
        }, 300)
    }

    const newWord = () => {
        word = random();
        setWord(word);
        setInput('');
        setResult(<Emoji symbol="❔" label="question mark"/>);
    }
    
    return (
        <div className="container">
            <p className="fs-1">{word}</p>
            <p className="fs-1">{result}</p>
            <p className="fs-3">{input ? input : "..."}</p>
            <div className="playPageInputContainer">
                <form onSubmit={check}>
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control playPageInput w-50 mx-auto"
                            aria-describedby="answerHelp"
                            value={input}
                            onChange={handleChange}
                            autoFocus
                        />
                    </div>
                </form>
            </div>
            <p className='mt-3'>Please press <kbd>Enter</kbd> when you're done typing</p>
            {/* <Link to='/' className="btn btn-primary">Home</Link> */}
        </div>
    );
}

export default TekaKataComponent;
import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { BiRefresh, BiUndo } from 'react-icons/bi';

import { useNavigate, Link } from "react-router-dom";
import { AiOutlineLoading } from 'react-icons/ai';

var toggle = false;
var sum1 = 0
var sum2 = 0
var undoCount = 0
var newArray = [];
var grossWinArray = [];
var newAmount = [];
var suggestionArrray = [];

var playerOneData = []
var playerTwoData = []

function Home() {


    const mainRef = useRef(null);
    const [columns, setColumns] = useState([]);
    const [currentPlayerDivs, setCurrentPlayerDivs] = useState([]);
    const [currentBankerDivs, setCurrentBankerDivs] = useState([]);
    const [divCounter, setDivCounter] = useState(0);
    const [createdDivs, setCreatedDivs] = useState([]);
    const [value, setValue] = useState('');
    const [win, setWin] = useState(0);
    const [winner, setWinner] = useState(null);
    const [inputBetValue, setInputBetValue] = useState(1000);
    const [amountOne, setAmountOne] = useState(0);
    const [amountTwo, setAmountTwo] = useState(0);
    const [playerDivs, setPlayerDivs] = useState(0);
    const [bankerDivs, setBankerDivs] = useState(0);
    const [playerOneCount, setPlayerOneCount] = useState(0);
    const [playerTwoCount, setPlayerTwoCount] = useState(0);
    const [playerTwoMoney, setPlayerTwoMoney] = useState(0);
    const [playerOneMoney, setPlayerOneMoney] = useState(0);
    const [highBalance, setHighBalance] = useState(0);
    // const [suggestionArrray, setSuggestionArray] = useState([]);
    const [newPercentage, setNewPercentage] = useState(0);
    // const [undoClick, setUndoClick] = useState(0);
    const [undoWinningPercentage, setUndoWinnigPercentage] = useState([]);
    const [flag, setFlag] = useState(false);
    const [undoFlag, setUndoFlag] = useState(false);
    const [newUndo, setNewUndo] = useState(0);
    // const [newAmount, setNewAmount] = useState([]);
    const [spin, setSpin] = useState(false);
    const [grossWinUndo, setGrossWinUndo] = useState(null);
    const [suggestionUndo, setSuggestionUndo] = useState("");

    const [suggestionFlag, setSuggestionFlag] = useState(false);
    const [hasClicked, setHasClicked] = useState(false);
    const [playerOneData, setPlayerOneData] = useState([]);
    const [playerTwoData, setPlayerTwoData] = useState([]);






    const [input, setInput] = useState('');
    const [inputPercentage, setInputPercentage] = useState('');
    const [suggestion, setSuggestion] = useState('');



    const [playerOneFlag, setPlaterOneFlag] = useState(null);
    const [playerTwoFlag, setPlayerTwoFlag] = useState(null);




    var popupClassName = playerOneFlag ? 'win-popup' : 'loss-popup';
    var popupText = playerOneFlag ? 'Win' : 'Loss';

    var playerTwoClassName = playerTwoFlag ? 'win-popup' : 'loss-popup';
    var playerTwoPopupText = playerTwoFlag ? 'Win' : 'Loss';


    function createNewColumn() {
        const column = (
            <div key={columns.length} className="column">
                {currentPlayerDivs}
                {currentBankerDivs}
            </div>
        );
        setColumns(prevColumns => [...prevColumns, column]);
        setCurrentPlayerDivs([]);
        setCurrentBankerDivs([]);
        setDivCounter(0);
    }










    function createDiv(type) {
        // console.log(suggestionArrray,"suggestionN")
        setFlag(false)
        setUndoFlag(false)
        setSuggestionFlag(false)
        console.log(newArray, "nnnnnnnnn")

        const value = type === 'player' ? 'P' : 'B';
        setInput(prevInput => prevInput + value)
        setInputPercentage(prevInput => prevInput + value)

        const className = type === 'player' ? 'pCapital' : 'bCapital';
        const capitalValue = type === 'player' ? 'P' : 'B';

        if (type === 'player') {
            setPlayerDivs(playerDivs + 1)
            if (currentBankerDivs.length > 0) {
                createNewColumn();
            }
            const playerDiv = createPlayerDiv(capitalValue, className);
            setCurrentPlayerDivs(prevDivs => [...prevDivs, playerDiv]);
            setCreatedDivs(prevDivs => [...prevDivs, playerDiv]);
        } else if (type === 'banker') {
            setBankerDivs(bankerDivs + 1)
            if (currentPlayerDivs.length > 0) {
                createNewColumn();
            }
            const bankerDiv = createBankerDiv(capitalValue, className);
            setCurrentBankerDivs(prevDivs => [...prevDivs, bankerDiv]);
            setCreatedDivs(prevDivs => [...prevDivs, bankerDiv]);
        }
    }

    function createPlayerDiv(value, className) {
        return (
            <div key={divCounter} className={className}>
                {value}
            </div>
        );
    }

    function createBankerDiv(value, className) {
        return (
            <div key={divCounter} className={className}>
                {value}
            </div>
        );
    }

    function undoDiv() {
        if (!hasClicked) {
            // console.log(newArray, "nnnnnnnn")
            console.log(grossWinArray, grossWin, "grossWIn")
            setFlag(true)
            setUndoFlag(true)
            setSuggestionFlag(true)

            // console.log(playerOneData[playerOneData.length - 2]?.input,"iiiiiiiiiiii")


            // setSuggestion(playerOneData[playerOneData.length - 2]?.suggestion)
            // setInput(playerOneData[playerOneData.length - 2]?.input)
            // setPlayerOneCount(playerOneData[playerOneData.length - 2]?.playerOneCount)
            // setPlayerTwoCount(playerTwoData[playerTwoData.length - 2]?.playerTwoCount)
            // newPercentageA = playerOneData[playerOneData.length - 2]?.newPercentageA
            // newPercentageB = playerTwoData[playerTwoData.length - 2]?.newPercentageB



            // undoCount = undoCount + 1
            // setAmountOne(newAmount[newAmount.length - undoCount])
            // newPercentageA = undoWinningPercentage[undoWinningPercentage.length - undoCount]
            // setNewUndo(newArray[newArray.length - undoCount - 1])
            // setGrossWinUndo(grossWinArray[grossWinArray.length - undoCount - 1])

            // let playerArray = input
            // playerArray = playerArray.substring(0, playerArray.length - 1)
            // setInput(playerArray)
            // setSuggestion(suggestionArrray[suggestionArrray.length - undoCount])

            // setSuggestionArray(suggestionArrray.slice(0, suggestionArrray.length - 1))
            console.log("click undo")
            const lastDivIndex = createdDivs.length - 1;
            console.log(lastDivIndex, "last div")
            if (lastDivIndex >= 0) {
                const lastDiv = createdDivs[lastDivIndex];
                console.log(lastDiv, "last div", 1)
                if (lastDiv.props.className === 'pCapital') {
                    setCurrentPlayerDivs(prevDivs => prevDivs.slice(0, -1));
                    console.log(currentPlayerDivs, "last div", 2)
                } else if (lastDiv.props.className === 'bCapital') {
                    setCurrentBankerDivs(prevDivs => prevDivs.slice(0, -1));
                    console.log(currentPlayerDivs, "last div", 2)
                }
                console.log(createdDivs, "last div", 3)
                setCreatedDivs(prevDivs => prevDivs.slice(0, -1));
                console.log(createdDivs, "last div", 3)

                if (currentPlayerDivs.length === 0 && currentBankerDivs.length === 0 && columns.length > 0) {
                    console.log(columns, "last div", 4)
                    const lastColumnIndex = columns.length - 1;
                    console.log(lastColumnIndex, "current column")
                    setColumns(prevColumns => prevColumns.slice(0, lastColumnIndex));
                    console.log(columns, "last div", 5)
                }
            }
            setHasClicked(true);
        }


    }






    useEffect(() => {
        console.log(playerOneData, "playerOneData")
        console.log(playerTwoData, "playerTwoData")
        // console.log(grossWinArray,"grossWIn")
        setSpin(true)
        const delay = 300;
        // setSuggestionArray(suggestion)

        // setSpin(false)

        setTimeout(() => {
            // suggestionArrray.push(suggestion)
            if (input.length === 3) {
                setAmountOne(inputBetValue)
                setAmountTwo(inputBetValue)

            }
            console.log(input, "PBPBPPP");
            if (input.length > 3) {
                console.log(input, "3");
                var symbols = input.split("");
                var length = symbols.length;
                var answer = "";

                var lastArrayInput = symbols[length - 1];

                if (symbols[length - 4] === symbols[length - 1]) {
                    answer = symbols[length - 4 + 1];
                } else {
                    answer = symbols[length - 4 + 1] === "B" ? "P" : "B";
                }
                if (lastArrayInput !== suggestion && symbols.length > 3) {
                    toggle = !toggle
                    console.log(toggle, "toggle");
                    setPlaterOneFlag(false)
                    setPlayerTwoFlag(true)
                    setAmountOne(inputBetValue)
                    //  setNewAmount(amountOne)
                    if (amountTwo < 2 * inputBetValue) {
                        setAmountTwo(parseInt(amountTwo) + parseInt(inputBetValue))

                    }
                    newAmount.push(amountOne)
                    console.log(newAmount, "newwww")
                    setNewPercentage(newPercentage - 1)

                    setPlayerTwoCount(playerTwoCount + 1)

                    // if(undoFlag === false){
                    //     setPlayerTwoCount(playerTwoCount + 1) 
                    // }else{
                    //     setPlayerTwoCount(playerTwoCount - 1) 
                    // }


                    if (undoFlag === false) {
                        sum1 = parseInt(sum1) - parseInt(amountOne)
                    }

                } else if (lastArrayInput === suggestion && symbols.length > 3) {
                    setWin(win + 1);
                    setPlaterOneFlag(true)
                    setPlayerTwoFlag(false)
                    setAmountTwo(inputBetValue)
                    setNewPercentage(newPercentage + 1)
                    if (amountOne < 2 * inputBetValue) {
                        setAmountOne(parseInt(amountOne) + parseInt(inputBetValue))

                    }
                    newAmount.push(amountOne)
                    console.log(newAmount, "newwww")


                    setPlayerOneCount(playerOneCount + 1)


                    // if(undoFlag === false){
                    //     setPlayerOneCount(playerOneCount + 1) 
                    // }else{
                    //     setPlayerOneCount(playerOneCount - 1)
                    // }


                    if (undoFlag === false) {
                        sum1 = parseInt(sum1) + parseInt(amountOne)
                    }


                }
                if (toggle === true) {
                    answer = answer === "B" ? "P" : "B";
                }
                if (toggle === false && symbols.length > 3) {
                    // sum2 = parseInt(sum2) - parseInt(amountTwo)

                    // setPlaterOneFlag(true)
                    // setPlayerTwoFlag(false)
                    setPlayerTwoMoney(playerTwoMoney)
                    // setPlayerOneCount(playerOneCount + 1)
                    console.log(playerOneCount, "p1 has won");
                    // setAmountTwo(inputBetValue)


                    setPlayerOneMoney(amountOne)
                    // setPlayerOneMoney(amountOne)
                    console.log(playerOneMoney, "p1 money")
                } else if (toggle === true && symbols.length > 3) {
                    // sum1 = parseInt(sum1) - parseInt(amountOne)
                    // sum2 = parseInt(sum2) + parseInt(amountTwo)
                    // setPlaterOneFlag(false)
                    // setPlayerTwoFlag(true)
                    setPlayerOneMoney(playerOneMoney)
                    // setPlayerTwoCount(playerTwoCount + 1)
                    console.log(playerTwoCount, "p2 has won");
                    // setAmountOne(inputBetValue)
                    // if (amountTwo < 2 * inputBetValue) {
                    //     setAmountTwo(parseInt(amountTwo) + parseInt(inputBetValue))
                    // }

                    setPlayerTwoMoney(amountTwo)
                    // setPlayerTwoMoney(amountTwo)
                    console.log(playerTwoMoney, "p2 money")
                }

                setSuggestion(answer);
                suggestionArrray.push(answer)


                console.log(sum1, sum2, "sum")

            }
            if (input.length === 3) {
                setSuggestion(input.charAt(0))
                suggestionArrray.push(suggestion)
            }



            console.log(suggestionArrray, "suggestionN")

            setSpin(false);
        }, delay);

    }, [input]);







    // useEffect(() => {

    //     setPlayerOneMoney(amountOne)
    //     setPlayerTwoMoney(amountTwo)
    // }, [amountOne, amountTwo])
    var winPercentageA = 0
    var winPercentageB = 0
    var newPercentageA = 0
    var newPercentageB = 0

    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }

    function removeAdjacentDuplicates(arr) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== arr[i + 1]) {
                result.push(arr[i]);
            }
        }

        return result;
    }

    if (input.length >= 4) {
        console.log(playerOneCount, playerTwoCount, input.length, "aaaaa")
        winPercentageA = (playerOneCount / parseInt(input.length - 4)) * 100;
        winPercentageB = (playerTwoCount / parseInt(input.length - 4)) * 100;
        winPercentageA = isNaN(winPercentageA) ? 0 : Math.round(winPercentageA);
        winPercentageB = isNaN(winPercentageB) ? 0 : Math.round(winPercentageB);


        console.log(playerOneCount, playerTwoCount, "count")
        newPercentageA = (playerOneCount / parseInt(playerOneCount + playerTwoCount)) * 100;

        newPercentageB = (playerTwoCount / parseInt(playerOneCount + playerTwoCount)) * 100;


        // let undoPercentage = undoWinningPercentage
        // undoPercentage.push(newPercentageA)
        // setUndoWinnigPercentage(undoPercentage)
        // setUndoWinnigPercentage([...undoWinningPercentage,newPercentageA])
        newPercentageA = isNaN(newPercentageA) ? 0 : Math.round(newPercentageA);
        newPercentageB = isNaN(newPercentageB) ? 0 : Math.round(newPercentageB);
        newArray.push(newPercentageA)
        newArray = removeDuplicates(newArray)


    }




    var grossWin = parseInt(sum1)
    grossWinArray.push(grossWin)
    grossWinArray = removeAdjacentDuplicates(grossWinArray)
    console.log(grossWinArray, grossWin, "grossWIn")

    if (grossWin > highBalance) {
        setHighBalance(grossWin);
    }


    const handleRefresh = () => {
        window.location.reload();
    };



    useEffect(() => {
        if (input && suggestion && newPercentageA && amountOne && playerOneCount) {
            const playerOneObj = {
                input,
                suggestion,
                amountOne,
                newPercentageA,
                playerOneCount
            };

            const existingArrayIndex = playerOneData.findIndex(
                (item) => item.input === input
            );
            if (existingArrayIndex !== -1) {
                playerOneData.splice(existingArrayIndex, 1, playerOneObj);
            } else {
                playerOneData.push(playerOneObj);
            }
        }
    }, [input, newPercentageA, suggestion]);


    useEffect(() => {
        if (input && suggestion && newPercentageB && amountTwo && playerTwoCount) {

            const suggestionTwo = suggestion === "P" ? "B" : "P"
            const playerTwoObj = {
                input,
                suggestion: suggestionTwo,
                amountTwo,
                newPercentageB,
                playerTwoCount
            };

            const existingArrayIndex = playerTwoData.findIndex(
                (item) => item.input === input
            );
            if (existingArrayIndex !== -1) {
                playerTwoData.splice(existingArrayIndex, 1, playerTwoObj);
            } else {
                playerTwoData.push(playerTwoObj);
            }
        }
    }, [input, newPercentageB, suggestion]);



    // useEffect(() => {
    //     if (input && suggestion  && newPercentageA && amountOne) {
    //       const playerOneObj = {
    //         input,
    //         suggestion,
    //         amountOne,
    //         newPercentageA,
    //       };

    //       playerOneData.push(playerOneObj);
    //     }


    //   }, [input,newPercentageA,suggestion]);

    // if (input && suggestion && amountTwo) {
    //   const playerTwoObj = {
    //     input,
    //     suggestion,
    //     amountTwo,
    //     newPercentageB,
    //   };

    //   playerTwoData.push(playerTwoObj);
    // }



    if (undoFlag) {

        // console.log(playerOneData,"playerOneData")
        // setInput(playerOneData[playerOneData.length - 2].input)
        // // setSuggestion(playerOneData[playerOneData.length - 2].suggestion)
        // setAmountOne(playerOneData[playerOneData.length - 2].amountOne)
        // // setAmountTwo(playerTwoData[playerTwoData.length - 2].amountTwo)
        // setPlayerTwoFlag(playerTwoData[playerTwoData.length - 2].playerTwoFlag)
        // setPlaterOneFlag(playerOneData[playerOneData.length - 2].playerOneFlag)
        // setAmountTwo(playerTwoData[playerTwoData.length - 2].amountTwo)
        // newPercentageA = playerOneData[playerOneData.length - 2].newPercentageA
        // newPercentageB = playerTwoData[playerTwoData.length - 2].newPercentageB
        // setUndoFlag(false)

    }



    return (
        <>
            {/* 
            <div className="title">
                <p className="title-text">IONINKS</p>
            </div> */}
            <div className="card-container">
                {/* <div className="suggestion-div">
                    <button className='suggestion' onClick={suggestSymbol} style={{ marginRight: "20px", marginTop: "10px" }}>
                        Suggestion
                    </button>
                    {suggestion === 'P' && <div className="pCapitals">P</div>}
                    {suggestion === 'B' && <div className="bCapitals">B</div>}
                </div> */}
                {/* <p style={{ marginTop: "10px" }}>{input}</p> */}
                {/* <p style={{ marginTop: "10px" }} className='first-card-title'>Player 1</p> */}
                <p>{winner}</p>
                {/* <p>win:{Math.round((win/parseInt(input.length))*100)}</p> */}
                {/* <p>win: {winPercentage}</p> */}

                <div style={{ height: "150px", marginTop: "20px" }} className="card">
                    <div className="button-row">
                        <div className="button-container">
                            <p className="button-text">Next Bet</p>
                            {suggestion === "P" ? (
                                <button style={{ border: "2px solid #006ACC", color: "white", backgroundColor: "#006ACC" }} className="bigP">P</button>
                            ) : suggestion === "B" ? (
                                <button style={{ border: "2px solid #CC0000", color: "white", backgroundColor: " #CC0000" }} className="bigB">B</button>
                            ) : null}
                            {/* {playerOneData[playerOneData.length - 1]?.suggestion === "P" ? (
                                <button style={{ border: "2px solid #006ACC", color: "white", backgroundColor: "#006ACC" }} className="bigP">P</button>
                            ) : playerOneData[playerOneData.length - 1]?.suggestion === "B" ? (
                                <button style={{ border: "2px solid #CC0000", color: "white", backgroundColor: " #CC0000" }} className="bigB">B</button>
                            ) : null} */}

                            {/* {playerOneFlag && suggestion === "P" && (
                                <button style={{ border: "2px solid #006ACC",color:"white",backgroundColor:"#006ACC" }} className="button">
                                    Player
                                </button>
                            )}
                            {playerOneFlag && suggestion === "B" && (
                                <button style={{ border: "2px solid #CC0000", color: "white",backgroundColor:" #CC0000" }} className="button">
                                    Banker
                                </button>
                            )}
                            {playerOneFlag === false && suggestion === "P" && (
                                <button style={{ border: "2px solid #CC0000", color: "white",backgroundColor:" #CC0000"  }} className="button">
                                    Banker
                                </button>
                            )}
                            {playerOneFlag === false && suggestion === "B" && (
                                <button style={{ border: "2px solid #006ACC",color:"white",backgroundColor:"#006ACC" }} className="button">
                                    Player
                                </button>
                            )} */}

                        </div>
                        <div style={{ marginLeft: "15px" }} className="button-container">
                            <p className="button-text">Amount</p>
                            <button style={{ color: "black", fontWeight: "bold" }} className="button">{amountOne}</button>
                        </div>
                        {/* undoFlag === true ? playerOneData[playerOneData.length - 2]?.newPercentageA : playerOneData[playerOneData.length - 1]?.newPercentageA */}
                        <div className="button-container">
                            <p className="button-text">Winning Percentage</p>
                            <p style={{ fontSize: "0.9rem", fontWeight: "bold" }} className='card-top-section'>{newPercentageA}%</p>
                        </div>
                    </div>
                    {/* <div className="middle-section">
                        <p className='unit'>Unit of bet setting</p>
                        <input
                            className="input-bet"
                            type="number"
                            value={inputBetValue}
                            onChange={(e) => setInputBetValue(e.target.value)}
                        />
                    </div> */}
                    <div className="last-section">
                        {playerOneFlag !== null && (
                            <div className={`playerOnePopup ${popupClassName}`}>
                                <p className="popup-text">{popupText}</p>
                            </div>
                        )}
                    </div>
                </div>
                <p className='first-card-title'>Player 2</p>
                <div style={{ height: "150px" }} className="card">
                    <div className="button-row">

                        <div className="button-container">
                            <p className="button-text">Next Bet</p>
                            
                            {suggestion === "P" ? (
                                <button style={{ border: "2px solid #CC0000", color: "white", backgroundColor: " #CC0000" }} className="bigB">
                                    B
                                </button>
                            ) : (suggestion === "B") ? (
                                <button style={{ border: "2px solid #006ACC", color: "white", backgroundColor: "#006ACC" }} className="bigP">
                                    P
                                </button>
                            ) : null}

                            {/* {playerTwoData[playerTwoData.length - 1]?.suggestion === "P" ? (
                                <button style={{ border: "2px solid #006ACC", color: "white", backgroundColor: "#006ACC" }} className="bigP">P</button>
                            ) : playerTwoData[playerTwoData.length - 1]?.suggestion === "B" ? (
                                <button style={{ border: "2px solid #CC0000", color: "white", backgroundColor: " #CC0000" }} className="bigB">B</button>
                            ) : null} */}

                        </div>
                        <div style={{ marginLeft: "15px" }} className="button-container">
                            <p className="button-text">Amount</p>
                            <button style={{ color: "black", fontWeight: "bold" }} className="button">{amountTwo}</button>
                        </div>
                        <div className="button-container">
                            <p className="button-text">Winning Percentage</p>
                            {/* {newPercentageA === 0 ? 0 :100 - newPercentageA} */}
                            <p style={{ fontSize: "0.9rem", fontWeight: "bold" }} className='card-top-section'>{newPercentageB}%</p>
                        </div>
                    </div>


                    <div className="last-section">
                        {playerTwoFlag !== null && (
                            <div className={`playerTwoPopup ${playerTwoClassName}`}>
                                <p className="popup-text">{playerTwoPopupText}</p>
                            </div>
                        )}


                    </div>
                </div>
                <div className="middle-section">
                    <p className='unit'>Unit of bet setting</p>
                    <input
                        className="input-bet"
                        type="number"
                        value={inputBetValue}
                        onChange={(e) => setInputBetValue(e.target.value)}
                    />
                </div>
                <div className="thirdCard">
                    <div className="main-div">
                        <div className="inner-div">
                            <div style={{ backgroundColor: "black", color: "white", marginLeft: "74px" }} className="first-div">T</div>
                            <div className="second-div">{input.length}</div>
                        </div>
                        <div className="inner-div">
                            <div style={{ backgroundColor: "#006ACC", color: "white" }} className="first-div">P</div>
                            <div className="second-div">{playerDivs}</div>
                        </div>
                        <div className="inner-div">
                            <div style={{ backgroundColor: "#CC0000", color: "white" }} className="first-div">B</div>
                            <div className="second-div">{bankerDivs}</div>
                        </div>
                    </div>

                    {spin ? (
                        <div className="columnsContainer">
                            <div className="loading-spinner">
                                <AiOutlineLoading />
                            </div>
                        </div>


                    ) : (
                        <div ref={mainRef} className="columnsContainer">
                            {columns}
                            <div className="column">
                                {currentPlayerDivs}
                                {currentBankerDivs}
                            </div>
                        </div>
                    )}


                    <div style={{ marginBottom: "10px" }} className="undo-div">
                        <div onClick={undoDiv} className="undoBox">
                            <BiUndo style={{ cursor: "pointer" }} className='undoIcon' />
                            <span style={{ cursor: "pointer" }} className='undoText'>Undo</span>
                        </div>
                        <div onClick={handleRefresh} className="refreshBox">
                            <BiRefresh style={{ cursor: "pointer" }} className='refreshIcon' />
                            <span style={{ cursor: "pointer" }} className='undoText'>Refresh</span>
                        </div>
                    </div>

                    <div style={{}} className="bottom-row">

                        <button id="playerBtn" onClick={() => { setValue('Player Value'); createDiv('player'); }} style={{ backgroundColor: "#006ACC", color: "white", fontSize: "0.9rem", marginLeft: "10px" }} className="bottom-button">Player</button>

                        <button id="bankerBtn" onClick={() => { setValue('Banker Value'); createDiv('banker'); }} style={{ backgroundColor: "#CC0000", color: "white", fontSize: "0.9rem", marginRight: "10px" }} className="bottom-button">Banker</button>
                    </div>

                    <div style={{ marginBottom: "10px" }} className="bottom-caption">
                        <div style={{ marginLeft: "10px" }} className="grossWinBox">
                            <p className='first-caption'>Total win</p>
                            <button className="bottom-button"> {undoFlag === true ? grossWinUndo : grossWin}</button>
                        </div>
                        <div style={{ marginRight: "10px", marginTop: "5px" }} className="highBalanceBox">
                            <p className='second-caption'>High Balance</p>
                            <button className="bottom-button">{highBalance}</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div  className="middle-section">
                        <p className='unit'>Unit of bet setting</p>
                        <input
                            className="input-bet"
                            type="number"
                            value={inputBetValue}
                            onChange={(e) => setInputBetValue(e.target.value)}
                        />
                    </div> */}


            {/* {playerTwoFlag && suggestion === "P" && (
                                <button style={{  border: "2px solid #006ACC",color:"white",backgroundColor:"#006ACC"}} className="button">
                                    Player
                                </button>
                            )}
                            {playerTwoFlag && suggestion === "B" && (
                                <button style={{ border: "2px solid #CC0000", color: "white",backgroundColor:" #CC0000"  }} className="button">
                                    Banker
                                </button>
                            )}
                            {playerTwoFlag === false && suggestion === "P" && (
                                <button style={{ border: "2px solid #CC0000", color: "white",backgroundColor:" #CC0000"  }} className="button">
                                    Banker
                                </button>
                            )}
                            {playerTwoFlag === false && suggestion === "B" && (
                                <button style={{ border: "2px solid #006ACC",color:"white",backgroundColor:"#006ACC"}} className="button">
                                    Player
                                </button>
                            )} */}

        </>
    )
}
export default Home;




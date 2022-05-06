import { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Win from "./Win";

function Game() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);


    const handleClick = (e) => {
        const id = e.currentTarget.classList[1];
        if (clickedCards.includes(id)) {
            setScore(0);
            setClickedCards([]);
        } else {
            setScore(prevScore => prevScore + 1);
            setClickedCards(prevArr => [...prevArr, id]);
            setBestScore(score + 1 >= bestScore ? score + 1 : bestScore);
            if (score == 10) {
                
            }
        }
    }

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore}/>
      <Container handleClick={handleClick} score={score}/>
      {score == 10 ? <Win /> : null}
    </div>
  );
}

export default Game;

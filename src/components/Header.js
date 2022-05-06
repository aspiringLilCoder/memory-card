

function Header(props) {
    return (
      <div className="header">
        <h1>Anime Memory Game</h1>
        <div id="scores">
            <p className="score">Score: {props.score}</p>
            <p className="score">Best Score: {props.bestScore}</p>
        </div>
        <p id="description">Get points by clicking each of the characters! Just.. don't click on any of them more than once!</p>
      </div>
    );
  }
  
  export default Header;
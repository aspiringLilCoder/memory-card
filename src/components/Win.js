function Win() {
  return (
    <div className="modal">
        <div class="modal-content">
            <p id="win">Your an Anime Memory Master!</p>
            <button onClick={() => window.location.reload()}>Restart</button>
        </div>
    </div>
  );
}

export default Win;

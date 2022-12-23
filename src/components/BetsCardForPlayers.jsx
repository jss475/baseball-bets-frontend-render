import React from "react";
import { useHistory } from "react-router-dom";
import "../player_bet_card.css";

function BetsCardForPlayers({ bet }) {
  const { odds, description, current_bets } = bet;
  const history = useHistory();

  //when you click the Players Bet Card it redirects to the bets page associated with it so the user can bet
  function handlePlayersBetCardClick() {
    history.push(`/bets/${bet.id}`);
  }
  return (
    <div className="bets-card" onClick={handlePlayersBetCardClick}>
      <div className="bets-card-water">
        <p className="card-text">{description}</p>
        <div className="badge-container">
          <p className="badge bg-pill bg-success">Odds: {odds}</p>
          <p className="badge bg-pill bg-success">
            Current bets: ${current_bets}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BetsCardForPlayers;

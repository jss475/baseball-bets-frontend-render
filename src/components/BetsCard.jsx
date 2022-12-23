import { useHistory, useLocation } from "react-router-dom";
import BetsForm from "./BetsForm";
import "../bets_card.css";

function BetsCard({ bet, show, handleSetShow, handleAddBet, handleDeleteBet }) {
  //refactor the bet prop for the properties needed
  const { id, odds, description, current_bets, player } = bet;
  //set up the useHistory to push to new form
  const history = useHistory();
  const { pathname } = useLocation();

  function handleBetClick() {
    //pushes the website to a new page while also sending the bet prop through the state key of history
    //history.push({pathname:'/place_bets', state: {data: bet}})
    if (pathname !== `/bets/${id}`) {
      handleSetShow();
      history.push(`/bets/${id}`);
    }
  }

  return (
    <>
      <div className="bets-card">
        <figure className="bets-card-water">
          <div className="bets-card-img-container">
            <img className="bets-img" src={player.image} alt="hello" />
          </div>

          <figcaption className="bets-card-caption">
            <h1 className="bets-card-name">{player.name}</h1>

            <p>{description}</p>

            <div className="bets-card-money">
              <h4 className="bets-card-money-child">
                <span className="bets-card-label">Odds</span>
                {odds}:1
              </h4>
              <h4 className="bets-card-money-child">
                <span className="bets-card-label">Current Bets</span>$
                {current_bets}
              </h4>
            </div>
          </figcaption>
          <div className="bets-card-btn-container">
            {!show ? (
              <button
                className="btn btn-light btn-lg btn-block"
                onClick={handleBetClick}
              >
                Place Bet
              </button>
            ) : null}
            {show ? (
              <BetsForm
                bet={bet}
                handleAddBet={handleAddBet}
                handleDeleteBet={handleDeleteBet}
              />
            ) : null}
          </div>
        </figure>
      </div>
    </>
  );
}

export default BetsCard;

import { useHistory, useLocation } from "react-router-dom";
import BetsCardForPlayers from "./BetsCardForPlayers";
import "../player_bet_card.css";
import "../player_card.css";

export default function PlayerCard({
  player,
  handleSetPlayerShow,
  playerShow,
}) {
  //initialize history for useHistory
  const history = useHistory();
  //get the pathname that we are currently on
  const pathname = useLocation();

  const { id, name, team_name, image, stats, bets } = player;

  function handleCardClick() {
    if (pathname.pathname !== `/players/${id}`) {
      handleSetPlayerShow();
      history.push(`/players/${id}`);
    }
  }

  return (
    <>
      <div className="player-card" onClick={handleCardClick}>
        <div className="additional">
          <div className="user-card">
            <img src={image} alt="..." />
          </div>

          <div className="more-info">
            <h1>{name}</h1>
            <div className="coords">
              <span>{team_name}</span>
            </div>
            <div className="stats">
              <div>
                <div className="title">Average</div>
                <i className="fa fa-trophy"></i>
                <div className="value">{stats[0].toFixed(3)}</div>
              </div>
              <div>
                <div className="title">HR</div>
                <i className="fa fa-gamepad"></i>
                <div className="value">{stats[1]}</div>
              </div>
              <div>
                <div className="title">RBI</div>
                <i className="fa fa-group"></i>
                <div className="value">{stats[2]}</div>
              </div>
              <div>
                <div className="title">WAR</div>
                <i className="fa fa-coffee"></i>
                <div className="value">{stats[3]}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="general">
          <h1>{name}</h1>
          <span className="more">Mouse over the card for more info</span>
        </div>
      </div>

      <div className="card-group">
        {playerShow
          ? bets.map((bet) => {
              return <BetsCardForPlayers key={bet.id} bet={bet} />;
            })
          : null}
      </div>
    </>
  );
}

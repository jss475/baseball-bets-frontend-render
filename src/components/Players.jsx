import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlayerCard from "./PlayerCard";

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [showPlayer, setShowPlayers] = useState([]);
  //create an id variable based off of the individual player card picked
  let { id } = useParams();
  //used as a conditional for when to display all players or the player card that has been clicked
  const [playerShow, setPlayerShow] = useState(() => {
    return id ? true : false;
  });

  //fetches the initial player data
  useEffect(() => {
    const getPlayers = async () => {
      const res = await fetch("/players");
      if (res.ok) {
        setPlayers(await res.json());
      }
    };

    getPlayers();
  }, []);

  //added a useEffect to filter the players based on if there is an id present or the state for clicking on the players has changed
  useEffect(() => {
    //if no players exist return nothing
    if (players.length === 0) return;

    //if an id or a player hasn't been clicked, return all players
    if (!id || !playerShow) {
      setShowPlayers([...players]);
      if (playerShow) handleSetPlayerShow(); //if a player has been clicked, reset playerShow to false
    } else {
      //if a player has been clicked, filter so only that player is shown
      setShowPlayers(players.filter((player) => player.id === +id));
    }
  }, [players, playerShow, id]);

  //callback function to change state of if a player has been clicked
  const handleSetPlayerShow = () => setPlayerShow((prev) => !prev);

  return (
    <>
      <div className="player-card-center">
        {showPlayer.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            playerShow={playerShow}
            handleSetPlayerShow={handleSetPlayerShow}
          />
        ))}
      </div>
    </>
  );
}

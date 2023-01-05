import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../user.css";

export default function User({ handleLogin }) {
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    const validateUser = async () => {
      let req = await fetch("https://rails-o1cc.onrender.com/validate_user");
 
      if (req.ok) {
        
        setUser(await req.json());
        console.log(req.json())
      } else {
        console.log(req.json())
        handleLogin(false);
        history.push("/login");
      }
    };

    validateUser();
  }, [handleLogin, history]);

  const { user_bets, name, money, winnings } = user;
  console.log(name)
  console.log(money)
  console.log(winnings)
  console.log(user_bets)

  return (
    <>
      <div className="user-container">
        <div className="user-container-child1">
          <h1 className="user-name">Hello {name}</h1>
          <h6>
            {
              "This is your profile page. You can see the bets that you've made below!"
            }
          </h6>
        </div>
        <div className="user-container-child2">
          <p className="user-bank">{`You have: $${money}`}</p>
        </div>
        <div className="user-container-child3">
          <p className="user-winnings">{`You've won: $${winnings}`}</p>
        </div>
      </div>

      {user_bets && user_bets.length > 0 ? (
        <h1 className="user-bet-message">Here are the bets you've made!</h1>
      ) : null}

      {user_bets > 0 ? (
        <ul>
          {user_bets.map((el, i) => (
            <li key={i}>{el.user_message}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

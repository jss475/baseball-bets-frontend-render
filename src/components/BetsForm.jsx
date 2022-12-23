import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../bets_card.css";

function BetsForm({ bet, handleAddBet, handleDeleteBet }) {
  const [betFormSubmit, setBetFormSubmit] = useState(false);
  const [newUserBet, setNewUserBet] = useState({});
  const history = useHistory();

  const handleOkReq = (data) => {

      const { bet } = data;
      Object.keys(newUserBet).length === 0
        ? setNewUserBet(data)
        : setNewUserBet({});
      handleAddBet(bet.id, bet.current_bets, data);

  };

  const handleErrorReq = ({ error }) => {
    alert(error);
    history.push("/add-money");
  };

  async function handleBetSubmit(e) {
    e.preventDefault();
    const betForm = document.querySelector("#bet-form");
    const form = new FormData(betForm);
    form.append("bet_id", bet.id);

    const configObj = {
      method: "POST",
      body: form,
    };

    const req = await fetch("/user_bets", configObj);
    const res = await req.json();
    if(res["error"]){
      if(res["status"] === 500){
        alert("Please add a bet!")
      }else{
        alert(res["error"]);
        if(res["error"].includes("enough money")){
          history.push("/add-money");
        }
      }
    }else{
      req.ok ? handleOkReq(res) : handleErrorReq(res);
      setBetFormSubmit((betFormSubmit) => !betFormSubmit);
  
      betForm.reset();
    }
  }
  //handle the update bet
  async function handleUpdateBet(e) {
    e.preventDefault();

    const updateBetForm = document.querySelector("#update-bet-form");
    const form = new FormData(updateBetForm);
    console.log(newUserBet.money_bet);
    form.append("prev_bet", newUserBet.money_bet);
    console.log(form.get("prev_bet"));

    const configObj = {
      method: "PATCH",
      body: form,
    };

    const req = await fetch(`/user_bets/${newUserBet.id}`, configObj);
    const res = await req.json();

    req.ok ? handleOkReq(res) : handleErrorReq(res);
    setBetFormSubmit((betFormSubmit) => !betFormSubmit);

    updateBetForm.reset();
  }
  //handle the delete bet
  async function handleDeleteClick() {
    const configObj = {
      method: "DELETE",
    };

    const req = await fetch(`/user_bets/${newUserBet.id}`, configObj);
    const data = await req.json();
    handleDeleteBet(data);
    setBetFormSubmit((betFormSubmit) => !betFormSubmit);
  }

  //timer useEffect for toggling the update and delete button for the bet
  useEffect(() => {
    if (betFormSubmit) {
      const timer = setTimeout(() => {
        setBetFormSubmit((betFormSubmit) => !betFormSubmit);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [betFormSubmit]);

  //conditional below for when the initla bet has been placed and if it has, allow the user to update and delete the bet
  return (
    <>
      <div className="bets-form-container">
        {!betFormSubmit ? (
          <form id="bet-form" className="bets-form" onSubmit={handleBetSubmit}>
            <label>
              How much money do you want to bet?
              <input type="text" name="money_bet"></input>
            </label>
            <div className="bets-card-btn-container">
              <button className="btn btn-light btn-lg btn-block" type="submit">
                Place Bet
              </button>
            </div>
          </form>
        ) : (
          <>
            <form
              id="update-bet-form"
              className="bets-form"
              onSubmit={handleUpdateBet}
            >
              <label>
                How much do you want to update your bet by?
                <input type="text" name="money_bet"></input>
              </label>
              <div className="bets-card-btn-container">
                <button
                  className="btn btn-light btn-lg btn-block"
                  type="submit"
                >
                  Update Bet
                </button>
              </div>
            </form>
            <div className="bets-card-btn-container">
              <button
                className="btn btn-light btn-lg btn-block"
                onClick={handleDeleteClick}
                type="submit"
              >
                Delete Bet
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default BetsForm;

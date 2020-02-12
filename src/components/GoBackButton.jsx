import React from 'react';
import { useHistory } from "react-router-dom";

function GoBackButton() {
  let history = useHistory();
  function handleClick() {
    history.goBack();
  }
  return <button type="button" onClick={handleClick}>Назад</button>
}

export default GoBackButton;
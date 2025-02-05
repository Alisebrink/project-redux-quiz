import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const playerName = useSelector((state) => state.quiz.userName);
  // having this useSelector to get the currentQuestionIndex value from
  // Redux store to find out the current question index in questions array
  // displaying the information that the user sees at every question
  return (
    <div className="user-info">
      <p>So grab your controller {playerName} and stay aware, lets go!</p>
    </div>
  );
};

export default UserInfo;

import React, { useState, useEffect } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMatch, createUserMatch, deleteUserMatch } from '../../store/match'
import CreateMatchScore from './createMatch'
import UpdateMatchScore from './updateMatch'
import './match.css'

function Match() {
  const dispatch = useDispatch()
  const history = useHistory()
  const currentuser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(getUserMatch())
  }, [dispatch])

  const match = useSelector(state => state.match.match)
  const deleteMatchScore = async () => {
    await dispatch(deleteUserMatch())

    history.push('/');

  }


  if (match) {
      if (!match.score) {
    return (
      <div className='match_q'>
        <h2 className='ul_text'>fill out questions to know your match percentage with others</h2>
        <h4 className='ul_text' className='ul_text_match'> ** for demonstration purpose, no scientific value</h4>
        <h3 className='match_question_base' >On a scale of 1 to 10, with 1 being "not at all" and 10 being "very",</h3>
        <h3 className='match_question' >1. how ORANIZED is your room?</h3>
        <h3 className='match_question'>2. how important is WINNING to you?</h3>
        <h3 className='match_question'>3. Generally speaking, how PATIENT are you?</h3>
        <CreateMatchScore />
      </div>

    )
  }
  }



  return (
    <div className='match_q'>
      <h2 className='ul_text'>fill out questions to know your match percentage with others</h2>
      <h4 className='ul_text' className='ul_text_match'> ** for demonstration purpose, no scientific value</h4>
      <h3 className='match_question_base' >On a scale of 1 to 10, with 1 being "not at all" and 10 being "very",</h3>
      <h3 className='match_question' >1. how ORANIZED is your room?</h3>
      <h3 className='match_question'>2. how important is WINNING to you?</h3>
      <h3 className='match_question'>3. Generally speaking, how PATIENT are you?</h3>
      <div className='updatedelete_match'>
          <UpdateMatchScore />
      <button className='update_button_match' onClick={() => deleteMatchScore()} >delete my score</button>
      </div>

    </div>

  );


}
export default Match;

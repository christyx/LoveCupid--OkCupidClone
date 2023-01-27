import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMatch, createUserMatch } from '../../store/match'
import CreateMatchScore from './createMatch'
import './match.css'

function Match() {
  const dispatch = useDispatch()
  const currentuser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(getUserMatch())
  }, [dispatch])

  const match = useSelector(state => state.match)





if (!match) {
  return (
    <div>
      <h2>fill out questions to know your match percentage with others</h2>
      <h4>for demonstration purpose, no scientific value</h4>
      <h3>On a scale of 1 to 10, with 1 being "not at all" and 10 being "very", how organized is your room now?</h3>
      <h3>On a scale of 1 to 10, with 1 being "not at all" and 10 being "very", how important is winning to you?</h3>
      <h3>On a scale of 1 to 10, with 1 being "not at all" and 10 being "very", how patient are you generally speaking?</h3>
      <CreateMatchScore />
    </div>

  )
}


    return (
<div>
  <h3>i have a score</h3>
</div>

    );


}
export default Match;

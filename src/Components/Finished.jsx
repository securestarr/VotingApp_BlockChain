import React from "react";
import { CheckCircle, Trophy } from 'lucide-react';
import './Finished.css';

// Background image (use the same one from previous designs)
import backgroundImage from './image.jpg';

const Finished = (props) => {
  return (
    <div className="finished-wrapper" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="finished-container">
        <div className="finished-content">
          <div className="finished-header">
            <CheckCircle className="finished-icon" />
            <h1 className="finished-message">Voting Has Concluded</h1>
          </div>
          
          <div className="results-summary">
            <Trophy className="trophy-icon" />
            <div className="winner-details">
              <p className="winner-label">Winning Candidate</p>
              <h2 className="winner-name">{props.winnerName || 'Results Pending'}</h2>
              <p className="winner-votes">
                Total Votes: {props.winnerVotes !== undefined ? props.winnerVotes : 'Calculating'}
              </p>
            </div>
          </div>
          
          <div className="voting-stats">
            <div className="stat-item">
              <span className="stat-label">Total Participants</span>
              <span className="stat-value">{props.totalParticipants || 'N/A'}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Total Votes Cast</span>
              <span className="stat-value">{props.totalVotes || 'N/A'}</span>
            </div>
          </div>
          
          <div className="finished-footer">
            <p>Thank you for participating in this democratic process</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Finished;
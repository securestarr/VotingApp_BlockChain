import React from 'react';
import { Vote, User, Clock, CheckCircle } from 'lucide-react';
import './Connected.css';

// Background images (you'll need to replace these with actual image paths)
import backgroundImage from './image.jpg';
import candidateBackground from './userimage.png';

const Connected = (props) => {
  return (
    <div className="connected-wrapper" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="connected-container">
        <div className="header-section">
          <h1>
            <Vote className="header-icon" />
            Voting Platform
          </h1>
          
          <div className="account-details">
            <User className="account-icon" />
            <div>
              <p className="account-label">Connected Account</p>
              <p className="account-value">{props.account}</p>
            </div>
            <Clock className="time-icon" />
            <div>
              <p className="time-label">Remaining Time</p>
              <p className="time-value">{props.remainingTime} seconds</p>
            </div>
          </div>
        </div>

        {props.showButton ? (
          <div className="vote-status-container">
            <CheckCircle className="vote-status-icon" />
            <p className="vote-status">You have already voted!</p>
          </div>
        ) : (
          <div className="vote-section">
            <input
              type="number"
              placeholder="Enter Candidate Index"
              value={props.number}
              onChange={props.handleNumberChange}
              className="input-field"
            />
            <button className="vote-button" onClick={props.voteFunction}>
              Cast Your Vote
            </button>
          </div>
        )}

        <div className="candidates-section">
          <h2>Candidates</h2>
          <table className="candidates-table">
            <thead>
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Votes</th>
              </tr>
            </thead>
            <tbody>
              {props.candidates.map((candidate, index) => (
                <tr key={index}>
                  <td>{candidate.index}</td>
                  <td className="candidate-cell">
                    <img 
                      src={candidateBackground} 
                      alt={`${candidate.name} profile`} 
                      className="candidate-profile-image" 
                    />
                    {candidate.name}
                  </td>
                  <td>{candidate.voteCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Connected;
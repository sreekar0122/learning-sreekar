import React from 'react';
import { useParams } from 'react-router-dom';
import './Params.css';

const Params: React.FC = () => {
  const { id, message } = useParams<{ id: string; message: string }>();

  return (
    <div className="params-container">
      <h2 className="params-title">Dashboard</h2>
      <p className="params-text">Info: <span className="params-id">{id}</span> - <span className="params-message">{message}</span></p>
    </div>
  );
};

export default Params;

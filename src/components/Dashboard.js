// src/components/Dashboard.js
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const Dashboard = () => {
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, proceed to the dashboard
        history.push('/dashboard');
      } else {
        // User is not signed in, redirect to the sign-in page
        history.push('/');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [history]);

  return (
    <div>
      <h1>Car Inventory Dashboard</h1>
      {/* Rest of the dashboard content */}
    </div>
  );
};

export default Dashboard;


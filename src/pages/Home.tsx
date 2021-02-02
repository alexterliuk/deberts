import React from 'react';
import { useHistory } from 'react-router-dom';

export const Home = () => {
  const { location, replace } = useHistory();
  if (location.pathname !== '/') {
    replace('/');
  }

  return (
    <>
      <h1>Deberts home page</h1>
    </>
  );
};

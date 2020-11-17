import React from 'react';

import MissingPeoplePage from '../containers/MissingPeople/MissingPeoplePage';
import Search from '../components/Search/Search2';

const MissingPeople = () => {
  return (
    <div className="App bg-findMe">
      <Search />
      <MissingPeoplePage />
    </div>
  );
};

export default MissingPeople;

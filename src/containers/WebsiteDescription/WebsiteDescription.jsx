import React from 'react';
import Button from '../../components/Button/Button';
import DescriptionImage from '../../images/undraw_web_search_eetr.svg';
import SearchIcon from '../../images/Path.svg';
import { Link } from 'react-router-dom';

const WebsiteDescription = () => {
  return (
    <div className="flex justify-around flex-col-reverse m-4 sm:m-0 sm:flex-row flex-grow sm-flex-grow-0 ">
      <div className="sm:w-2/5 bg-ahmed-100 content-between text-left">
        <div>
          <h1 className="text-4xl">Lost Someone?</h1>
          <h4 className="text-3xl text-blue-500 font-medium">
            Search here to find him/her
          </h4>
          <p>
            Our website is a service that connects lost people with anyone who
            is looking for them. We have two scenarios on our website of loss,
            the first type is a lost person and the other type is people who are
            found but missing their relatives or anyone that takes care of them.
          </p>
        </div>
        <div className="flex justify-center mt-4 md:justify-end">
          <Link to="/missing_people">
            <Button buttonName="Find Me" icon={SearchIcon} />
          </Link>
        </div>
      </div>
      <div className="sm:w-2/5">
        <img src={DescriptionImage} alt="icon" />
      </div>
    </div>
  );
};

export default WebsiteDescription;

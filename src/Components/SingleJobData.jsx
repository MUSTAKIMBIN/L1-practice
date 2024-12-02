import React from "react";
import { Link } from "react-router-dom";

const SingleJobData = ({ job }) => {
  const { salary, company_name, job_title, location, logo } = job;
  //   console.log(job);

  return (
    <div className="border border-fuchsia-500 rounded-lg p-5 shadow-md shadow-fuchsia-200">
      <div>
        <img src={logo} alt={company_name} />
      </div>
      <p className="text-lg font-bold space-y-2">{job_title}</p>
      <p className="text-sm font-semibold text-gray-600">{company_name}</p>
      <div className="flex justify-between">
        <p className="text-sm fontse text-gray-600">{location}</p>
        <p className="text-sm fontse text-gray-600">{salary}</p>
        {/* <Link to="">
          <Button className="px-5 py-3 rounded-md bg-fuchsia-600">
            See Detail
          </Button>
        </Link> */}
      </div>
    </div>
  );
};

export default SingleJobData;

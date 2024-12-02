import React, { useEffect, useState } from "react";
import SingleJobData from "./SingleJobData";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`jobs.json`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="my-10">
      <div>
        <h3 className="text-xl font-semibold text-center">Feature Job</h3>
        <div>
          {jobs.map((job, idx) => (
            <SingleJobData key={idx} job={job}></SingleJobData>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;

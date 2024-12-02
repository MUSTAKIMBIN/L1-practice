import React, { useEffect, useState } from "react";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  console.log(jobs);
  useEffect(() => {
    fetch(`jobs.json`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="my-10">
      <div>
        <h3 className="text-xl font-semibold text-center">Feature Job</h3>
      </div>
    </div>
  );
};

export default AllJobs;

import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetail = () => {
  const jobs = useLoaderData();
  const { jobId } = useParams();
  const parseId = parseInt(jobId);
  const job = jobs.find((job) => job.id === parseId);
  console.log(job);
  const { salary, job_title, company_name } = job;
  return (
    <div>
      <h1>{company_name}</h1>
      <h1>{job_title}</h1>
      <h1>Salary: {salary}</h1>
      <button>Apply now</button>
    </div>
  );
};

export default JobDetail;

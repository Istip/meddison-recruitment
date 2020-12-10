import React from "react"
import JobFeatured from "./JobFeatured"
import Job from "./Job"

const Jobs = ({ jobs }) => {
  return (
    <>
      <div className='container text-center py-5'>
        <h1 className='display-4 text-danger py-3'>MUNKÁK</h1>

        {jobs.map((job) => (
          <div key={job.sys.id}>
            <JobFeatured jobs={job} />
          </div>
        ))}

        {jobs.map((job) => (
          <div key={job.sys.id}>
            <Job jobs={job} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Jobs

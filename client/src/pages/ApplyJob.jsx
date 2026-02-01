import React, { useContext, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Loading from '../components/Loading'

const ApplyJob = () => {

  const { id } = useParams()
  const { jobs } = useContext(AppContext)
  const [JobData, setJobData] = useState(null)

  const fetchJobs = async () => {
    const data = await jobs.filter(job => job._id === id)
    setJobData(data[0])
    console.log(data[0])
  }

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJobs()
    }
  }, [id, jobs])

  return JobData ? (
    <>
    
    </>
  )
    : (
     <Loading/>
    )
}

export default ApplyJob

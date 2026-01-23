import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const [searchFilter, SetSearchFilter] = useState({
        title: '',
        location: ''
    })

    const [isSearched, setIsSearched] = useState(false)
    const [jobs, setJobs] = useState([])

    // function to fetch the jobs data from assets

    const fetchJobs = async ()=>{
        setJobs(jobsData)
    }

    useEffect(()=>{
        fetchJobs()
    },[])

    const value = {

        searchFilter,SetSearchFilter,
        isSearched,setIsSearched,
        jobs, setJobs
    }

    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)

}


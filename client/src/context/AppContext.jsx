import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [searchFilter, SetSearchFilter] = useState({
        title: '',
        location: ''
    })

    const [isSearched, setIsSearched] = useState(false)
    const [jobs, setJobs] = useState([])

    const [showRecruterLogin, setShowRecruterLogin] = useState(false)

    const [companyToken, setCompanyToken] = useState(null)
    const [companyData, setCompanyData] = useState(null)

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
        jobs, setJobs,
        showRecruterLogin,setShowRecruterLogin,
        companyToken, setCompanyToken,
        companyData, setCompanyData,
        backendUrl
    }

    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}


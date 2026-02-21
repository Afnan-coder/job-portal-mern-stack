// Register a new company
export const registerCompany = async (req, res) => {
    const {name, email, password} = req.body;

    const imageFile = req.file;

    if (!name || !email || !password || !imageFile) {
        return res.json({success: false, message: "Missing details"})
    }

    try {
        
    } catch (error) {
        
    }

}

// Company login
export const loginCompany = async (req, res) => {

}

// Get company data
export const getCompanyData = async (req, res) => {

}

// Post a new Job
export const postJob = async (req, res) => {

}

// Get company job applicants
export const getCompanyJobApplicants = async (req, res) => {

}

// Get company posted jobs
export const getCompanyPostedJobs = async (req, res) => {

}

// Change job applications status
export const changeJobApplicationsStatus = async (req, res) => {

}

// Change job visibility
export const changeVisibility = async (req, res) => {

}
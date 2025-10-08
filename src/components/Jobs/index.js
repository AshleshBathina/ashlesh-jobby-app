import './index.css'
import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Profile from '../Profile'
import FiltersGroup from '../FiltersGroup'

import JobCard from '../JobCard'

import Header from '../Header'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Jobs extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    jobsList: [],
    employmentType: '',
    minimumPackage: '',
    search: '',
  }

  componentDidMount() {
    this.getJobs()
  }

  updateFilter = array => {
    this.setState({employmentType: array.join()}, this.getJobs)
  }

  updateSalary = value => {
    this.setState({minimumPackage: value}, this.getJobs)
  }

  getJobs = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {employmentType, minimumPackage, search} = this.state
    const url = `https://apis.ccbp.in/jobs?employment_type=${employmentType}&minimum_package=${minimumPackage}&search=${search}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()

      const {jobs} = data
      const jobsList = jobs.map(job => ({
        companyLogoUrl: job.company_logo_url,
        employmentType: job.employment_type,
        id: job.id,
        jobDescription: job.job_description,
        location: job.location,
        packagePerAnnum: job.package_per_annum,
        rating: job.rating,
        title: job.title,
      }))

      this.setState({apiStatus: apiStatusConstants.success, jobsList})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onSearchInput = event => {
    this.setState({search: event.target.value})
  }

  onSearchBtn = event => {
    this.getJobs()
  }

  renderJobsList = () => {
    const {jobsList} = this.state

    if (jobsList.length === 0) {
      return (
        <div className="jobs-content">
          <img
            className="jobs-content-image"
            alt="no jobs"
            src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          />
          <h1 className="jobs-content-heading">No Jobs Found</h1>
          <p className="jobs-content-paragraph">
            We could not find any jobs. Try other filters.
          </p>
        </div>
      )
    }
    return (
      <ul className="jobs-list">
        {jobsList.map(job => (
          <JobCard key={job.id} jobDetails={job} />
        ))}
      </ul>
    )
  }

  onClickRetry = () => {
    this.getJobs()
  }

  renderFailureView = () => (
    <div className="jobs-content">
      <img
        className="jobs-content-image"
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
      />
      <h1 className="jobs-content-heading">Oops! Something Went Wrong</h1>
      <p className="jobs-content-paragraph">
        We cannot seem to find the page you are looking for
      </p>
      <button className="retry-button" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  renderJobsContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobsList()

      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return (
          <div className="jobs-content" data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </div>
        )
    }
  }

  render() {
    const {jobsList, search} = this.state
    return (
      <>
        <Header />

        <div className="jobs-route-container">
          <div className="jobs-content-container">
            <div className="left-of-page-container">
              <div className="mobile-search-container">
                <input
                  className="search"
                  value={search}
                  type="search"
                  onChange={this.onSearchInput}
                  placeholder="Search"
                />
                <button
                  className="search-button"
                  type="button"
                  onClick={this.onSearchBtn}
                  data-testid="searchButton"
                >
                  <BsSearch className="search-icon" />
                </button>
              </div>
              <Profile />
              <hr className="h-line" />
              <FiltersGroup
                employmentTypesList={employmentTypesList}
                salaryRangesList={salaryRangesList}
                updateFilter={this.updateFilter}
                updateSalary={this.updateSalary}
              />
            </div>
            <div className="right-of-page-container">
              <div className="search-container">
                <input
                  className="search"
                  value={search}
                  type="search"
                  onChange={this.onSearchInput}
                  placeholder="Search"
                />
                <button
                  className="search-button"
                  type="button"
                  onClick={this.onSearchBtn}
                  data-testid="searchButton"
                >
                  <BsSearch className="search-icon" />
                </button>
              </div>
              <div className="all-jobs-content-container">
                {this.renderJobsContent()}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Jobs

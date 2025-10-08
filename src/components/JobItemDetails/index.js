import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {FaSuitcase, FaExternalLinkAlt} from 'react-icons/fa'
import {IoLocationSharp} from 'react-icons/io5'

import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class JobItemDetails extends Component {
  state = {jobDetails: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getJobDetails()
  }

  getJobDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      const jobDetails = {
        companyLogoUrl: data.job_details.company_logo_url,
        companyWebsiteUrl: data.job_details.company_website_url,
        employmentType: data.job_details.employment_type,
        id: data.job_details.id,
        title: data.job_details.title,
        jobDescription: data.job_details.job_description,
        skills: data.job_details.skills.map(skill => ({
          imageUrl: skill.image_url,
          name: skill.name,
        })),
        lifeAtCompany: {
          description: data.job_details.life_at_company.description,
          imageUrl: data.job_details.life_at_company.image_url,
        },
        location: data.job_details.location,
        packagePerAnnum: data.job_details.package_per_annum,
        rating: data.job_details.rating,
        similarJobs: data.similar_jobs.map(job => ({
          companyLogoUrl: job.company_logo_url,
          employmentType: job.employment_type,
          id: job.id,
          jobDescription: job.job_description,
          location: job.location,
          packagePerAnnum: job.package_per_annum,
          rating: job.rating,
          title: job.title,
        })),
      }

      this.setState({apiStatus: apiStatusConstants.success, jobDetails})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getJobDetails()
  }

  renderFailureView = () => (
    <div className="jobs-content">
      <img
        className="jobs-content-image"
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
      />
      <h1 className="jobs-content-heading">Oops! Something Went Wrong</h1>
      <p className="jobs-content-para">
        We cannot seem to find the page you are looking for
      </p>
      <button className="retry-button" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  render() {
    const {apiStatus, jobDetails} = this.state
    const {
      companyLogoUrl,
      employmentType,
      id,
      title,
      companyWebsiteUrl,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      skills = [],
      lifeAtCompany = {},
      similarJobs = [],
    } = jobDetails

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return (
          <div className="job-details-loader">
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
            </div>
          </div>
        )

      case apiStatusConstants.failure:
        return this.renderFailureView()

      default:
        return (
          <>
            <Header />
            <div className="job-details-container">
              <div className="job-card-content">
                <div className="logo-title-section">
                  <img
                    className="company-logo"
                    src={companyLogoUrl}
                    alt="job details company logo"
                  />
                  <div className="name-rating">
                    <h1 className="company-name">{title}</h1>
                    <p className="rating">⭐ {rating}</p>
                  </div>
                </div>
                <div className="card-details-container">
                  <div className="sub-card-details">
                    <div className="logo-and-label">
                      <IoLocationSharp className="icon" />
                      <p className="icon-label">{location}</p>
                    </div>
                    <div className="logo-and-label">
                      <FaSuitcase className="icon" />
                      <p className="icon-label">{employmentType}</p>
                    </div>
                  </div>
                  <p className="salary-para">{packagePerAnnum}</p>
                </div>
                <hr className="h-line" />
                <div className="bottom-details">
                  <div className="company-div">
                    <h1 className="desc-heading">Description</h1>
                    <a
                      className="link-text"
                      href={companyWebsiteUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit <FaExternalLinkAlt className="link-icon" />
                    </a>
                  </div>
                  <p className="desc">{jobDescription}</p>
                </div>
                <h1 className="skills-heading">Skills</h1>
                <ul className="skills-container">
                  {skills.map(skill => (
                    <li key={skill.name} className="skill-container">
                      <img
                        className="skill-image"
                        src={skill.imageUrl}
                        alt={skill.name}
                      />
                      <p className="skill-name">{skill.name}</p>
                    </li>
                  ))}
                </ul>
                <h1 className="life-heading">Life at Company</h1>
                <div className="life-container">
                  <p className="desc">{lifeAtCompany?.description}</p>
                  <img
                    className="life-image"
                    alt="life at company"
                    src={lifeAtCompany?.imageUrl}
                  />
                </div>
              </div>

              <div className="similar-jobs-container">
                <h1 className="similar-heading">Similar Jobs</h1>
                <ul className="similar-jobs-list">
                  {similarJobs.map(job => (
                    <li key={job.id} className="similar-job">
                      <div className="logo-and-title-container">
                        <img
                          className="company-logo card-img"
                          alt="similar job company logo"
                          src={job.companyLogoUrl}
                        />
                        <div className="name-rating">
                          <h1 className="company-name card">{job.title}</h1>
                          <p className="rating card-para">⭐ {job.rating}</p>
                        </div>
                      </div>

                      <h1 className="desc-heading card-desc">Description</h1>
                      <p className="desc card-desc-para">
                        {job.jobDescription}
                      </p>
                      <div className="sub-card-details">
                        <div className="logo-and-label">
                          <IoLocationSharp className="icon" />
                          <p className="icon-label">{job.location}</p>
                        </div>
                        <div className="logo-and-label">
                          <FaSuitcase className="icon" />
                          <p className="icon-label">{job.employmentType}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )
    }
  }
}

export default JobItemDetails

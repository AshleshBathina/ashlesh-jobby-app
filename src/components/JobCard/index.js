import './index.css'
import {FaSuitcase} from 'react-icons/fa'
import {IoLocationSharp} from 'react-icons/io5'
import {Link} from 'react-router-dom'

const JobCard = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobDetails
  return (
    <li className="job-card">
      <Link className="link-item" to={`/jobs/${id}`}>
        <div className="job-card-content-1">
          <div className="logo-title-section">
            <img
              className="company-logo-1"
              src={companyLogoUrl}
              alt="company logo"
            />
            <div className="name-rating">
              <h1 className="company-name-1">{title}</h1>
              <p className="rating-1">⭐ {rating}</p>
            </div>
          </div>
          <div className="card-details-container">
            <div className="sub-card-details">
              <div className="logo-and-label-1">
                <IoLocationSharp className="icon-1" />
                <p className="icon-label-1">{location}</p>
              </div>
              <div className="logo-and-label-1">
                <FaSuitcase className="icon-1" />
                <p className="icon-label-1">{employmentType}</p>
              </div>
            </div>
            <h1 className="salary-para-1">{packagePerAnnum}</h1>
          </div>
          <hr className="h-line" />
          <div className="bottom-details">
            <h1 className="desc-heading-1">Description</h1>
            <p className="desc-1">{jobDescription}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default JobCard

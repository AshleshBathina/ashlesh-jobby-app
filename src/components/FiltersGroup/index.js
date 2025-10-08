import './index.css'
import {Component} from 'react'

class FiltersGroup extends Component {
  state = {filterArray: []}

  onChangeCheckbox = event => {
    const {updateFilter} = this.props
    const {filterArray} = this.state
    if (filterArray.includes(event.target.value)) {
      const index = filterArray.findIndex(str => str === event.target.value)

      filterArray.splice(index, 1)
      updateFilter(filterArray)
    } else {
      filterArray.push(event.target.value)
      updateFilter(filterArray)
    }
  }

  onClickSalary = event => {
    const {updateSalary} = this.props
    updateSalary(event.target.value)
  }

  render() {
    const {
      employmentTypesList,
      salaryRangesList,
      updateFilter,
      updateSalary,
    } = this.props

    return (
      <>
        <ul className="filter-container">
          <h1 className="filter-heading">Type of Employment</h1>
          {employmentTypesList.map(type => (
            <li key={type.employmentTypeId} className="item-container">
              <input
                className="filter-input"
                type="checkbox"
                id={type.employmentTypeId}
                value={type.employmentTypeId}
                onChange={this.onChangeCheckbox}
              />
              <label className="filter-label" htmlFor={type.employmentTypeId}>
                {type.label}
              </label>
            </li>
          ))}
        </ul>
        <hr className="h-line" />
        <ul className="filter-container">
          <h1 className="filter-heading">Salary Range</h1>
          {salaryRangesList.map(range => (
            <li key={range.salaryRangeId} className="item-container">
              <input
                className="filter-input"
                type="radio"
                id={range.salaryRangeId}
                onClick={this.onClickSalary}
                value={range.salaryRangeId}
                name="salary"
              />
              <label className="filter-label" htmlFor={range.salaryRangeId}>
                {range.label}
              </label>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default FiltersGroup

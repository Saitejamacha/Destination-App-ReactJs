import {Component} from 'react'
import Cities from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchingResults = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    console.log(searchInput)

    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(eachCity =>
      eachCity.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-con">
        <div className="bg-con">
          <h1>Destination search</h1>
          <div className="seach-and-icon">
            <input
              type="search"
              className="input-box"
              placeholder="Search"
              value={searchInput}
              onChange={this.onSearchingResults}
            />
            <img
              alt="search icon"
              className="icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>
        </div>
        <div className="all-cities-con">
          <ul className="order-con">
            {searchResults.map(eachCity => (
              <Cities allCities={eachCity} key={eachCity.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch

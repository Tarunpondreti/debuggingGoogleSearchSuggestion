import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onClickSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickArrowBtn = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const FilterData = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="logo"
          />
          <div className="search-container">
            <div className="search2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="input"
                onChange={this.onClickSearch}
                value={searchInput}
                placeholder="Search Google"
              />
            </div>
            <ul className="item-list">
              {FilterData.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  suggestionDetails={eachItem}
                  onClickArrowBtn={this.onClickArrowBtn}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions

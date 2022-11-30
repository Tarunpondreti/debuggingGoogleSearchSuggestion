// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onClickArrowBtn} = props
  const {id, suggestion} = suggestionDetails
  const onArrowClick = () => {
    onClickArrowBtn(suggestion)
  }
  return (
    <li key={id} className="item">
      <p className="item-name">{suggestion}</p>
      <button className="button" type="button" onClick={onArrowClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}
export default SuggestionItem

// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentItem, toggleStarred} = props
  const {title, date, id, isStarred} = appointmentItem

  const onClickStar = () => {
    toggleStarred(id)
  }
  const starImg = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="list-items-container">
      <div className="card-item-container">
        <div className="heading-time-container">
          <p className="heading">{title}</p>
          <p className="date">
            Date:{format(new Date(date), 'dd MMMM yyyy, EEEE')}
          </p>
        </div>
        <div>
          <button
            type="button"
            testid="star"
            className="favorite-button"
            onClick={onClickStar}
          >
            <img src={starImg} alt="star" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default AppointmentItem

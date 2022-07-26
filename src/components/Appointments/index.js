// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointmentList: [], starredButton: false}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  toggleStarred = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isStarred: !eachItem.isStarred}
        }
        return eachItem
      }),
    }))
  }

  onClickStarredButton = () => {
    this.setState(prevState => ({
      starredButton: !prevState.starredButton,
      appointmentList: prevState.appointmentList.filter(
        eachItem => eachItem.isStarred === true,
      ),
    }))
  }

  getAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  render() {
    const {title, date, appointmentList, starredButton} = this.state

    const buttonClassName = starredButton
      ? 'starred starred-button'
      : 'starred-button'
    return (
      <div className="app-container">
        <div className="appointment-card-container">
          <div className="container">
            <div className="title-heading-container">
              <h1 className="appointment-heading ">Add Appointment</h1>
              <form className="input-elements" onSubmit={this.getAppointment}>
                <label htmlFor="text" className="title-heading">
                  TITLE
                </label>
                <input
                  id="text"
                  type="text"
                  placeholder="Title"
                  className="input-element"
                  onChange={this.onChangeTitle}
                  value={title}
                />
                <label htmlFor="dateTime" className="title-heading">
                  DATE
                </label>
                <input
                  type="date"
                  id="dateTime"
                  onChange={this.onChangeDate}
                  className="input-element"
                  value={date}
                />

                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="image"
              />
            </div>
          </div>
          <div className="starred-button-container">
            <h1 className="appointment-item-main-heading">Appointments</h1>

            <button
              type="button"
              className={buttonClassName}
              onClick={this.onClickStarredButton}
            >
              Starred
            </button>
          </div>
          <ul className="list-appointments-container">
            {appointmentList.map(eachItem => (
              <AppointmentItem
                appointmentItem={eachItem}
                toggleStarred={this.toggleStarred}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments

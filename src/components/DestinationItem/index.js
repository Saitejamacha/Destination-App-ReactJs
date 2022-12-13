import {Component} from 'react'
import './index.css'

class Cities extends Component {
  render() {
    const {allCities} = this.props
    const {imgUrl, name} = allCities
    return (
      <li className="inner-con">
        <img className="images" src={imgUrl} alt={name} />
        <p className="header"> {name} </p>
      </li>
    )
  }
}
export default Cities

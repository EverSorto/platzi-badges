import React from 'react'
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'

class Badge extends React.Component {
  
  render() {

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src="" alt="avatar" />
          <h1>{this.props.firstName}<br /> {this.props.lastName}</h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.aspiration}</h3>
          <div>#Panaderia Sorto</div>
        </div>
        <div className="Badge__footer">

        </div>
      </div>
    )
  }
}

export default Badge;
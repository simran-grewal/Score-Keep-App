import React from 'react';
import PropTypes from 'prop-types';
export default class TitleBar extends React.Component {
  renderSubtitle() {
    if(this.props.createdBy) {
      return <h2 className = "title-bar__subtitle">{this.props.createdBy}</h2>;
    }
  }
    render() {
      return (
        <div className = "title-bar">
          <div className = "wrapper">
            <h1>{this.props.title}</h1>
            {this.renderSubtitle()}
          </div>
        </div>
      );
    }
}

TitleBar.propTypes =  {
    title: PropTypes.string.isRequired,
    createdBy:PropTypes.string.isRequired
};

// TitleBar.defaultProps =  {
//     // title: 'This is Default Prop'
// };

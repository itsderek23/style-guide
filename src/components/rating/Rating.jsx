import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Star from './subcomponents/Star';
import RateCounter from './subcomponents/RateCounter';

const ICO_SIZE = {
  SMALL: 14,
  NORMAL: 16
};

class Rating extends Component {
  state = {
    showActiveText: false
  };

  onClick = index => {
    const {onChange = () => undefined, rate, active} = this.props;

    if (!active) {
      return;
    }
    const ratedStarIndex = index + 1;

    if (ratedStarIndex !== rate) {
      onChange(ratedStarIndex);
    }
  };

  onMouseEnter = () => {
    const {active} = this.props;

    if (!active) {
      return;
    }

    this.setState({showActiveText: true});
  };

  onMouseLeave = () => {
    this.setState({showActiveText: false});
  };

  render() {
    const {metricSize = 5, rate = 0, small, active, className, counterText, activeText} = this.props;
    const {showActiveText} = this.state;
    const ratingClass = classnames('sg-rate-box', {
      'sg-rate-box--small': small,
      'sg-rate-box--active': active
    }, className);

    const starsProps = new Array(metricSize).fill(true).map((dump, index) => ({
      index,
      key: index,
      checked: index < rate,
      size: small ? ICO_SIZE.SMALL : ICO_SIZE.NORMAL,
      onClick: this.onClick,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    }));

    const rateString = rate.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1});

    return (
      <div className={ratingClass}>
        <div className="sg-rate-box__rate">
          {rateString}
        </div>
        <div className="sg-rate-box__stars">
          {starsProps.map(props => <Star key={props.key} {...props} />)}
        </div>
        <RateCounter activeText={activeText} counterText={counterText} showActiveText={showActiveText || rate === 0} />
      </div>
    );
  }
}

Rating.propTypes = {
  small: PropTypes.bool,
  rate: PropTypes.number,
  metricSize: PropTypes.number,
  active: PropTypes.bool,
  onChange: PropTypes.func,
  counterText: PropTypes.string,
  activeText: PropTypes.string,
  className: PropTypes.string
};

export default Rating;
export {Star};

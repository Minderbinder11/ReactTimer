var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {

return (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">React Timer App
        </li>
        <li>
          <IndexLink to="/" activeClassName="active-class">Timer</IndexLink>
        </li>
        <li>
          <Link to="/countdown" activeClassName="active-class">Countdown</Link>
        </li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li className="menu-text">Github Repository</li>
        <li>
          <a href="https://github.com/Minderbinder11" target="_blank">Minderbinder11</a>
        </li>
      </ul>
    </div>
  </div>
);

};

module.exports = Nav;
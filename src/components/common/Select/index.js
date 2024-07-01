import React from 'react';
import { Link } from 'react-router-dom';

const Select = (props) => {
  const { options, styleName } = props;
  const style = `select ${styleName}`;

  return (
    <div className={style}>
      <span className="selected-option">Select</span>
      <span className="select-arrow"></span>
      <div className="select-drop">
        <ul className="select-drop-list">
          <li className="select-list-link"> . . . </li>
          {options.map((option) => (
            <li className="select-list-item" key={option.id}>
              <Link to={option.link} className="select-list-link">
                {option.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Select;

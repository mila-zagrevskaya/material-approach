import React from 'react';

const RadioButton = () => (
       <div className="gender">
        <ul className="gender-list" >
          <li className="gender-list-items">
            <input
              type="radio"
              id="male"
              name="status"
              value="confirm"
              className="radio"
            />
            <label htmlFor="male" className="gender-radio-label">
              Male
            </label>
          </li>
          <li className="gender-list-items">
            <input
              type="radio"
              id="female"
              name="status"
              value="confirm"
              className="radio"
            />
            <label htmlFor="female" className="gender-radio-label">
              Female
            </label>
          </li>
        </ul>
      </div>
);

export default RadioButton;

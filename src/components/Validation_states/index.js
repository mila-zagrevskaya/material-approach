import React from 'react';

import Select from 'components/common/Select';

const selectOptions = [
  {
    title: 'Action',
    link: '/forms/validation_states',
    id: 1
  },
  {
    title: 'Another action',
    link: '/forms/validation_states',
    id: 2
  },
  {
    title: 'Separated link',
    link: '/forms/validation_states',
    id: 3
  }
];

const ValidationStates = () => (
  <div className="validation-states">
    <form className="form">
      <div className="form-group">
        <input type="text" id=" warning" className="form-control validation-input  warning" />
        <label htmlFor=" warning" className="form-label">
          Warning state
        </label>
        <span className="validation-bar"></span>
      </div>
      <div className="form-group">
        <input type="text" id="warning-with-icon" className="form-control warning-with-icon" />
        <label htmlFor="warning-with-icon" className="form-label">
          Warning state with icon
        </label>
        <span className="validation-bar"></span>
        <span className="icon-done"></span>
      </div>
      <div className="form-group">
        <input type="text" id="success-state" className="form-control success-state" />
        <label htmlFor="success-state" className="form-label">
          Success state
        </label>
        <span className="validation-bar"></span>
      </div>
      <div className="form-group">
        <input type="text" id="success-with-icon" className="form-control success-with-icon" />
        <label htmlFor="success-with-icon" className="form-label">
          Success state with icon
        </label>
        <span className="validation-bar"></span>
        <span className="icon-done"></span>
        <span className="help-text"></span>
      </div>
      <div className="form-group">
        <input type="text" id="error-state " className="form-control error-state" />
        <label htmlFor="error-state" className="form-label">
          Error state
        </label>
        <span className="validation-bar"></span>
      </div>
      <div className="form-group">
        <input type="text" id="error-with-icon" className="form-control error-with-icon" />
        <label htmlFor="error-with-icon" className="form-label">
          Error state with icon
        </label>
        <span className="validation-bar"></span>
        <span className="icon-done"></span>
      </div>
    </form>

    <form className="form ">
      <div className="validation form-group">
        <div className="validation-input">
          <input type="text" id="amount" className="form-control amount" />
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <span className="bar"></span>
        </div>
        <div className="validation-input-extend">
          <span className="cent">.00</span>
        </div>
      </div>
      <div className="validation form-group">
        <div className="validation-input-icon">
          <span className="icon-dollar"></span>
        </div>
        <div className="validation-input">
          <input type="text" id="dollars" className="form-control dollars" />
          <label htmlFor="dollars" className="form-label">
            Dollars
          </label>
          <span className="bar"></span>
        </div>
        <div className="validation-input-extend">
          <span className="cent">.00</span>
        </div>
      </div>
      <div className="validation form-group">
        <div className="validation-input-icon">
          <span className="icon-user"></span>
        </div>
        <div className="validation-input">
          <input type="text" id="username" className="form-control username" />
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <span className="bar"></span>
        </div>
      </div>
      <div className="validation form-group">
        <div className="validation-input-icon">
          <input
            type="checkbox"
            name="check"
            id="validation-checkbox"
            className="form-control checkbox"
          />
          <label
            htmlFor="validation-checkbox"
            className="validation-check-name  icon-done "></label>
        </div>

        <div className="validation-input">
          <input type="text" id="checkbox" className="form-control checkbox" />
          <label htmlFor="checkbox" className="form-label">
            Checkbox
          </label>
          <span className="bar"></span>
        </div>
      </div>
      <div className="validation form-group">
        <div className="validation-input">
          <input type="text" id="button" className="form-control" />
          <label htmlFor="button" className="form-label">
            Button
          </label>
          <span className="bar"></span>
        </div>
        <div className="validation-input-extend">
          <button className="validation-button">
            <span className="validation-button-text">go!</span>
          </button>
        </div>
      </div>
      <div className="validation form-group">
        <div className="validation-input">
          <input type="text" id="select" className="form-control" />
          <label htmlFor="select" className="form-label ">
            Select
          </label>
          <span className="bar"></span>
        </div>
        <div className="validation-extend">
          <Select options={selectOptions} styleName="validation-select" />
        </div>
      </div>
    </form>
  </div>
);

export default ValidationStates;

import React from 'react';

import Button from 'components/common/Button';
import RadioButton from './RadioButton';

const InvertedForm = () => (
  <div className="inverted">
    <h2 className="inverted-title">Create an account</h2>
    <form className="inverted-form">
      <RadioButton />
      <div className="names-group">
        <div className="form-group ">
          <input type="text" id="firstName" className="form-control inverted-form-control" />
          <label htmlFor="firstName" className="form-label inverted-form-label">
            First name*
          </label>
          <span className="bar"></span>
        </div>
        <div className="form-group ">
          <input type="text" id="lastName" className="form-control inverted-form-control" />
          <label htmlFor="lastName" className="form-label inverted-form-label">
            Last name*
          </label>
          <span className="bar"></span>
        </div>
      </div>
      <div className="form-group">
        <input type="text" id="userName" className="form-control inverted-form-control" />
        <label htmlFor="userName" className="form-label inverted-form-label">
          Username*
        </label>
        <span className="bar"></span>
      </div>
      <div className="form-group">
        <input type="password" id="password" className="form-control inverted-form-control" />
        <label htmlFor="password" className="form-label inverted-form-label">
          Password*
        </label>
        <span className="bar"></span>
      </div>

      <div className="checkboxes-input">
        <input type="checkbox" name="check" id="sendUpdates" className="checkbox" />
        <label htmlFor="sendUpdates" className="check-name icon-done inverted-check">
          <span>Send me weekly updates</span>
        </label>
      </div>
      <Button text="Create account" className="create-account" />
    </form>
  </div>
);

export default InvertedForm;

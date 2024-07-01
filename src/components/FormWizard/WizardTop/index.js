import React from 'react';

const WizardTop = () => (
  <div className="progressbar-wrapper">
    <ol className="progressbar progressbar-2">
      <li className="active">
        <span className="form-step-icon-title">Location</span>
      </li>

      <li className="active">
        <span className="form-step-icon-title">Address</span>
      </li>

      <li>
        <span className="form-step-icon-title">Setting</span>
      </li>

      <li className="">
        <span className="form-step-icon-title">Confirm</span>
      </li>
    </ol>
  </div>
);

export default WizardTop;

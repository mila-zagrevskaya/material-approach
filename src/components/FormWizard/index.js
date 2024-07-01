import React from 'react';

import WizardTop from 'components/FormWizard/WizardTop';
import ButtonGroups from './ButtonsGroup';

const FormWizard = () => (
  <div className="wizard">
    <WizardTop />
    <form className="wizard-form">
      <div className="form-group">
        <input type="text" id="url" className="form-control wizard-form-control" />
        <label htmlFor="url" className="form-label">
          Url
        </label>
        <span className="bar"></span>

        <span className="wizard-help-text">Starts with http://</span>
      </div>

      <div className="form-group">
        <input type="text" id="range" className="form-control wizard-form-control" />
        <label htmlFor="range" className="form-label">
          Range restriction
        </label>
        <span className="bar"></span>
        <span className="wizard-help-text">Between 5 and 10</span>
      </div>
    </form>
    <ButtonGroups />
  </div>
);

export default FormWizard;

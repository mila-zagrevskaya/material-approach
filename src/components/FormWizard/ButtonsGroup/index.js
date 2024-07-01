import React from 'react';
import Button from 'components/common/Button';

const ButtonGroups = () => (
  <div className="buttons">
    <div className="button-group">
      <Button text="First" className="wizard-button" />
      <Button text="Previous" className="wizard-button" />
    </div>
    <div className="button-group">
      <Button text="Next" className="wizard-button" />
      <Button text="Last" className="wizard-button" />
    </div>
  </div>
);

export default ButtonGroups;

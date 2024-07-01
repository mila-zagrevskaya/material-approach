import React from 'react';

const Checkboxes = () => (
  <div className="checkboxes">
    <div className="checkboxes-design">
      <div className="checkboxes-title">
        <span>Checkboxes</span>
      </div>
      <div className="checkboxes-content">
        <div className="checkboxes-input">
          <input type="checkbox" name="check" id="checkbox1" className="checkbox" />
          <label htmlFor="checkbox1" className="check-name icon-done default-check">
            <span>Default checkbox</span>
          </label>
        </div>
        <div className="checkboxes-input">
          <input type="checkbox" name="check" id="checkbox2" className="checkbox" />
          <label htmlFor="checkbox2" className="check-name icon-done default-check">
            <span>Another default checkbox</span>
          </label>
        </div>
        <div className="checkboxes-input is-disabled">
          <input type="checkbox" name="check" id="checkbox3" className="checkbox" />
          <label htmlFor="checkbox3" className="check-name icon-done disabled">
            <span>Disabled checkbox</span>
          </label>
        </div>
        <div className="checkboxes-input is-disabled">
          <input type="checkbox" name="check" id="checkbox4" className="checkbox" checked />
          <label htmlFor="checkbox4" className="check-name  icon-done disabled-checked">
            <span>Disabled and checked checkbox</span>
          </label>
        </div>
      </div>
    </div>
    <div className="checkboxes-design">
      <div className="checkboxes-title">
        <span>Inline checkboxes</span>
      </div>
      <div className="checkboxes-content inline-checkboxes">
        <div className="checkboxes-input">
          <input type="checkbox" name="check" id="check1" className="checkbox" />
          <label htmlFor="check1" className="check-name  icon-done default-check">
            <span className="number-check">1</span>
          </label>
        </div>
        <div className="checkboxes-input">
          <input type="checkbox" name="check" id="check2" className="checkbox" />
          <label htmlFor="check2" className="check-name  icon-done default-check">
            <span className="number-check">2</span>
          </label>
        </div>

        <div className="checkboxes-input">
          <input type="checkbox" name="check" id="check3" className="checkbox" />
          <label htmlFor="check3" className="check-name  icon-done default-check">
            <span className="number-check">3</span>
          </label>
        </div>
      </div>
    </div>
    <div className="checkboxes-design">
      <div className="checkboxes-title">
        <span>Checkbox styles</span>
      </div>
      <div className="checkboxes-content">
        <ul className="checkbox-styles-list">
          <li className="check-styles-item icon-done ">
            <span className=" check-style-color primary-color"></span>
            <span className="check-styles-name">Primary</span>
          </li>
          <li className="check-styles-item icon-done ">
            <span className=" check-style-color success-color"></span>
            <span className="check-styles-name">Success</span>
          </li>
          <li className="check-styles-item icon-done ">
            <span className=" check-style-color warning-color"></span>
            <span className="check-styles-name">Warning</span>
          </li>
          <li className="check-styles-item icon-done ">
            <span className=" check-style-color danger-color"></span>
            <span className="check-styles-name">Danger</span>
          </li>
          <li className="check-styles-item icon-done ">
            <span className="check-style-color info-color"></span>
            <span className="check-styles-name">Info</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Checkboxes;

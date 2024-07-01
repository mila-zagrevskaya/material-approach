import React from 'react';

import Select from 'components/common/Select';

const selectOptions = [
  {
    title: 'Option 1',
    link: '/forms/text_fields',
    id: 1
  },
  {
    title: 'Option 2',
    link: '/forms/text_fields',
    id: 2
  },
  {
    title: 'Option 3',
    link: '/forms/text_fields',
    id: 3
  },
  {
    title: 'Option 4',
    link: '/forms/text_fields',
    id: 4
  }
];

const Editor = () => (
  <div className="editor">
    <form className="form ">
      <div className="form-group">
        <input type="text" id="text" className="form-control" />
        <label htmlFor="text" className="form-label">
          Regular input
        </label>
        <span className="bar"></span>
      </div>
      <div className="form-group">
        <input type="password" id="password" className="form-control" />
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <span className="bar"></span>
      </div>
      <div className="form-group">
        <input type="text" id="placeholder" className="form-control" />
        <label htmlFor="placeholder" className="form-label">
          Placeholder
        </label>
        <span className="bar"></span>
      </div>
      <div className="form-group">
        <input type="text" id="help-text" className="form-control editor-help-text" />
        <label htmlFor="help-text" className="form-label">
          Input with help text
        </label>
        <span className="bar"></span>

        <span className="help-text"></span>
      </div>
      <div className="form-group">
        <input type="text" id="tooltip" className="form-control" />
        <label htmlFor="tooltip" className="form-label">
          Input with tooltip
        </label>
        <span className="bar"></span>

        <span className="editor-tooltip">Input with tooltip</span>
      </div>
      <div className="form-group">
        <Select options={selectOptions} styleName="form-control editor-select" />
      </div>
      <div className="form-group">
        <textarea
          name=""
          id="textarea"
          className="form-control editor-textarea"
          cols="30"
          rows="4"
        />
        <label htmlFor="textarea" className="form-label">
          Textarea
        </label>
        <span className="bar"></span>
      </div>
      <div className="form-group">
        <input
          type="text"
          id="static-control"
          className="form-control"
          defaultValue="email@example.com"
        />
        <label htmlFor="static-control" className="form-label editor-static-control">
          Static control
        </label>
        <span className="bar"></span>
      </div>
    </form>

    <form className="form ">
      <div className="form-group">
        <input type="text" id="large-input" className="form-control is-large" />
        <label htmlFor="large-input" className="form-label">
          Large input
        </label>
        <span className="bar"></span>
      </div>
      <div className="form-group">
        <input type="text" id="default-input" className="form-control" />
        <label htmlFor="default-input" className="form-label editor-default-input">
          Default input
        </label>
        <span className="bar"></span>
      </div>
      <div className="form-group">
        <input type="text" id="small-input" className="form-control is-small" />
        <label htmlFor="small-input" className="form-label editor-small-input">
          Small input
        </label>
        <span className="bar"></span>
      </div>
    </form>
  </div>
);

export default Editor;

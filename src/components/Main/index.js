import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/common/Header';
import Editor from 'components/TextFields';
import ValidationStates from 'components/Validation_states';
import Checkboxes from 'components/Checkboxes';
import FormWizard from 'components/FormWizard';
import InvertedForm from 'components/InvertedForm';
import Grid from 'components/Grid';

import { FORM } from 'utils';

const MainContent = () => (
  <main className="main-content">
    <Header />
    <div className="content-container">
      <Switch>
        <Redirect exact from="/" to={`${FORM}grid`} />
        <Route exact path={`${FORM}text_fields`} component={Editor} />
        <Route
          exact
          path={`${FORM}validation_states`}
          component={ValidationStates}
        />
        <Route exact path={`${FORM}checkbox`} component={Checkboxes} />
        <Route exact path={`${FORM}form_wizard`} component={FormWizard} />
        <Route exact path={`${FORM}inverted_form`} component={InvertedForm} />
        <Route exact path={`${FORM}grid`} component={Grid} />
      </Switch>
    </div>
  </main>
);

export default MainContent;

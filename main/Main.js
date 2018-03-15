/**
 * Created by Nicholas on 3/14/2018.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Interests from './Interests';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(<Interests/>),
    document.getElementById('mount')
  );
});
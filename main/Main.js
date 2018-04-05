/**
 * Created by Nicholas on 3/14/2018.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MasterCard from './MasterCard'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(MasterCard),
    document.getElementById('mount')
  );
});
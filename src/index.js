console.log('Hello world');
import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
 
document.addEventListener('DOMContentLoaded', function() {
  render(
    <Counter />,
    document.getElementById('mount')
  );
});
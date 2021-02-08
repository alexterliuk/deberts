import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import Navbar from '../Navbar';
import { linksData } from '../../data/nav-links';

describe(`Navbar (desktop view)`, () => {
  const wrapper = mount(
    <Router>
      <Navbar />
    </Router>
  );
  const aTags = wrapper.find('a');

  it(`renders 1 NavLink as logo and N NavLinks as pages when given linksData of N length`, () => {
    expect(aTags.length).toBe(linksData.length + 1);
  });

  it(`logo NavLink has class 'brand-logo'`, () => {
    expect(aTags.get(0).props.className.includes('brand-logo')).toBe(true);
  });

  it(`first page NavLink has class 'active'`, () => {
    expect(aTags.get(1).props.className.includes('active')).toBe(true);
  });

  it(`all page NavLinks have texts according to linksData`, () => {
    linksData.forEach((currData, i) => {
      expect(aTags.get(i + 1).props.children).toBe(currData.text);
    });
  });
});
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import Navbar from '../Navbar';
import { linksData } from '../../data/nav-links';

describe(`Sidebar (in Navbar)`, () => {
  const wrapper = mount(
    <Router>
      <Navbar />
    </Router>
  );

  // click toggle button to show sidebar
  wrapper.find('button').at(0).simulate('click');
  // first are found Sidebar's a tags, then Navbar's ones
  const aTags = wrapper.find('a');

  it(`when Sidebar is shown Navbar has N + 1 + N NavLinks (N for Sidebar, 1 for logo, N for pages) when given linksData of N length`, () => {
    expect(aTags.length).toBe(1 + linksData.length * 2);
  });

  it(`first Sidebar's NavLink has class 'active'`, () => {
    expect(aTags.get(0).props.className.includes('active')).toBe(true);
  });

  it(`all Sidebar's NavLinks have texts according to linksData`, () => {
    linksData.forEach((currData, i) => {
      // children[0] is icon, children[1] is span with text
      expect(aTags.get(i).props.children[1].props.children).toBe(currData.text);
    });
  });
});

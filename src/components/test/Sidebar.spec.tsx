import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import Navbar from '../Navbar';
import { navLinksData as linksData } from '../../data';

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

  it(`all Sidebar's NavLinks have Texts with translationKeys according to linksData`, () => {
    linksData.forEach((currData, i) => {
      const aTagProps = aTags.get(i).props;
      // children[0] is icon, children[1] is SBLinkTextWrapper
      const TextWrapperProps = aTagProps.children[1].props;
      const TextProps = TextWrapperProps.children.props;
      expect(TextProps.translationKey).toBe(currData.translationKey);
    });
  });
});

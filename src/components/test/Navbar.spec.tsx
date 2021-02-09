import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import Navbar from '../Navbar';
import { navLinksData as linksData } from '../../data';

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

  it(`all page NavLinks have Texts with translationKeys according to linksData`, () => {
    linksData.forEach((currData, i) => {
      const aTagProps = aTags.get(i + 1).props;
      const TextProps = aTagProps.children.props;
      expect(TextProps.translationKey).toBe(currData.translationKey);
    });
  });
});

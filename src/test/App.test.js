import React from "react";
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import Footer from "../components/Footer"
import { Builder, By, Key, until } from "selenium-webdriver"
import chrome from 'selenium-webdriver/chrome'
import chromedriver from 'chromedriver'


configure({ adapter: new Adapter() });

describe("Email", function () {
   const driver = new Builder().forBrowser('chrome').build();
   this.timeout(10000);
   it("should have a button", () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.find('button')).to.have.length(2);
   });

   it("should have two inputs, one for name, one for email", () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.find('input')).to.have.length(2);

   });

   it('should simulate click events', () => {

      const wrapper = mount(<Footer />);

      wrapper.find('button').at(0).simulate('click');
      wrapper.find('button').at(1).simulate('click');

   })

   it('should go to nehalist.io and check the title', async () => {

      await driver.get('https://dkallen117.github.io/React-Portfolio');

      const title = await driver.getTitle();
      expect(title).to.eql('Daniels Portfolio');

   });

   after(async () => driver.quit());


   chai.use(chaiEnzyme());
});
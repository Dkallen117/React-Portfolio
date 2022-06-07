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

describe("Footer & Title", function () {
   
   const driver = new Builder().forBrowser('chrome').build();

   it("should have two buttons", () => {
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

   it('should go to my portfolio and check the title', async () => {

      await driver.get('https://dkallen117.github.io/React-Portfolio');

      const title = await driver.getTitle();
      expect(title).to.eql('Daniels Portfolio');

   });

   it('should check social icon links', async () => {

      driver.wait(until.elementLocated(By.id('linkedInLink'))).then(function () {

         let LIL = driver.findElement(By.id('linkedInLink')).getAttribute("href");
         expect(LIL).to.equal('https://www.linkedin.com/in/danielkentonallen/');

      });

      driver.wait(until.elementLocated(By.id('githubLink'))).then(function () {

         let GHL = driver.findElement(By.id('githubLink')).getAttribute("href");
         expect(GHL).to.equal('https://github.com/Dkallen117');

      });

   });

   after(async () => driver.quit());

   chai.use(chaiEnzyme());
});
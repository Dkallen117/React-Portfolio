import React from "react";
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import sinon from 'sinon';
import Footer from "../components/Footer"

configure({ adapter: new Adapter() });

describe("Email", () => {
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

   chai.use(chaiEnzyme());
});
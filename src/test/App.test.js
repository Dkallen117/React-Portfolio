import React from "react";
import { configure, mount, shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from 'sinon';
import Footer from "../components/Footer"

configure({
   adapter: new Adapter()
});

describe("Email", () => {
   it("should have a button", () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.find('button')).to.have.length(1);
   });

   it("should have two inputs, one for name, one for email", () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.find('input')).to.have.length(2);

   });

   it('should simulate click events', () => {
      const onButtonClick = sinon.spy();
      const wrapper = shallow(<Footer onButtonClick={onButtonClick} />);
      wrapper.find('button').simulate('click');
      expect(onButtonClick).to.have.property('callCount', 1);


   })

   chai.use(chaiEnzyme());
});
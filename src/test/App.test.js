import React from "react";
import {configure, shallow} from "enzyme";
import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
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
   const wrapper = shallow(<Footer/>);
   expect(wrapper.find('input')).to.have.length(2);

  })

  chai.use(chaiEnzyme());
});
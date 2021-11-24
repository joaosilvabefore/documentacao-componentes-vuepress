import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import BarRating from "./BarRating.vue";
import Vue from "vue";

describe("Test for Bar Rating Component", () => {
  let wrapper;

  beforeAll( () => {
    wrapper = mount(BarRating, {sync: false});
  });

  it("Checks if the quantity of the bars is correct", async () => {
    await wrapper.setProps({
      value: 1,
      ranges: [
        {
          min: false,
          max: false,
          color: 'bg-danger'
        },
      ]
    });
    
    const barsQuantity = wrapper.findAll('.bar').length;
    expect(barsQuantity).toEqual(1);
  });

  it("Checks if the color of the bar is correct", async () => {
    await wrapper.setProps({
      value: 1,
      ranges: [
        {
          min: false,
          max: false,
          color: 'bg-danger'
        },
      ]
    });
    const activeRange = wrapper.vm.activeRange;
    expect(activeRange.color).toEqual('bg-silver');
  });


});
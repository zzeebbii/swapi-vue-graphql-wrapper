import { shallowMount } from "@vue/test-utils";
import Planets from "@/views/Planets.vue";


describe("Planets.vue", () => {
  it("mounted should set proper data from AJAX response [success]", function() {
    const wrapper = shallowMount(Planets, {
      data() {
        return {
          planets: [
            {
              name: "Test 1",
              diameter: 100,
              climate: "warm"
            },
            {
              name: "Test 2",
              diameter: 150,
              climate: "cold"
            }
          ]
        };
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});

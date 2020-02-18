import { shallowMount } from "@vue/test-utils";
import Planets from "@/views/Planets.vue";


describe("Planets.vue", () => {
  it("mounted should set proper data from AJAX response [success]", function() {
    const wrapper = shallowMount(Planets, {
      data() {
        return {
          planets: [
            {
              id: 1,
              name: "Test 1",
              diameter: 100,
              climate: "warm"
            },
            {
              id: 2,
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

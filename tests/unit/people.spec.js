import { shallowMount } from "@vue/test-utils";
import People from "@/views/People.vue";

describe("People.vue", () => {
  it("should render with data", function() {
    const wrapper = shallowMount(People, {
      data() {
        return {
          people: [
            {
              name: "test",
              height: 192,
              mass: 1000
            }
          ]
        };
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});

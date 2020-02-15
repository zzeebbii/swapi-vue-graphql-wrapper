import { shallowMount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("Card.vue", () => {
  it("renders props when passed", () => {
    const title = "Test Title";
    const info = "Test Info";
    const wrapper = shallowMount(Card, {
      propsData: { title, info }
    });
    expect(wrapper).toMatchSnapshot();
  });
});

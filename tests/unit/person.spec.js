import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import Person from "@/views/Person.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe("Person.vue", () => {
  it("should render with data", function() {
    const PERSON_DATA = {
      name: "Test",
      height: 190,
      mass: 200,
      hair_color: "Black",
      skin_color: "white",
      eye_color: "brown",
      birth_year: "1900",
      gender: "male",
      planet: "Mars",
      url: "http://swapi.co/",
      created: "2010",
      edited: "2012"
    };

    const wrapper = shallowMount(Person, {
      localVue,
      router,
      data() {
        return {
          person: PERSON_DATA
        };
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});

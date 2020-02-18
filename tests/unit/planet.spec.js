import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import Planet from "@/views/Planet.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe("Planet.vue", () => {
  it("should render with data", function() {
    const PLANET_DATA = {
      climate: "Cold",
      created: "1990",
      diameter: 40000,
      edited: "2010",
      gravity: "Normal",
      name: "Mars",
      orbital_period: "2 Year",
      population: 1000000,
      people: [],
      rotation_period: 20000,
      surface_water: "Normal",
      terrain: "Plain",
      url: "http://swapi.co"
    };

    const wrapper = shallowMount(Planet, {
      localVue,
      router,
      data() {
        return {
          planet: PLANET_DATA
        };
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});

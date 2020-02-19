import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";

Vue.config.productionTip = false;

const API_URL = process.env.VUE_APP_API_URL || "http://localhost:4000";

const httpLink = new HttpLink({
  uri: API_URL
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: "loading"
  }
});

new Vue({
  apolloProvider,
  router,
  render: h => h(App)
}).$mount("#app");

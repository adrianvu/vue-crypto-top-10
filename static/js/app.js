let COINMARKETCAP_API_URI = "https://api.coinmarketcap.com";

let UPDATE_INTERVAL = 60 * 1000 * 5;

let app = new Vue({
  el: "#app",
  data: {
    coins: {}
  },
  methods: {

    getCoins: function() {
      let self = this;

      axios.get(COINMARKETCAP_API_URI + "/v2/ticker/?limit=10&&sort=rank")
        .then((resp) => {
          this.coins = resp.data.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    getColor: (num) => {
      return num > 0 ? "color:green;" : "color:red;";
    },
  },

  created: function () {
    this.getCoins();
  }
});

setInterval(() => {
  app.getCoins();
}, UPDATE_INTERVAL);

new Vue({
  el: "#vue-app",
  data: {
    name: "",
    age: ""
  },
  methods: {
    logName: function() {
      console.log("write your name");
    },
    logAge: function() {
      console.log("write your age");
    }
  }
});

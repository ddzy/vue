// demo data
var data = {
  name: "My Tree",
  children: [
    { name: "hello" },
    { name: "wat" },
    {
      name: "child folder",
      children: [
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "wat" }],
        },
        { name: "hello" },
        { name: "wat" },
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "wat" }],
        },
      ],
    },
  ],
};

// define the item component
Vue.component("item", {
  template: "#item-template",
  props: {
    model: Object,
  },
  data: function () {
    return {
      open: false,
    };
  },
  computed: {
    isFolder: function () {
      return this.model.children && this.model.children.length;
    },
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
    changeType: function () {
      if (!this.isFolder) {
        Vue.set(this.model, "children", []);
        this.addChild();
        this.open = true;
      }
    },
    addChild: function () {
      this.model.children.push({
        name: "new stuff",
      });
    },
  },
});

const $data = {
  treeData: data,
};

// boot up the demo
var demo1 = new Vue({
  el: '#demo',
  props: {
    c: {
      type: Number,
      default: 3,
    },
  },
  data: {
    treeData: data,
  },
  provide: {
    a: 1,
    b: 2,
  },
  mounted() {
    console.log('this :>> ', this);
  },
  test: {
    1: 1,
    2: 2,
  },
});

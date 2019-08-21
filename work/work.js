Vue.component('tabs', {
  template: `
        <div class="tabs-wrapper">        
            <div class="tabs">
                <ul class="list pl0 mb0">
                    <li v-for="tab in tabs" class="dib" >
                        <a :href="tab.href" @click="selectTab(tab)" :class="{ 'red bt  ': tab.isActive }" class="db link underline-hover dark-gray f5 f4-ns lh-copy pt2 pb2 pl3 pr3 dib relative z-1">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="tabs-details ">
                <slot></slot>
            </div>
        </div>
    `,

  data() {
    return { tabs: [] };
  },

  created() {
    this.tabs = this.$children;
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name;
      });
    } } });



Vue.component('tab', {
  template: `
        <div v-show="isActive">
            <h1 class="f4 f3-ns mt4">{{ name }}</h1>
            <slot></slot>
        </div>
    `,

  props: {
    name: { required: true },
    selected: { default: false } },


  data() {
    return {
      isActive: false };

  },

  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    } },


  mounted() {
    this.isActive = this.selected;
  } });


new Vue({
  el: '#app' });


Vue.config.devtools = true;
import Vue from 'vue';
import KsVueScrollmagic from 'ks-vue-scrollmagic';

import HelloWorld from '@/components/HelloWorld.vue';

Vue.use(KsVueScrollmagic);


export default {
  mounted () {
    this.$nextTick(this.pinContainerScene)
  },
  data () {
    return {
      panels:[
        {
          title: 'Vue is...',
          body: 'Whatever you want...',
          bgColor: '#29b6f6',
        },
        {
          title: 'panel 2',
          bgColor: '#ef5350',
        },
        {
          title: 'panel 3',
          bgColor: '#ec407a',
        },
        {
          title: 'panel 4',
          bgColor: '#66bb6a',
        }
      ]
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    pinContainerScene() {
      const Length = this.panels.length;
      // Create a new Timeline (equivalent to new TimelineMax())
      const tl = new this.$gsap.TimelineMax();
      for (var i = 0; i < Length; i++) { // For each panel in this.panels array:
        let animFrom, animOutLetters;
        switch (i) { // Set animFrom value, depending on the index i of the item
          case 0:
            break; // First panel is already visible on page load, so no animation
          case 1:
            animFrom = { x: '-100%' }; // Second panel comes from the left
            break;
          case 2:
            animFrom = { x: '100%' }; // Third one comes from the right
            break;
          case 3:
            animFrom = { y: '-100%' }; // Finally, the last one comes from the top
            break;
        }
        if (i !== 0) { // For each panel except the one whom index is 0, create the tween and add it to the tl timeline
          tl.fromTo(`section.panel-${i}`, 1.5, animFrom, { x: '0%', y: '0%', ease: Linear.easeNone })
        }
      }
      // create scene and set its params
      const scene = new this.$scrollmagic.Scene({
        triggerElement: '.pinContainer',
        triggerHook: 'onLeave',
        duration: `${ Length * 100 }%`,
      })
      .setPin('.pinContainer')
      .setTween(tl);
      // Add scene to ScrollMagic controller by emiting an 'addScene' event on vm.$ksvuescr (which is our global event bus)
      this.$ksvuescr.$emit('addScene', 'pinContainerScene', scene); 
      // TAAAAAAADAAAAAAAAAAAA
    },
  },
  destroyed() {
    // Destroy ScrollMagic when our component is removed from DOM
    this.$ksvuescr.$emit('destroy');
  },
};

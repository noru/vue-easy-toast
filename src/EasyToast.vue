<template>
  <div
    :id="mergedOption.id"
    class="et-wrapper"
    :class="clazz"
    :transition="mergedOption.transition"
    v-show="showing"
    >
    <span class="et-content">{{ mergedOption.message }}</span>
  </div>
</template>
<style scoped>
  .et-wrapper {
    background-color: rgba(48, 45, 55, 0.7);
    border-radius: 5px;
    color: white;
    padding: 10px;
    z-index: 9999;
    left: 0;
    right: 0;
    margin: auto;
    width: auto;
    display: inline-block;
    max-width: 350px;
    min-width: 200px;
    text-align: center;
  }
  .et-wrapper {
    position: fixed;
    top: 80%;
  }
  .et-content {
    text-align: center;
  }
  .et-wrapper.et-alert {
    background-color: rgba(189, 19, 19, 0.7);
  }
  .et-wrapper.et-warn {
    background-color: rgba(250, 180 ,90 ,0.9);
  }
  .et-wrapper.et-info {
    background-color: rgba(32, 83, 201, 0.7);
  }
  .fade-transition {
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease;
  }
  .fade-enter,
  .fade-leave {
    opacity: 0;
  }
  .slide-down-transition {
    -webkit-transition: opacity .3s ease, top .3s ease-in;
    transition: opacity .3s ease, top .3s ease-in;
  }
  .slide-down-enter {
    opacity: 0;
    top: -10%;
  }
  .slide-down-leave {
    opacity: 0;
    top: -10%;
  }
  .slide-up-transition {
    -webkit-transition: opacity .3s ease, top .3s ease-in;
    transition: opacity .3s ease, top .3s ease-in;
  }
  .slide-up-enter {
    opacity: 0;
    top: 110%;
  }
  .slide-up-leave {
    opacity: 0;
    top: 110%;
  }
  .slide-left-transition {
    -webkit-transition: opacity .3s ease, left .3s ease-in;
    transition: opacity .3s ease, left .3s ease-in;
  }
  .slide-left-enter {
    opacity: 0;
    left: 110%;
  }
  .slide-left-leave {
    opacity: 0;
    left: 110%;
  }
  .slide-right-transition {
    -webkit-transition: opacity .3s ease, left .3s ease;
    transition: opacity .3s ease, left .3s ease;
  }
  .slide-right-enter {
    opacity: 0;
    left: -1000px;
  }
  .slide-right-leave {
    opacity: 0;
    left: -1000px;
  }

</style>
<script>
  const DEFAULT_OPT = {
    id: 'easy-toast-default',
    className: '',
    parent: 'body',
    transition: 'fade',
    duration: 5000,
    message: ''
  }

  export default {
    data() {
      return {
        queue: [],
        option: {},
        showing: false,
      }
    },
    computed: {
      mergedOption: function() {
        return Object.assign({}, DEFAULT_OPT, this.option)
      },
      clazz: function() {
        let clazz = this.option.className
        return Array.isArray(clazz) ? clazz.join(' ') : String(clazz)
      }
    },
    watch: {
      queue: function() {
        let pending = this.queue.length
        if (pending === 0) {
          return
        }
        let $this = this
        this.showing = true
        this.option = this.queue[0]

        if ((!this.option.mode || this.option.mode === 'override') && pending > 1) {
          clearTimeout(this.timeoutId)
          this.showing = false
          this.timeoutId = null
          this.timeoutId = setTimeout(() => $this.queue.shift())
        } else {
          this.timeoutId = setTimeout(function() {
            $this.showing = false
            $this.timeoutId = null
            setTimeout(() => $this.queue.shift())
          }, $this.mergedOption.duration * pending)
        }
      }
    },
    created() {
      let vm = this.$mount()
      document.querySelector(this.mergedOption.parent).appendChild(vm.$el)
    }
  }
</script>

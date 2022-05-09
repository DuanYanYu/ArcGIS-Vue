import upperCamelCase from 'uppercamelcase';
import {commonConvertMap} from '../utils/convert-helper';
import eventHelper from '../utils/event-helper';
import CONSTANTS from '../utils/constant';

export default {
  props: {
    zIndex: {
      type: Number
    }
  },
  data() {
    return {
      unwatchFns: [],
      handlers: {
        zIndex(value) {
          if (this.setzIndex) {
            this.setzIndex(value);
          }
        }
      }
    };
  },

  mounted() {
    this.$parentComponent = this.$parentComponent || this.$parent.$arcMapComponent;
    if (this.$parentComponent) {
      this.register();
    } else {
      this.$on(CONSTANTS.ARCMAP_READY_EVENT, parentComponent => {
        this.$parentComponent = parentComponent;
        this.register();
      });
    }
  },

  destroyed() {
    if (!this.$arcMapComponent) return;
    this.unregisterEvents();
    this.unwatchFns.forEach(item => item());
    this.unwatchFns = [];
    this.destroyComponent();
  },

  methods: {
    getHandlerFun(prop) {
      if (this.handlers && this.handlers[prop]) {
        return this.handlers[prop];
      }

      return this.$arcMapComponent[`set${upperCamelCase(prop)}`];
    },

    convertProps() {
      const props = {};
      const {$options: {propsData = {}}, propsRedirect} = this;
      return Object.keys(propsData).reduce((res, _key) => {
        let key = _key;
        let propsValue = this.convertSignalProp(key, propsData[key]);
        if (propsValue === undefined) return res;
        if (propsRedirect && propsRedirect[_key]) key = propsRedirect[key];
        props[key] = propsValue;
        return res;
      }, props);
    },

    convertSignalProp(key, sourceData) {
      let converter = '';
      let type = '';

      if (type && converter) {
        return converter(sourceData);
      } else if (this.converters && this.converters[key]) {
        return this.converters[key].call(this, sourceData);
      } else {
        const convertFn = commonConvertMap[key];
        if (convertFn) return convertFn(sourceData);
        return sourceData;
      }
    },

    registerEvents() {
      let $listeners = this.$listeners;
      Object.keys($listeners).forEach(key => {
        eventHelper.addListener(this.$arcMapComponent, key, $listeners[key]);
      });
    },

    unregisterEvents() {
      let $listeners = this.$listeners;
      Object.keys($listeners).forEach(key => {
        eventHelper.removeListener(this.$arcMapComponent, key, $listeners[key]);
      });
    },

    setPropWatchers() {
      const {propsRedirect, $options: {propsData = {}}} = this;

      Object.keys(propsData).forEach(prop => {
        let handleProp = prop;
        if (propsRedirect && propsRedirect[prop]) handleProp = propsRedirect[prop];
        let handleFun = this.getHandlerFun(handleProp);
        if (!handleFun) return;
        let watchOptions = {
          deep: false
        };
        if (Object.prototype.toString.call(propsData[prop]) === '[object Object]') {
          watchOptions.deep = true;
        }
        // watch props
        const unwatch = this.$watch(prop, nv => {
          handleFun.call(this.$arcMapComponent, this.convertSignalProp(prop, nv));
        }, watchOptions);

        // collect watchers for destroyed
        this.unwatchFns.push(unwatch);
      });
    },

    // some prop can not init by initial created methods
    initProps() {
      const props = ['editable', 'zooms'];

      props.forEach(propStr => {
        if (this[propStr] !== undefined) {
          const handleFun = this.getHandlerFun(propStr);
          handleFun && handleFun.call(this.$arcMapComponent, this.convertSignalProp(propStr, this[propStr]));
        }
      });

      this.printReactiveProp();
    },

    /**
     * methods for developing
     * find reactive props
     */
    printReactiveProp() {
      Object.keys(this._props).forEach(k => {
        let fn = this.$arcMapComponent[`set${upperCamelCase(k)}`];
        if (fn) {
          console.log(k);
        }
      });
    },

    register() {
      const res = this.__initComponent && this.__initComponent(this.convertProps());
      if (res && res.then) res.then((instance) => this.registerRest(instance)); // promise
      else this.registerRest(res);
    },

    registerRest(instance) {
      if (!this.$arcMapComponent && instance) this.$arcMapComponent = instance;
      this.registerEvents();
      this.initProps();
      this.setPropWatchers();
      if (this.$listeners.init) {
        this.$emit('init', this.$arcMapComponent, this);
      }
    },

    // helper method
    $$getInstance() {
      return this.$arcMapComponent;
    },
    destroyComponent() {
      this.$arcMapComponent.setMap && this.$arcMapComponent.setMap(null);
      this.$arcMapComponent.close && this.$arcMapComponent.close();
      this.$arcMapComponent.editor && this.$arcMapComponent.editor.close();
    }
  }
};

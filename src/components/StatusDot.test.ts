import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import StatusDot from './StatusDot.vue';

describe('StatusDot tests', () => {
  it('Should display a single span', () => {
    const wrapper = mount(StatusDot);
    expect(wrapper.find('span').exists()).true;
    expect(wrapper.findAll('span').length).equals(1);
  });

  it('should display green when the KPI is in range and not missing', () => {
    const wrapper = mount(StatusDot, {
      props: {
        badKpi: false,
        missingData: false
      }
    });
    const span = wrapper.find('span');
    expect(window.getComputedStyle(span.element).backgroundColor).equals('rgb(159, 233, 168)');
  });

  it('should display red when the KPI is out of range', () => {
    const wrapper = mount(StatusDot, {
      props: {
        badKpi: true,
        missingData: false
      }
    });
    const span = wrapper.find('span');
    expect(window.getComputedStyle(span.element).backgroundColor).equals('rgb(255, 101, 101)');
  });

  it('should display yellow when there are missing data', () => {
    const wrapper = mount(StatusDot, {
      props: {
        badKpi: false,
        missingData: true
      }
    });
    const span = wrapper.find('span');
    expect(window.getComputedStyle(span.element).backgroundColor).equals('rgb(255, 255, 0)');
  });

  it('throws an exception if an invalid prop combination is passed', () => {
    function mountBadProps() {
      mount(StatusDot, {
        props: {
          badKpi: true,
          missingData: true
        }
      });
    }
    expect(mountBadProps).to.throw(Error);
  });
});

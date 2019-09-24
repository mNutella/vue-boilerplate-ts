import { shallowMount } from '@vue/test-utils';
import MainLayout from '@layouts/Main';

describe('Home.vue', () => {
  it('renders props.msg when passed', () => {
    const slotContent = '<p>Hello!</p>';
    const { element } = shallowMount(MainLayout, {
      slots: {
        default: slotContent
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});

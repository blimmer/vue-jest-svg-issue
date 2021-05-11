import { mount } from '@vue/test-utils'
import Demo from './Demo.vue'

test('can click the regular button', async () => {
  const demo = mount(Demo);
  await demo.find('#regular-button').trigger('click');
  expect(demo.find('#regular-button-counter').text()).toEqual('Regular button clicked 1 times')
})

// This test does not pass
test('can click the svg button', async () => {
  const demo = mount(Demo);
  await demo.find('#svg-button').trigger('click');
  expect(demo.find('#svg-button-counter').text()).toEqual('SVG button clicked 1 times')
})

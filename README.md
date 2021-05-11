# vue-jest-svg-issue

This repository demos an issue when trying to interact with a rendered SVG from `jest`.

## Quick Start

- Clone this repo
- Run `npm ci` to install the dependencies
- Run `npm run serve` and visit localhost:8080 on your local machine

You'll see that you can click on and interact with both buttons, as demonstrated in this gif:

![](https://i.imgur.com/3zMZ2ua.gif)

- Now, try running the test suite `npm run test`

You'll see that the regular button is clicked, and its counter incremented, but the SVG button does
not respond to the click.

```console
 FAIL  src/components/Demo.test.js
  ✓ can click the regular button (27 ms)
  ✕ can click the svg button (7 ms)

  ● can click the svg button

    expect(received).toEqual(expected) // deep equality

    Expected: "SVG button clicked 1 times"
    Received: "SVG button clicked 0 times"

      12 |   const demo = mount(Demo);
      13 |   await demo.find('#svg-button').trigger('click');
    > 14 |   expect(demo.find('#svg-button-counter').text()).toEqual('SVG button clicked 1 times')
         |                                                   ^
      15 | })
      16 |

      at Object.<anonymous> (src/components/Demo.test.js:14:51)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.952 s, estimated 2 s
```

## Setup

You can see the source file at [`src/components/Demo.vue`](https://github.com/blimmer/vue-jest-svg-issue/blob/main/src/components/Demo.vue) and the test at [`src/components/Demo.test.js`](https://github.com/blimmer/vue-jest-svg-issue/blob/main/src/components/Demo.test.js).

I'm transforming `svg` files according to the `vue-svg-loader` [documentation instructions](https://vue-svg-loader.js.org/faq.html#how-to-use-this-loader-with-jest).

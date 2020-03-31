# Invoke Netlify Functions locally

This is the code for the Egghead Lesson, "Invoke Netlify Functions locally"
by [Prince Wilson](https://twitter.com/maxcell).

## Prerequisites

You want to make sure that you've installed:

- At least [Node](https://nodejs.org/en/) v12.X
- NPM or Yarn
- [Netlify CLI](https://github.com/netlify/cli)

## Getting Started

If you currently run the project, you will just have a React application.

You will want to make sure you add your Netlify Functions code into your `functions`
folder and a `netlify.toml` indicating where the `functions` folder will be located.

Once you've done that, fire up `netlify dev` in a terminal session. This should both
run your application and setup to host your Netlify Functions. Open up another Terminal
so you can invoke your netlify function with the command `netlify functions:invoke`.
You should see the function's output in that Terminal!

# Starting Point

You can see the beginning version in the [start folder]https://github.com/maxcell/egghead-lessons/tree/master/inv-netlify-functions-locally/start) branch

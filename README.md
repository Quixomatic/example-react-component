example-react
===============================================

## This is an extremely important step:

This happens after running `npm install` on your project directory.

You have to update an existing file in your project's `node_modules` folder. The file in question tells babel how to treat components that use `@quixomatic/ui-renderer-react` as its renderer. Without updating this file the renderer will not work. The path to the file is: `<YOUR_PROJECT_FOLDER>/node_modules/@servicenow/ui-build-component-utils/babel-plugin-jsx-now-pragmatic.js`. You can replace the entire contents of that file with this [gist file](https://gist.github.com/Quixomatic/990d64edf450485ed7a04c50fd366ddd#file-babel-plugin-jsx-now-pragmatic-js).
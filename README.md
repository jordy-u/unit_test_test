# unit_test_test
[![Build Status](https://travis-ci.org/jordy-u/unit_test_test.svg?branch=master)](https://travis-ci.org/jordy-u/unit_test_test)

This repository is for testing how unit testing and CI works with javascript.

## Karma (unit testing)
This project uses the Karma framework and Jasmine as unit-test plugin.

I watched this tutorial to get it running:
https://www.youtube.com/watch?v=QQSySPpzmPI

If you are only interested in unit testing, you can skip the next section (ES-Lint) and skip to Travis CI.
If you want Travis CI to check for errors, add this to `package.json`.

```
scripts": {
     "test": "karma start --single-run"
   },
```

## ES-Lint (syntax checking)
ES-Lint is a standard way to check your code. It does not check functionality, but it checks style.
For exmaple: unused variables/functions, spaces instead of tabs, strings with double or single quotes.

### Setup NPM ES-Lint
Check this link out how to do it: https://eslint.org/docs/user-guide/getting-started
Basicly, you run the setup as follows:

Install ESLint using npm. Install is locally, not globally (I think that is what `--save-dev` means.)
```
npm install eslint --save-dev
```
Run this line to configure everything. The setup will be stored in ".eslintrc.json" (or whatever config-type you selected)
```
npx eslint --init
```
Create a file named `.eslintignore` to ignore files, like a `.gitignore` does.

To check your files, run this in the terminal
```
#Check one file
npx eslint filename.js

#Check all files
npx eslint */*.js
```
If you want Travis CI to check for style errors, add eslint to your `package.json`.

```
scripts": {
     "test": "npx eslint */*.js"
   },
```

### Setup in WebStorm
To setup automatic Lint-checking in Webstorm, do the following:

First, setup ES-Lint as described above. You should now see `.eslintrc.json` in your project files.

I don't know if this works, but try it: Right click on the `.eslintrc` and select 'Apply ESLint Code Style Rules'.
![Alt text](/docs/assets/eslint_setup1.png?raw=true "Apply ESLint Code Style Rules")

After that, enable ES-Lint in your Webstorm-settings.
Go to 'File > Settings...'
![Alt text](/docs/assets/eslint_setup2.png?raw=true "Optional Title")

Now go to 'Languages & Frameworks > Javascript > Code Quality Tools > ESLint' and check
'Automatic ESLint configuration.'
![Alt text](/docs/assets/eslint_setup3.png?raw=true "Optional Title")

That's it! WebStorm now checks for Lint-errors.

### Use Karma and ES-Lint together
**If you are using Karma and ES-Lint together, make sure ES-Lint does not confict with the testing framework!**
I used 'Jasmine' for the Karma testing framework. Jasmine has a plugin that deals with ES-Lint. Install it like this:

Install instructions can be found here: https://www.npmjs.com/package/eslint-plugin-jasmine

Install eslint-plugin-jasmine as a dev-dependency:
```
npm install --save-dev eslint-plugin-jasmine
```

Enable the plugin by adding it to your .eslintrc.
This plugin exports a recommended configuration that enforces good practices.
```
"extends": [
    "eslint:recommended",
    "plugin:jasmine/recommended"
],
"plugins": [
    "jasmine"
],
```
That should be it.

### More ES-Lint options
I don't want errors for unused variables and functions. I define them as warnings.
```
"rules": {
    "no-unused-vars": "warn"
}
```

## Travis CI
Travis CI is a platform that tests your code on GitHub and it is very easy.
It tests both your pushes and pull requests. When all tests are succesful, you get a nice green "build: passing" badge
in the top of your Readme.md. Click the badge to if/why the last test failed.

You need to add a file called '.travis.yml' and connect it to GitHub. I used this tutorial as a refference, even though
it wasn't very good (for my situation). https://www.youtube.com/watch?v=4QjqL9zwKkI

If you want Travis CI to check for **both** style errors and test errors, add both tests to `package.json`.

```
scripts": {
     "test": "karma start --single-run && npx eslint */*.js"
   },
```

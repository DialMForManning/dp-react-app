# Getting Started with DP-React-App

## Contribution Rules

* Two developers must approve before merging contributions
* One developer veto blocks contribution for review & revision
* Small contributions such as version upgrades are encouraged!

## Node.js

If you haven't yet, install [nvm](https://github.com/nvm-sh/nvm)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

This repo verified using Node.js v14.18.0. It may work with other versions, but is not guaranteed to.
To verify your version of node run

```
node -v
// v14.18.0
```

If necessary run

```
nvm install 14
```

and/or

```
nvm use 14
```

## Local Development Setup

In the root directory run the following commands

```
cp .env.sample .env
yarn install
yarn start
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn lint`

Runs eslint.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Pre-configured build and development tools

### [Prettier](https://prettier.io/docs/en/index.html)

### [ESLint](https://eslint.org)

Linting is configured with the following pre-sets

- `react-app`: react specific linter settings from [create-react-app](https://github.com/facebook/create-react-app)
- `prettier`: formats your code via prettier, and then passes the result of that to `eslint --fix`: [prettier-eslint](https://github.com/prettier/prettier-eslint)
- `jsx-a11y/recommended`: checks for recommended accessibility standards according to [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- `airbnb`: checks adherance with the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

### [husky](https://github.com/typicode/husky)

Prior to any commits, husky will run eslint and tests. This configuration can be altered in [./husky/pre-commit](.husky/pre-commit)

### [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
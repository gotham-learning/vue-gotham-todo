# gotham-todo

> Nuxt.js TypeScript project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Deployment

The project contains a few basic scripts for a basic deployment: 

* [`./build.sh`](./build.sh) runs nuxt static site generator and outputs the static site into `dist`
* [`./apply-infrastructure.sh`](./apply-infrastructure.sh) applies the terraform project in `infrastructure`. It creates a basic S3 bucket in website mode
* [`./copy-static-files.sh`](./copy-static-files.sh) copies the files from the `dist` folder to the S3 bucket; Therefore, it requires that the other two scripts ran first.

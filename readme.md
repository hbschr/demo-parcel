# milestones

-   [x] dev server (live reload, module replacement)
-   [x] prod build
-   [x] sass
-   [x] es6
-   [x] react
-   [ ] lint
-   [ ] tests


# notes / steps

## dev server

`npm install -g parcel-bundler`

out of the box dev server w/ live reload:
`parcel src/index.html`
-   compilat goes to `./dist`
-   no auto open in browser, append `--open` to cmd line
-   hot module replacement
-   babel, out of the box!!1!

## prod build

`parcel build src/index.html`
-   compilat goes to `./dist`, configure w/ `--out-dir`
-   includes js file w/ absolute url, configure w/ `--public-url`

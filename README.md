# Pocketbase TypeScript Hooks Template

> This is a template for writing pocketbase hooks in TypeScript

> [!IMPORTANT]
> Make sure you understand how pocketbase hooks work before using this template
> https://pocketbase.io/docs/js-overview/#loading-modules

> The JS engine used in pocketbase is not Node.js, but [goja](https://github.com/dop251/goja), a lightweight JS engine written in Go. Many features are not supported in pocketbase JS environment, e.g. the standard `fetch` won't work, `$http` has to be used instead. Packages from npm might not work, e.g. `uuid` doesn't work, and `lorem-ipsum` does work.
> Please carefully experiment with every package you need before using this template.
> If a package doesn't work, you can try to write it yourself and import it as a module.

## Usage

1. Download `pocketbase` binary to root of project
2. Run `bun dev` to start building process and pocketbase server (changes to `src/lib.ts` are watched)

A `pb_hooks/lib.cjs` should be generated and it will be used imported in `pb_hooks/main.pb.js` as a module.

In the example, I defined a `/lorem` route and a `/ip` route. Try to access them on `http://localhost:8090/` after running `bun dev`.

- The `/lorem` route uses the `lorem-ipsum` package installed from npm.
- The `/ip` route uses pocketbase's `$http` module to fetch the user's IP address.

`pb_hooks/main.pb.js` is the entrypoint of hooks and routes, you need to write it directly in js, and import library like this

```js
const lib = require(`${__hooks}/lib.cjs`);
```

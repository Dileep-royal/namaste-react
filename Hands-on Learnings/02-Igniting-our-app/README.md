# Episode-02 Igniting our App

**Essentials to build Large Scale Applications**

# Things done to make our code Production Ready

We have to do some optimizations and pre-processing before moving code into production.

- Remove comments and logs
- Bundling and Compressing the code
- Minify the files
- Optimize the Image files
- Code Splitting and Chunking
- Organizing and Maintaining the code efficiently

## How to build production ready apps that can scale?

`**Answer**`:

- By using Bundler i.e. `Parcel, Webpack and Vite`.
- These allows you to bundles up the app and make it production ready.
- It collects various pieces of code and assets from different files or modules and `bundles` them together into a single file (or multiple files) that can be `easily served to a web browser` or executed in a runtime environment.

### **Use Cases:**

- **`Vite`:** Best suited for modern, fast-paced development, particularly with frameworks like Vue.js, React, or Svelte.
- **`Webpack`:** Well-suited for larger and more complex projects where a high level of customization is required. It has a mature ecosystem that supports a wide range of use cases.
- **`Parcel`:** Ideal for small to medium-sized projects where simplicity and ease of use are prioritized. It's a good choice for quick prototyping.
- `React app uses Web pack` in background to bundle things

## What is NPM?

- `npm` is a package manager that manages packages related to our app/project.
- Officially don’t have a full form as specified by **`npm`** official documentation.
- `npm` is not an acronym of `Node Package Manager`.
- `npm` (Node Package Manager), is a command line tool to install, create, and share packages of JavaScript code written for Node.js/React.js. There are many open source packages available on `npm`, so before starting a project, take some time to explore so you don't end up recreating the wheel for things like working with dates or fetching data from an `API`.
- `npm` is the world's largest software registry. Open source developers from every continent use `npm` to share and borrow packages, and many organizations use `npm` to manage private development as well.
- `npm` consists of three distinct components:
    - the website
    - the Command Line Interface (CLI)
    - the registry
- Use the *[website](https://npmjs.com/)* to discover packages, set up profiles, and manage other aspects of your `npm` experience. For example, you can set up [organizations](https://www.npmjs.com/features) to manage access to public or private packages.
- The *[CLI](https://docs.npmjs.com/cli/npm)* runs from a terminal, and is how most developers interact with `npm`.
- The *[registry](https://docs.npmjs.com/misc/registry)* is a large public database of JavaScript software and the meta-information surrounding it.
- npm is a package manager for the JavaScript programming language maintained by Microsoft's npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js and is included as a recommended feature in the Node.js installer.
- It consists of a command line client, also called npm, and an [online database](https://en.wikipedia.org/wiki/Online_database) of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc.

## What is package.json ?

- It is a Configuration JSON file for `npm` that configures all the dependency packages.
- The `package.json` file is the center of any Node.js project or `npm` package. It stores information about your project, similar to how the `head` section of an HTML document describes the content of a webpage. It consists of a single JSON object where information is stored in key-value pairs.
- There are only two required fields; `name` and `version`, but it’s good practice to provide additional information about your project that could be useful to future users or maintainers.
- If you look at the file tree of your project, you will find the `package.json` file on the top/root level of the tree.

## Dependencies vs Dev Dependencies

`Dev dependencies` are required while developing a project.

`Dependencies` are the actual require packages used to run projects in during production/development.

## Transitive Dependencies

`Transitive Dependencies` are the dependencies of dependencies i.e. `Parcel` have it’s own specific dependencies and these dependencies have its own dependencies and so on.

All these forms a dependency tree. Because of this many dependencies `node_modules` bloated.

## What is `package-lock.json`?

- Keeps a record of the packages and particular latest versions of this packages.
- Which ensures that it works fine in production as same as
- Keeps track of appropriate package related info that it will use in production.
- Maintains integrity of having same configuration during development and production.

### [**Parcel**](https://parceljs.org/) Bundler do all the things specified below:

- Dev Build
- Local Server
- HMR - Hot Module Replacement - Automatic reload and reflect changes
- HMR uses File Watching Algorithm written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Content Hashing
- Code Splitting
- Differential Bundling - Support older browsers
- Beautiful Diagnostic (Better Error Handling)
- Allows you to host server on HTTPS also
- Tree Shaking - removes unused code
- Different dev and prod bundles

## Browser list

- It ensures the compatibility with different versions of browsers.
- To make our app compatible with older versions of browsers.
- To make our app works perfectly for specific country.

→ Refer more about it here -  [**Click Here**](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)

```json
{
"browserslist":[
    "last 2 versions"
    ]
}
```

## Package versioning in `package.json` :

`npm` follows Semantic Versioning (`SemVer`)

`"package": "MAJOR.MINOR.PATCH"`

The MAJOR version should increment when you make incompatible API changes. The MINOR version should increment when you add functionality in a backwards-compatible manner. The PATCH version should increment when you make backwards-compatible bug fixes. This means that PATCHes are bug fixes and MINORs add new features but neither of them break what worked before. Finally, MAJORs add changes that won’t work with earlier versions.

- **Use the Tilde-Character(`~`) to Always Use the Latest Patch Version of a Dependency**
- **Use the Caret-Character(`^`) to Use the Latest Minor Version of a Dependency**

## How to build development build app using parcel

- Command:
    
    `npx parcel index.html`
    

## How to make your app production ready using parcel

- Building production build
- Command:
    
    `npx parcel build index.html`
    

`npx` used to execute package

## CDN links vs npm to install react

- Using CDN links, we have to make a network call every time and install react. Instead we can simply have it in `node_modules`(locally).
- With CDN links, we have to manually change the version of latest react every time.
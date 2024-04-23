# Episode-01 Inception

# What is React?

## `**React is a JavaScript Library used for building User Interface**`

React is not only used with JSX, it can be used in Pure and Plain Vanilla JavaScript.

JSX makes our lives easy to create Tags and Eliminate `createElement()` headache to create nested HTML Tags.

React is not easy without JSX, this eliminate the use of `createElement()` method.

# Homework:

1. What are CDN links?

**`Answer`:** 

- **CDN stands for Content Delivery Network**
- CDN stores the assets like Audio, Video, Images, Files, etc. in a distributed network of servers, resulting in a faster and more reliable experience.
- CDN used for distributing content efficiently and securely across the internet.
- CDN plays crucial role in Digital Asset Management (DAM)

### **Features:**

- Fastest asset delivery
- Global content accessibility
- Load balancing
- Analytics & reporting
- **Enhanced security -** Most CDNs offer security against DDoS attacks and as well as Web Application Firewall (WAF) capabilities
- Improved user experience

### **Use Case:**

- Used by web developers to enhance performance
- marketers and creative agencies also use CDN links for distributing content from within their DAM
- Software and app downloads
- Digital advertising
- Email marketing
- Mobile apps
- Social media marketing
- E-commerce

2. Can we use react.produnction.min.js CDN links, instead of react.development.js?

**`Answer`:** 

Yes, you can use the production build of React (**`react.production.min.js`**) instead of the development build (**`react.development.js`**) when deploying your React application. In fact, it's recommended to use the production build for production deployments because it's optimized for performance and has smaller file size due to minification and removal of development-specific code.

3. What will render() will do if root HTML Element already contains an HTML Elements

**`Answer`:** 

**Removes everything and injects new or provided HTML Elements.**

4. What is difference between library and framework?

**`Answer`:** 

**React is a bare minimum JavaScript library, because react works independently in some small portions of an app without acting as a full fledged framework.**

**Only re-render the targeted root HTML Element and it’s Children.**

**We can use it on to your existing app and use it only in small portion of your app code.**

By using Framework we have to create everything with the help of the particular framework only.

5. Order of CDN links and files really matter?

**`Answer`:**  Yes, definitely. If we run JavaScript code before the CDN links, we may face error, because `React` and `ReactDOM` isn’t available to execute the JavaScript code. So, we have to invoke CDN links before the actual JavaScript code.

6. What are library and frameworks all about?

`My Thoughts`:

- Designed to achieve a DRY Principle i.e. Reusability.
- Provides with some pre-defined patterns/ ways to fast-pace the development.
- provides APIs or pre-defined methods.
- To ease the maintaining and organizing the codebase.
- Additional features (built things on top of what already exists)

7. What is `crossorigin` attribute that is used in case of importing CDN links?

**`Answer`:** 

The **`crossorigin`** attribute, valid on the `[<audio>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)`, `[<img>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)`, `[<link>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)`, `[<script>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)`, and `[<video>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)` elements, provides support for [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data. Depending on the element, the attribute can be a CORS settings attribute.

The `crossorigin` content attribute on media elements is a CORS settings attribute.

8. What is `react-DOM`

**`Answer`:** 

**`react-dom`** is a package in React that provides DOM-specific methods that are used to render React components to the DOM (Document Object Model) and manage the component lifecycle. It serves as the entry point to the DOM and is responsible for updating the UI in response to changes in the underlying data or state of a React application.

This is used to do different things as follows:

- Rendering React Component
- Updating the DOM
- Event Handling
- Lifecycle Methods
- Server-Side Rendering(SSR)

`react-dom` is a React's virtual DOM representation to actual browser DOM.

# Quote of the day

`Developers without Curiosity and Open-ness to question things is not a good developer`

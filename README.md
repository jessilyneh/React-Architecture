# React-Architecture
Studies about Software Architeture in React - basics of server-side rendering, state management and code splitting

## Server Side Rendering
When your server is the one that renders your React code to HTML instead of the user's browser. Server-side rendering (SSR) is a method of loading your website’s JavaScript on your own server, rather than putting the burden on the user agent, making the content fast and easily accessible when requested. When human users or search engine web crawlers like Googlebot request a page, the content reads as a static HTML page.

It optimizes web pages for social media includes a preview of the page when someone share in twitter, for example.
SSR pages have a much faster load time and a much faster first contentful paint  -  less time your user has to look at a loading screen.
Google gives preferential search rankings to the sites that load the fastest. Faster load times improve user metrics such as session duration and bounce rate; Google algorithms look at these metrics and give you an extra SEO boost.

Runs Javascript bundle, loads data, creates HTML document, sends to client side.

### Disadvantages:
Websites that use JavaScript frameworks need universal libraries to enable SSR; Angular requires Angular Universal, React and Vue need Next.JS.
The burden of rendering your JavaScript content on your own servers, which will increase server maintenance costs.
SSR pages will have a higher TTFB latency and a slower time-to-interactive. Your user will see the content sooner, but if they click on something, nothing will happen.

### TTFB
TTFB (time to first byte) is an external measurement of how long it takes from the initial request to the client receiving the first byte of response data.
Render time and TTFB are critical because they determine how long it takes to display content to users, and for SEO crawlers like Googlebot or Bingbot slow TTFB can impact your ranking in search results.

### Source
[A Deep Dive into Server-Side Rendering (SSR) in JavaScript](https://towardsdev.com/server-side-rendering-srr-in-javascript-a1b7298f0d04)<br/>
[Improving Render Time and TTFB with server-rendered Angular](https://medium.com/shopstyle-engineering/improving-render-time-and-ttfb-in-with-server-rendered-angular-5fe8b87f4cd7)

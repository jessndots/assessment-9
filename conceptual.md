### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  To handle mapping between the URL and pages via browser / React instead of via server

- What is a single page application?
  An app that only uses client-side routing instead of browser routing

- What are some differences between client side and server side routing?
  With server-side routing, users click a link and the browser sends a request to a server, which sends particilar HTML based on the URL requested. 
  With client-side routing, we use JS to manipulate the URL bar and determine what is shown via the browser.

- What are two ways of handling redirects with React Router? When would you use each?
  1. Use the Redirect component after all Route components for if the user tries to go to a URL that either doesn't exist or a URL they don't have access to.
  2. Use the history object when you want to redirect from within JS after some other code runs.

- What are two different ways to handle page-not-found user experiences using React Router? 
  1. Use the NotFound component
  2. Redirect the user to a different page

- How do you grab URL parameters from within a component using React Router?
  The useParams hook stores URL parameters

- What is context in React? When would you use it?
  Context is universal data across an app and all components. Useful to avoid props drilling and avoid repetition

- Describe some differences between class-based components and function components in React.
  Class components were the default for a long time. State was defined in the constructor. Uses the keyword "this". Use lifecycle methods. 
  For functional components, hooks are used to manipulate state, or execute code at certain points in the component lifecycle.


- What are some of the problems that hooks were designed to solve?
  1. Repeating code and logic in the component lifecycle
  2. Sharing logic among components.
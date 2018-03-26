# React_Development_Test_Study

*A study recording of React,Redux and related testing. 
Because this is testing driven study, its content will be more focus on testing.*
> 🎉🎉🎉  [ReactNative_Development_Test_Study](https://github.com/luisxiaomai/ReactNative_Development_Test_Study)

## Table of Contents

  - [Setup](#setup)
  - [Development](#development)
  - [Testing](#testing)
  - [Refs](#refs)
  
## Setup.

  * [Use create react app](https://github.com/facebook/create-react-app)

  * [Create from scratch](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)

## Development

  * [React Basics](https://reactjs.org/docs/hello-world.html)

  * [Redux Basics](https://redux.js.org/basics)

  * [Router Basics](https://reacttraining.com/react-router/web/example/basic)

## Testing

  - **Unit Testing** 

    Unit tests test units of a codebase. In react/redux context, they mostly can be components, action creators, reducers, middlewares... 
    
    Recommend [Jest](https://facebook.github.io/jest) as the testing engine for most unit tests and [Enzyme](https://github.com/airbnb/enzyme) as the component testing utilities.
    
    `Shallow rendering` is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components. Shallow rendering means we render the component one level deep. This way we can make sure we’re only testing the component, our unit, and not a child component several levels down.
   
  - **Interaction Testing** 

    UI is all about interacting with the user. We do this with a bunch of UI elements, such as buttons, links, and input elements. With interaction testing, we need to test if they are working properly. [Enzyme](https://github.com/airbnb/enzyme)
    
    `Full DOM rendering` is ideal for use cases where you have components that may interact with DOM APIs or need to test components that are wrapped in higher order components.

  - **Structural Testing** 

    Focus on the structure of the UI and how it’s laid out. [Jest Snapshot Test](https://facebook.github.io/jest/docs/en/snapshot-testing.html)

  - **CSS/Style Testing**
  
    UI is all about styles (whether they’re simple, beautiful, or even ugly). With style testing, we are evaluating the look and feel of our UI components between code changes. This is a pretty complex subject and usually we do it by comparing images. If we are using inline styles all the way, we can use JEST snapshot testing. But to get even better results, we should consider using tools such as:

    * [BackstopJS](https://github.com/garris/BackstopJS)

    * [PhantomCSS](https://github.com/Huddle/PhantomCSS)

    * [Gemini](https://github.com/gemini-testing/gemini)

    * [Happo](https://github.com/Galooshi/happo)


  - **E2E Testing**

     Runs tests against your application running in a real browser, interacting with it as a user would.

    * [Selenium](https://www.seleniumhq.org/)
    
    * [Nightmare](https://github.com/segmentio/nightmare/)
    
  - **Manual Testing** 

    Since we are building UI for humans, we must also manually test them to see how they feel. Another reason for manual testing is for the better user experience. We should always try to test our UI with the naked eye.
    
  
 ## Refs
  
   * [Jest](https://facebook.github.io/jest/docs/en/getting-started.html)
    
   * [Enzyme](https://github.com/airbnb/enzyme)
       
   * [Tutorial-React-Testing](https://facebook.github.io/jest/docs/en/tutorial-react.html)

   * [Redux Test](https://redux.js.org/recipes/writing-tests)
   
   * [Jest Debug in VS](https://github.com/Microsoft/vscode-recipes/tree/master/debugging-jest-tests)


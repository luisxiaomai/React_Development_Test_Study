# React_Development_Test_Study

*A study recording of React,Redux and related testing*

## Table of Contents

  1. [Setup](#setup)
  1. [Development](#development)
  1. [Testing](#testing)
 
## Setup

  - **Way1** 

    
  **[⬆ back to top](#table-of-contents)**

## Development

  - **xxx** 

    
  **[⬆ back to top](#table-of-contents)**

## Testing

  - **Structural Testing** 

      Focus on the structure of the UI and how it’s laid out. [Jest Snapshot Test](https://facebook.github.io/jest)

  - **Interaction Testing** 

    UI is all about interacting with the user. We do this with a bunch of UI elements, such as buttons, links, and input elements. With interaction testing, we need to test if they are working properly. [Enzyme](https://github.com/airbnb/enzyme)


    `Shallow rendering` is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components.

    `Full DOM rendering` is ideal for use cases where you have components that may interact with DOM APIs or need to test components that are wrapped in higher order components.

  - **CSS/Style Testing**
  
    UI is all about styles (whether they’re simple, beautiful, or even ugly). With style testing, we are evaluating the look and feel of our UI components between code changes. This is a pretty complex subject and usually we do it by comparing images. If we are using inline styles all the way, we can use JEST snapshot testing. But to get even better results, we should consider using tools such as:

    * [BackstopJS](https://github.com/garris/BackstopJS)

    * [PhantomCSS](https://github.com/Huddle/PhantomCSS)

    * [Gemini](https://github.com/gemini-testing/gemini)

    * [Happo](https://github.com/Galooshi/happo)


  - **E2E Automation**

     Runs tests against your application running in a real browser, interacting with it as a user would

    * [Selenium](https://www.seleniumhq.org/)

  - **Manual Test** 

    Since we are building UI for humans, we must also manually test them to see how they feel. Another reason for manual testing is for the better user experience. We should always try to test our UI with the naked eye

  **[⬆ back to top](#table-of-contents)**

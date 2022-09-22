# Final Project

- **RESEARCH 6 - React/Deployment**
- **TJ Clement**
- **Due Sun Jul 19**

<br>

## Thinking in React

Step 1: Break The UI Into A Component Hierarchy
Step 2: Build A Static Version in React
Step 3: Identify The Minimal (but complete) Representation Of UI State
Step 4: Identify Where Your State Should Live
Step 5: Add Inverse Data Flow

## Folder Structure in React Apps

**React’s Recommendations**

- Grouping By Feature or Route
- Grouping by File Type

**Redux’s Recommendations**

- Rails-Style: A separate folder for actions, constants, reducers, containers, and components.
- Ducks: Instead of keeping actions, action types, and reducers in their own separate files per components, these necessities of Redux should be modularized in a way that they can be self contained.

**There is no right solution.**

## Why ESLint?

Linting tools like ESLint allow developers to discover problems with their JavaScript code without executing it.

ESLint is a file in a project repo called .eslintrc with a list of linting rules that runs through the project’s JavaScript code and finds problematic patterns or code that don’t adhere to certain style guidelines set forth by those rules. Then it alerts developers so they can fix it the errors.

## PropTypes & Default Props

You can use prop-types to document the intended types of properties passed to components. React will check props passed to your components against those definitions, and warn in development if they don’t match.

# Deployment

- Use API for backend, and React for frontend.
- Fetch data from api to render in the app.
- API handles all of the data, react app just renders the data.
- Use heroku for deployment.
- stage branch for upcoming release.
- Main branch for production.
  a

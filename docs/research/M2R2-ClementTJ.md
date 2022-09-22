# Final Project

- **RESEARCH 1 - Auth/CI**
- **TJ Clement**
- **Due Mon Aug 8**

<br>

## [Stateful vs Stateless Applications](https://www.wirehive.com/thoughts/understanding-cloud-services-stateful-vs-stateless/)

### Stateful:

If you visit a website and submit a login form correctly, your status is recorded on the server as “logged in”. That means you can access pages and services that your account is permitted to see.

**Cons:**

- Large sites are usually hosted on more than one server, so logging into one server does not log you into all of them.
- Have to authenticate with each server you visit.

### Stateless:

This approach stores your login credentials on your computer, rather than the server. Instead of checking your details against the database and agreeing they're correct, the server generates a unique token. It then sends you the token and the length of time it'll remain valid.

- The token is stored on a separate database, not the server. So, when you decide to view your profile, you send your token alongside the correct URL. And, because the application is stateless, it doesn't matter where the site lives.
- Even if the load balancer sends you to a different server, it'll simply look for the corresponding token, check it against a remote database to see if it's valid and use that as authentication.

## [Auth Principles](https://medium.com/@jcbaey/authentication-in-spa-reactjs-and-vuejs-the-right-way-e4a9ac5cd9a3)

### Security prerequisites

- Encrypted communication (httpS)
  - As authentication uses HTTP headers and exchange high sensitive data (password, access token, …), the communication must be encrypted otherwise someone sniffing the network may be able to grab them.
- Do not use URL query parameters to exchange sensitive data.
  - URL and URL query parameters may end up in the server log, browser logs, browser history: someone could grab the data from there and try to re-use it.
  - Un-trained users may copy and paste a URL with authentication tokens, which could lead to basically unintended session-hijacking.
  - You may run into URL size limitations on browsers or servers
- Prevent brute-force attacks.
  - An attacker may try to infer password, token or username by trying a lot of possibilities
  - Rate limiters should be implemented on your backend server to limit the number of tries and retries.
  - Ban or tarpit users that hit too many server errors (300+, 400+, 500)
  - Do not give clues about your technologies, for instance, clear the X-Powered-Bythat says what kind of server you use in the response header. You may use Helmetjs if you are operating ExpressJS.
- Update your dependencies on a regular basis.
  - To avoid using packages with security issues update your NPM packages.
    > List security breaches:
    > npm audit
    > Upgrade of minor and patch version following your version ranges in package.json:
    > npm outdated
    > npm update
- Add monitoring
  - Monitor your servers to identify abnormal patterns before the incident.

### Authentication

There are 2 main authentication mechanisms to identify a client on a REST API:

- Bearer Token
  - A bearer token is a value that goes into the Authorization header of any HTTP requests. It is not automatically stored anywhere, it has no expiry date and no associated domain. It’s just a value:
  ```
    GET https://www.example.com/api/users
    Authorization: Bearer my_bearer_token_value
  ```
- JWT
  - JWT contains 3 parts:
    - Header: contains metadata about the token
    - Payload: contains the actual data
    - Signature: a digital signature of the token
- Authentication cookie
  - A cookie is a name-value pair, that is stored in a web browser, and that has an expiry date and associated domain. Cookies are stored in the web browser. They can be created by client browser JavaScript:
  ```
  document.cookie = ‘my_cookie_name=my_cookie_value’ // JavaScript
  ```
  - server using an HTTP Response header:
  ```
    Set-Cookie: my_cookie_name=my_cookie_value // HTTP Response Header
  ```
  - The web browser automatically sends cookies with every request to the cookie’s domain.
  ```
    GET https://www.example.com/api/users
    Cookie: my_cookie_name=my_cookie_value
  ```
  - In most (stateful) use cases, a cookie is used to store a session ID. The session ID is managed by the server (creation and timeout). We talk about stateful as the server needs to manage a state on the server whereas a JWT token is stateless.
  - 2 kinds of cookies:
    - Session cookies: The cookie is deleted when the client shuts down because it doesn’t specify an Expires or Max-Age directive. However, web browsers may use session restoring, which makes most session cookies permanent, as if the browser was never closed. The session timeout must be handled on the server side.
    - Permanent cookies: Instead of expiring when the client closes, permanent cookies expire at a specific date (Expires) or after a specific length of time (Max-Age).
- STEP 1: Our SPA application checks if a cookie with the JWT payload exists, if yes, the user has authenticated otherwise the SPA redirect to the /login page. If you are using a single httpOnly cookie, the SPA should make an API call, for instance, //backend/api/me to know who is the current user and get an unauthorized error if the authentication cookie (containing the JWT) is missing or invalid.
- STEP 2 — Option 1: the /login page on the front end asks for user credentials (login/password) and then posts them on the backend API using an AJAX request. The AJAX response will set the authentication cookie with a JWT inside.
- STEP 2 — Option 2: the /login page provides an OpenID authentication using an OAuth flow. For an authorization code grant flow, the /login should redirect the whole browser window to //backend/auth/<provider>. The OAuth flow should be done and the backend should set the authentication cookie with a JWT inside in the last response. It will then redirect the browser to the front end. The SPA will then start again, so go STEP 1 again.

## [Setting up JWT in Redux](https://medium.com/@mikeric/simple-and-secure-auth-using-jwt-and-redux-134e0dd3c0b4)

JSON Web Tokens provide a way to securely transmit claims information between two parties and as such, is a decent candidate for handling user auth claims. This is especially true for API-only backends that power various client applications. The whole process is stateless—the server does not need to remember that you logged in, nor remember the token that it generated for the user. The server essentially signs off on the claims it made in the token and gives it an expiry date.

**Initial state**

```
const initialState = {
  isAuthenticating: false,
  currentUser: null,
  errorMessage: null
}
```

**Reducer**

```
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        …state,
        isAuthenticating: true
      }
    case LOGIN_FAILURE:
      return {
        …state,
        isAuthenticating: false,
        errorMessage: action.errorMessage
      }
    case LOGIN_SUCCESS:
      return {
        isAuthenticating: false,
        currentUser: action.user,
        errorMessage: null
      }
    case LOGOUT:
      return {
        isAuthenticating: false,
        currentUser: null,
        errorMessage: null
      }
    default:
      return state
  }
}
```

**Actions**

- Login

```
import api from 'utils/api'
import jwtDecode from 'jwt-decode'
const login = credentials => dispatch => {
dispatch({ type: LOGIN_REQUEST })
    api.post('/auth', credentials).then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        user: {
          ...jwtDecode(res.data.token),
          authToken: res.data.token
        }
      })
    }).catch(res => {
      dispatch({
        type: LOGIN_FAILURE,
        errorMessage: res.data.error
      })
    })
}
```

- Logout

```
const logout = () => ({
type: LOGOUT
})
```

**Making authenticated requests**

```
import axios from 'axios'
import { API_URL } from 'constants'
const performRequest = (method, url, params, auth) => {
  const body = method === 'get' ? 'params' : 'data'

  const config = {
    method,
    url,
    baseURL: API_URL,
    [body]: params || {}
  }
  if (auth) {
    config.headers = {
      Authorization: `Bearer ${authToken}`
    }
  }

  return axios.request(config)
}
...
```

Storing the token in local or session storage means that if someone were to successfully exploit an XSS vulnerability in your app, they will have access to the user’s token and can then make requests on their behalf. Should you go that route, exercise diligence in making sure your app is void of potential XSS vulnerabilities. In nearly all cases though, you would be better served by a combination of in-memory JWT as used here, plus a silent refresh mechanism using a refresh token stored in a secure HttpOnly cookie in order to not have to keep logging in after the JWT expires.

## [Reset Password Flow](https://www.codementor.io/@olatundegaruba/password-reset-using-jwt-ag2pmlck0)

- A route for the forgot password.
- Configure nodemailer to send email templates
- Create email template
- Method to send password confirmation
- A route to confirm password reset.
- Method to generate and token send to the user’s email.

## [Protecting Routes in React](https://webomnizz.com/react-router-create-protected-route/)

- Protecting routes in React

```
import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
const PrivateRouteHandler = ({ component, auth, ...rest }) => {
      let ComponentToRender = component;
      return (
          <Route
              {...rest}
              render={props =>
                  auth.isAuthenticated ? (
                      <ComponentToRender {...props} />
                  ) : (
                      <Redirect
                          to={{
                              pathname: "/login",
                              state: { from: props.location }
                          }}
                      />
                  )
              }
          />
      );
}
const mapStateToProps = (state) => ({ auth: state.auth });
export const PrivateRoute = withRouter(connect(mapStateToProps)(PrivateRouteHandler));
```

## [Charset](https://www.w3.org/International/questions/qa-what-is-encoding)

- Sets of characters that can be represented in a given encoding.

## [Understanding CI](https://semaphoreci.com/blog/cicd-pipeline)

A CI/CD pipeline automates your software delivery process. The pipeline builds code, runs tests (CI), and safely deploys a new version of the application (CD).

Automated pipelines remove manual errors, provide standardized feedback loops to developers, and enable fast product iterations.

- Having a CI/CD pipeline has more positive effects than only making an existing process a little more efficient:
  - Developers can stay focused on writing code and monitoring the behavior of the system in production.
  - QA and product stakeholders have easy access to the latest, or any, version of the system.
  - Product updates are not stressful.
  - Logs of all code changes, tests and deployments are available for inspection at any time.
  - Rolling back to a previous version in the event of a problem is a routine push-button action.
  - A fast feedback loop helps build an organizational culture of learning and responsibility.

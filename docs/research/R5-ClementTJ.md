# Final Project 

* **RESEARCH 5 - API/DEV**
* **TJ Clement**
* **Due Sun Jul 10**

<br>

## How to Design an API
Keep it simple
- Use nouns and NOT the verbs.
- Use of right HTTP methods:
  - GET — To get a resource or collection of resources.
  - POST — To create a resource or collection of resources.
  - PUT/PATCH — To update the existing resource or collection of resources.
  - DELETE — To delete the existing resource or the collection of resources.
- Use Plurals
  - users, posts, comments, etc. (not user, comment, etc.)
- Use parameters
- Use proper HTTP codes
  - 200 OK — This is most commonly used HTTP code to show that the operation performed is successful.
  - 201 CREATED — This can be used when you use POST method to create a new resource.
  - 202 ACCEPTED — This can be used to acknowledge the request sent to the server.
  - 400 BAD REQUEST — This can be used when client side input validation fails.
  - 401 UNAUTHORIZED / 403 FORBIDDEN— This can be used if the user or the system is not authorised to perform certain operation.
  - 404 NOT FOUND— This can be used if you are looking for certain resource and it is not available in the system.
  - 500 INTERNAL SERVER ERROR — This should never be thrown explicitly but might occur if the system fails.
  - 502 BAD GATEWAY — This can be used if server received an invalid response from the upstream server.
- Versioning
- Use Pagination
  - Use of pagination is a must when you expose an API which might return huge data and if proper load balancing is not done, the a consumer might end up bringing down the service.
- Supported Formats
- Use Proper Error Messages
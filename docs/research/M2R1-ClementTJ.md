# Final Project

- **RESEARCH 1 - rSequelize/Error Handling**
- **TJ Clement**
- **Due Mon Aug 8**

<br>

## [Setting up Sequelize and seeding data](https://itnext.io/overcoming-sequelize-hiccups-24e916ebb4c4)

- Use sequelize init
- Use sequelize-cli
- Set up config with db info
- Create new db with sequelize-cli
- Create models
- Migrate
- Create Seeders
- Seed
- If needed, create new migrations for table changes.
  - Update model to reflect changes.

## [Many-to-Many Relationships in Sequelize](https://khalilstemmler.com/articles/sequelize-tags-junction-pattern/)

- Create a join/junction table to represent the associations.
- Create the associations through sequelize
  - Tag/post example:
    TagPostGenre.belongsTo(models.Post, { foreignKey: 'post_id', targetKey: 'post_id', as: 'Post' });
    TagPostGenre.belongsTo(models.Genre, { foreignKey: 'genre_id', targetKey: 'genre_id', as: 'Genre' });
  - Add the ownership association to each table.
- Use include when getting data.
- Sequelize also gives convience methods for getting data.
  - setGenres(), setPosts(), setTags()
  - getGenres(), getPosts(), getTags()

## [Routes/Controllers](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)

- A route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), a URL path/pattern, and a function that is called to handle that pattern.
- Create a controller for each endpoint.
  - Create a route in each controller for each path.
- Route paths can also be string patterns. String patterns use a form of regular expression syntax to define patterns of endpoints that will be matched. The syntax is listed below (note that the hyphen (-) and the dot (.) are interpreted literally by string-based paths):

  - ? : The endpoint must have 0 or 1 of the preceding character (or group), e.g. a route path of '/ab?cd' will match endpoints acd or abcd.
  - - : The endpoint must have 1 or more of the preceding character (or group), e.g. a route path of '/ab+cd' will match endpoints abcd, abbcd, abbbcd, and so on.
  - - : The endpoint may have an arbitrary string where the * character is placed. E.g. a route path of '/ab*cd' will match endpoints abcd, abXcd, abSOMErandomTEXTcd, and so on.
  - () : Grouping match on a set of characters to perform another operation on, e.g. '/ab(cd)?e' will perform a ?-match on the group (cd)—it will match abe and abcde.

- Creating a catalog/index controller for all of the controllers may be a good idea.

## [Status Codes](https://kinsta.com/blog/http-status-codes/)

- 100s: Informational codes indicating that the request initiated by the browser is continuing.
- 200s: Success codes returned when browser request was received, understood, and processed by the server.
- 300s: Redirection codes returned when a new resource has been substituted for the requested resource.
- 400s: Client error codes indicating that there was a problem with the request.
- 500s: Server error codes indicating that the request was accepted, but that an error on the server prevented the fulfillment of the request.

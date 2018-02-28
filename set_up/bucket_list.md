## Bucket List

Create an application to make a 'bucket list' of countries you want to visit:

- Use the rest countries API to get the countries of the world.
  - set up a basic server.js with a get request to index.html
  - set up a basic app.js inside /src to fetch the restcountries data from the api
  - TODO: call the app from somewhere?

- Add countries to a bucket list.
  - will need a model / models and view / views
- Persist this list using Mongo.
  - needs a database, collection, documents
  - needs CRUD actions inside the model
- Try to split your client code into models and views. Think about the responsibilities of each.


Possible extensions:

- Add a Google Map with markers for countries on the bucket list
- Add more detail to the bucket list items - e.g. landmarks you want to visit or the season you want to visit in. Persist these to Mongo too.
- Style the app

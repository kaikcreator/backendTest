# Backend

This project has been scafolded by using [generator-rest](https://github.com/diegohaz/generator-rest).

See the API's [documentation](DOCS.md).


## How to install
1. Download or clone the source code from the repo
2. Install project dependencies with `npm install`


## Running the code

First, you will need to install and run [MongoDB](https://www.mongodb.com/) in another terminal instance.

```bash
$ mongod
```

Then, run the server in development mode.

```bash
$ npm start
Express server listening on http://0.0.0.0:9000, in development mode
```


## Commands

These commands are available in `package.json`.

```bash
npm test # test using Jest
npm run coverage # test and open the coverage report in the browser
npm run debug # runs node in debug mode
npm run lint # lint using ESLint
npm run dev # run the API in development mode
npm run prod # run the API in production mode
npm run docs # generate API docs
```

## Styleguide
This project is following Javascript Standard Style, but using always semicolons (I feel more comfortable with them).


## Files auto generated and external libs
The project structure has been generated by using [generator-rest](https://github.com/diegohaz/generator-rest).
This has been quite convenient to set up all the ES6, Testing, Linting, and Docs stuff.

You can see the actual code generated by looking at the first commit of the repo.

The auto-generated files are:

```
project/
├─ src/
│  ├─ api/index.js
│  ├─ services/
│  │  ├─ express/index.js
│  │  ├─ mongoose/index.js
│  │  └─ response/
│  │     ├─ index.js
│  │     └─ index.test.js
│  ├─ app.js
│  ├─ config.js
│  └─ index.js
├─ test/
│  └─ setup.js
├─ .babelrc
├─ .env
├─ .env.example
├─ .eslintrc
├─ .gitignore
├─ .travis.yml
├─ .yo-rc.json
├─ package-lock.json
└─ package.json
```

Later I used the **generator rest** command to add a new endpoint. This has added the following files:

```
project/
└─ src/
   └─ api/
      └─ campaigns
         ├─ controller.js
         ├─ index.js
         └─ index.test.js
```



## Deploy

Here is an example on how to deploy to [Heroku](https://heroku.com) using [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line):
```bash
# start a new local git repository
git init

# create a new heroku app
heroku apps:create my-new-app

# add heroku remote reference to the local repository
heroku git:remote --app my-new-app

# add the MongoLab addon to the heroku app
heroku addons:create mongolab

# set the environment variables to the heroku app (see the .env file in root directory)
heroku config:set MASTER_KEY=masterKey JWT_SECRET=jwtSecret

# commit and push the files
git add -A
git commit -m "Initial commit"
git push heroku master

# open the deployed app in the browser
heroku open
```

The second time you deploy, you just need to:

```bash
git add -A
git commit -m "Update code"
git push heroku master
```


## Directory structure


### src/api/

Here is where the API endpoints are defined. Each API has its own folder.

#### src/models/

Here is where the Mongoose schema and models are defined. Each high order model has its own folder, which can include several models used as subdocuments.

#### src/api/some-endpoint/controller.js

This is the API controller file. It defines the main router middlewares which use the API model.

#### src/api/some-endpoint/index.js

This is the entry file of the API. It defines the routes using [Querymen](https://www.npmjs.com/package/querymen)) and the middlewares defined in the `some-endpoint/controller.js` file.

### services/

Here you can find `helpers`, `libraries` and other types of modules used by the server.

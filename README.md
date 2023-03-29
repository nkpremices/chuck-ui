# SovTech Fullstack Engineer Test (Chuck)

## Project development steps/requirements

### Steps(Requirements)
* TypeScript
* React (LTS)
* Apollo Client (react-apollo)
* Apollo Server
* NodeJS (LTS)
* Centralised state management (Redux/Context API ) any state management framework/tool can be used
* Centralised store must be immutable and make use of the Action/Reducer pattern
* Can use a boilerplate of your choice
* Solution should be checked into a public Github repo. Additionally the README should outline all necessary steps required to bootstrap the code
* Solution can be implemented in CodeSandbox or similar

## Getting started

### 1. Installation steps

* Clone the repo using

```git clone https://github.com/nkpremices/sov-test-server.git```

* Install dependecies by runing

```yarn```

* Create a ```.env``` file at the root of the project and fill out the variables you can find in ```.env.example``` file
* You can now run ```yarn build``` and then ```yarn preview``` to preview the app

#### 2. Environment Variables

* ```VITE_GRAPHQL_URL```: The url of the graphql server

### 3. Steps for running tests

* After installation and previewing the app, run ```yarn  test``` 

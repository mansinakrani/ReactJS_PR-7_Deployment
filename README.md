# Practical-7 :  Deployment

## Getting Started

Clone this repo and install dependencies with

```bash
  npm install
```

## Starting The Dev Server

To start the server and start hacking, run

```bash
npm start
```
## Description
# Customizing Environment Variables for build Environments

We can create an arbitrary build environment by creating a custom .env file and loading it using env-cmd.

For example, to create a build environment :

1. Create a file called .env
2. Set environment variables as we would any other .env file
3. Install env-cmd 
    $ npm install env-cmd --save
4. Add a new script to your package.json, building with new environment:

{
  "scripts": {
    "build": "env-cmd -f .env npm run build"
  }
}

OR

{
  "scripts": {
    "build": "react-scripts build",
    "build:staging": "REACT_APP_STAGE=staging npm run build",
    "build:production": "env-cmd -f .env.production npm run build",
    ...
  }
}


We can run npm run build to build with the staging environment. We can specify other environments in the same way.

NOTE :-
Entry for .env.staging and .env.production (.env files for each environment) should be added to the revision control ignore list (e.g. .gitignore) as it should not be checked in.

## Demo 
[Image](https://github.com/mansinakrani/ReactJS_PR-7_Deployment/blob/f753d455fb5166c12081dbc1ff324b05325a7f05/practical-7_demo.png)

# Website URLs
Deployed on different platforms :-
[Firebase CLI](https://react-mn-pr-7.web.app/)
[netlify](https://eager-nobel-b52ce7.netlify.app/)

## Repo Link
[Practical - 7](https://github.com/mansinakrani/ReactJS_PR-7_Deployment.git)

## PR Link
[Pull-Request](https://github.com/mansinakrani/ReactJS_PR-7_Deployment/pull/1#issue-1163871955) 
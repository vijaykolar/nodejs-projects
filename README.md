# nodejs-projects

## 1. Modules

A module in Node.js is a logical encapsulation of code in a single unit. It's always a good
programming practice to always segregate code in such a way that makes it more manageable
and maintainable for future purposes.

## 2. Below are some of the popular modules

1. Express framework
2. Socket.io
3. Pug
4. MongoDB etc.

In order to use modules in a Node.js application, they first need to be installed using the Node
package manager(NPM).

`npm install express`

## 3. What is the package.json file

The "package.json" file is used to hold the metadata about a particular project. This
information provides the Node package manager the necessary information to understand how
the project should be handled along with its dependencies.

The package.json files contains information such as the project description, the version of the
project in a particular distribution, license information, and configuration data.

The package.json file is normally located at the root directory of a Node.js project.

## What is Express.js

Express.js is a Node js web application server framework, which is specifically designed for
building single-page, multi-page, and hybrid web applications.

The MERN is a free and open-source JavaScript software stack for building dynamic web sites
and web applications which has the following components;

1. MongoDB - The standard NoSQL database
2. Express.js - The default web applications framework
3. React.js - The JavaScript library used for web applications
4. Node.js - Framework used for scalable server-side and networking applications.

The Express.js framework makes it very easy to develop an application which can be used to
handle multiple types of requests like the GET, PUT, PATCH, POST and DELETE requests.

## What are Routes

Routing refers for determining the way in which an application responds to a client request to
a particular endpoint.
For example, a client can make a GET, POST, PUT or DELETE http request for various URL's
such as the one's shown below;

1. http://localhost:3000/api/books
2. http://localhost:3000/api/students

The general syntax for a route is shown below
`app.METHOD(PATH, HANDLER)`

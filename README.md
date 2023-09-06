# The Tech Blog : (MVC) Model-View-Controller

## My Task

Developing Tech is not only just about thing things that can be created, it can very much be about the things that can be said about it as well. Developers devote many hours and days implementing their creative ideas into applications and debugging processes. It is important to note that outside of this time spent on code bases many developers read and write about technical concepts, recent advancements, and new technologies. It can be overwhelming to sort through the thousands of results that come back from just a simple google search in hopes of finding concepts or tutorials on any level.

My task was to build a CMS-style blog which would be considered comparable to a Wordpress site, where developers can publish original blog posts and comment on pre-existing ones as well. I have built this site based upon the tools I have learned on the subject and it is now deployed to Heroku. My app follows the MVC paradigm in its architectural structure, using Handlebars.js as the language template, Sequelize as the ORM, and express-session npm package for the authentication.

## User Story

```md
AS A developer who not only develops but as consumes and produces original proof of concept on the subject as well
I WANT a CMS-style blog site
SO THAT I can publish these concepts in article and blog form and interact with other who want the same
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I land on the site as a first time visitor
THEN I am presented the homepage where other developers' blog posts are viewable if there are pre-existing entries; in navigation bar I can see a homepage link as well as a login link
```

## Mock-Up

The following animation demonstrates the example application's functionality that I have used for guidance:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./Assets/14-mvc-homework-demo-01.gif) 

## Getting Started

My application’s folder structure follows the Model-View-Controller paradigm as instructed. I have used the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for my Views, the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for my Models, and created an Express.js API for my Controllers.

I have also included [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Important**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When the user is idle on the site for more than a set time, the cookie will expire and they are logged out and required to log in again to start a new session. This is the default behavior and this is due to the nature of implementing the npm package.
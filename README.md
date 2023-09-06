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
THEN I am presented the homepage where other developers' blog posts are viewable if there are pre-existing entries; in the navigation bar I can see a homepage link as well as a login link
WHEN I click the homepage button 
THEN I remain on the homepage
WHEN I click on the log in button
THEN I am brought to a page where I am prompted to either log in or sign up
WHEN I choose the login in form without already being signed up 
THEN an alert appears indicated a bad request
WHEN I choose to fill out the sign up form 
THEN I am logged in after providing a name, email, and password
WHEN I am logged in I am now presented with a dashboard that is labeled as profile
THEN I am given a form where I can create a title as well as a description for all of the content I want to discuss
WHEN I have filled out this form
THEN I press the create button
WHEN I press the create button 
THEN the title of my new blog post appears in the column on the right side and is displayed as a button alongside a delete button as well
WHEN I click on the title 
THEN I am brought to a single post page where the content that was entered into the description box is displayed
WHEN I view this single post page I see not only the blog post and the date it was created
THEN I also see a form to enter comments about the post
WHEN I enter in a comment and click the submit button
THEN the comment appears in the column on the right side
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to re-enter the email and password that I used to sign up
WHEN I am signed in to the site 
THEN I see the homepage, profile, and logout buttons in the navigation bar
WHEN I click on the homepage button I am taken to the homepage where not oly are pre-existing blogs viewable but also the newly created posts that I have entered as well
THEN when I click on the existing blog post I am presented with the post title, contents, post creator's name, date created, and the ability to leave a comment
WHEN I click on the profile button I am directed to the dashboard page 
THEN I can create new posts, view my previous posts being stored, and delete posts as well
WHEN I click the delete button the blog post is removed from the page and the page reflects those changes
WHEN I am idle for a set period of time my session is logged out and to continue creating, commenting, or viewing dashboard I must log in again
```

## Mock-Up

The following animation demonstrates the example application's functionality that I have used for guidance:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./Assets/14-mvc-homework-demo-01.gif) 

## Getting Started

My application’s folder structure follows the Model-View-Controller paradigm as instructed. I have used the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for my Views, the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for my Models, and created an Express.js API for my Controllers.

I have also included [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Important**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When the user is idle on the site for more than a set time, the cookie will expire and they are logged out and required to log in again to start a new session. This is the default behavior and this is due to the nature of implementing the npm package.


## Review

This section is here to highlight the required elements needed for review:

* My application which has been deployed though the usage of Heroku:

Refer to this [Heroku Deployed Application]() to view the functionality of this creation
    

* The URL to my TechBlog GitHub repository, with a unique name and this README to describe the project:

Refer to this link [GitHub Repository](https://github.com/TheKhalidGibson/TechBlog) to view and explore the GitHub repo for this assignment


## Screenshots
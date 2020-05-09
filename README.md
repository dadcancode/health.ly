# health.ly
Weight tracker

## Concept
Weight loss is one of the most common self-improvement goals and is also one of the topics that has the most misconceptions about how to achieve it.  Tracking data and looking at your progress helps maintain motivation and drive as well as notice trends and correct bad habbits.  Healthly is a simple easy to use and intuitive app that allows users to log their weight and track their progress towards their goal.

## Technology
..* HTML
..* CSS
..* Bootstrap
..* JavaScript
..* React
..* Node
..* Mongoose
..* Express
..* Mongodb

## Approach
Initially I planned on having two collections, users and logs, but decided it might be easier to have one collection and an array of logs.  After developing the routes I realized that updating objects embedded in an array of a document was problematic.  I went back to my original gameplan and employed two different schemas and used included an "owner" property for every log.

## Challenges
It was tricky on some of the routes to make sure I was passing all the right info to the route and creating a header that changed dynamically with the current logged in user.  I was able to by passing in the userId as a property of the Default view

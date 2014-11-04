# Behavior Drill - Grocery List

### Learning Competencies

- Use OO principles and best practices in Javascript
- Utilize third-party libraries and resources in a client-side application
- Navigate jQueryUI docs to understand how `draggable` and `droppable` work

### Summary

It's time to work on your Object-Oriented Javascript.  In this challenge, you'll build a simple drag-and-drop grocery list application.

To successfully complete this challenge, you should be familiar with the following concepts and library features:

- [Object-Oriented Programming in JavaScript](https://developer.mozilla.org/en-US/docs/JavaScript/Introduction_to_Object-Oriented_JavaScript)
- The jQuery UI [draggable()](http://api.jqueryui.com/draggable/) and [droppable()](http://api.jqueryui.com/droppable/) functions

Your job is to figure out how to model each of the components of this application and to provide an elegant, object-oriented solution.

When you are finished, the behavior should work as in [this video](http://www.youtube.com/embed/762iZEIsvVU?rel=0).

Notice the features in play here:

- When an item from the Store List is dragged, the original element does not change. You could say it uses a *clone*.
- The same item can be dragged to the Grocery List multiple times.
- When an item is added to the Grocery List, the total price is updated to reflect the new changes.

### Objectives

Focus on writing solid OO JS in this challenge. Make sure your code isn't too tightly coupled to a particular DOM layout.

### Model Items and Lists

As you approach this problem, you should be thinking about how to model the components as objects. What are the essential features of each object, and how do they relate to other objects? What properties does each object have? How will you connect the object model with the view layer (i.e. what is being displayed in the `document`)?

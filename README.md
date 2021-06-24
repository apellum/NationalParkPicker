# National Park Picker
## Overview about the project.
National Park Picker is an app dedicated to marking items off your bucket list. National Parks are some of the most beautiful places in the United States and millions of people visit them each year. People like to check things off of lists like when they go to the grocery store. This is just as true for destinations. With National Park Picker, users are able to mark that they have been to specific National Parks. It uses an integrated google API for the map. In the comment section, it uses a JSON server. The comment section gives you the ability to leave a comment with your name and date visited the national park. You can also view all the comments that have been left too!

## How to install
- Fork and clone over repo
- Make sure you have json-server installed via 'npm install -g json-server'

## How to use it
- Open index.html in the browser
- Run 'json-server --watch db.json' in the terminal

## Functionality in the browser
Hover your mouse icon over one of the tree markers (noting location). When you do this, you should see the name of the National Park. If you click on the tree icon, it should change the image to one that is a filled in tree (this notates that you have visited this national park). Another feature is to leave a comment. You can leave a comment by adding your name, choosing the date, adding your comment, and clicking the "Add your comment" button.
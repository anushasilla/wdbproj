const express = require('express');

const app = express();

var port = process.env.PORT || 8080;

var router = express.Router();

const bodyParser = require('body-parser');

//const activities_list = require('./data/activities.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('/Users/anushee22/Desktop/wdbfinal/forserver'));

http://localhost:8080/home?user_location=&user_time=night&user_people=friends
router.route('/home')
    .get((req, res) => {
        res.sendFile('/Users/anushee22/Desktop/wdbfinal/forserver/landing.html');
    })



router.route('/activitysearch')
  .get((req, res) => {
    res.json({ message: 'Suggested activities.'});
  })


// All HTTP methods under the /activitysearch/:activity_name URL.
// The /activitysearch/:activity_name is a parameter within the URL that specifies a particular activity.
router.route('/activitysearch/:activity_name')
  //This GET method is used to get the content from a specific activity.
  .get((req, res) => {
    res.json({
        message: ('Get the content from an activity.' + req.params.name), //+ " - " + req.body.content//),
        name: req.params.name,
        //content: req.body.content,
    });
  })

// router.route('/api/activities')
//     .get((req, res) => {
//         res.json(activities_list);
// });

router.route('/activitysearch/:todo_id')
    // This GET method is used to get the content from a specific todo.
    .get((req, res) => {
        res.json({ message: 'Get the content from a todo.'});
    })
    // We use PUT method to update a todo's content.
    .put((req, res) => {
        res.json({
            message: ('Update the todo: ' + req.params.todo_id + " - " + req.body.content),
            todo_id: req.params.todo_id,
            content: req.body.content,
        });
    })
    // DELETE method is used to delete a todo.
    .delete((req, res) => {
        res.json({ message: 'Delete a todo.' });
    })

// if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
//         app.use(express.static('/Users/anushee22/Desktop/wdbfinal/daycation/public'));
//
//         app.get((req, res) => {
//             res.sendFile('/Users/anushee22/Desktop/wdbfinal/daycation/public/landing.html')});
// };




app.use('/', router); // API Root url at: http://localhost:8080/home

app.listen(port);
console.log('Server listening on port ' + port);

const express = require('express');

const app = express();

var port = process.env.PORT || 8080;

var router = express.Router();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// The method of the root url. Be friendly and welcome our user :)
router.get('/', function(req, res) {
    res.json({ message: 'Start planning your day.' });
});

// All HTTP methods under the /activitysearch URL.
router.route('/activitysearch')
  // This GET method is in charge of returning all suggested activities within a distance.
  .get((req, res) => {
    res.json({ message: 'Suggested activities.'});
  })


// All HTTP methods under the /activitysearch/:activity_name URL.
// The /activitysearch/:activity_name is a parameter within the URL that specifies a particular activity.
router.route('/activitysearch/:activity_name')
  // This GET method is used to get the content from a specific activity.
  .get((req, res) => {
    res.json({ message: 'Get the content from an activity.'});
  })

// All HTTP methods under the /schedule URL.
// The /schedule URL is where the user's schedule is stored
router.route('/schedule')
    // This GET method is used to get the activities already on the schedule.
    .get((req, res) => {
        res.json({ message: 'Get the activities on the schedule.'});
    })
    // We use PUT method to update an activity on the schedule
    .put((req, res) => {
        res.json({
            message: ('Update the time of an activity: ' + req.params.activity_name + " - " + req.body.content),
            activity_name: req.params.activity_name,
            time: req.body.content,
        });
    })
    // DELETE method is used to delete an activity from the schedule.
    .delete((req, res) => {
        res.json({ message: 'Delete an activity off the schedule.' });
    })


app.use('/home', router); // API Root url at: http://localhost:8080/home

app.listen(port);
console.log('Server listening on port ' + port);

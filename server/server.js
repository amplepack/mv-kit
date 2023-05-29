    let express = require('express');
    let app = express();

    let bodyParser = require('body-parser');
    let backendPort = 8084;

    let mock = {
        userData: require('./mock/userData.json'),
        };

    app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.header(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    );
    next();
    });

    app.use(bodyParser.json());
    app.use(bodyParser.text());
    app.use(
    bodyParser.urlencoded({
    extended: true
    })
    );


    /* login session start here */
    app.post('/login', function(req, res, next) {
        let data = JSON.parse(req.body);
        let username = 1;
        let password = 2;
        if (username == 1 && password == 2) {
        return res.status(200).json(mock.userData);
        } else {
        return res
        .status(200)
        .send('{"error":{"text":"Bad request wrong username and password"}}');
        }
        });
    /* login end */

    /* feeds */
    app.post('/feed', function(req, res, next) {
        let data = JSON.parse(req.body);
        if (data.token && data.user_id === '1') {
        return res.status(200).json(mock.feedData);
        } else {
        return res.status(401).send('No Access');
        }
        });
    /* end feeds */


    app.listen(backendPort, function() {
    console.log('Express server listening on port ' + backendPort);
    });

const express = require('express'),
      router  = express.Router();

//default route
router.route('/',)
  .get((req, res) => {
    let unix = Date.now();
    let utc = new Date(unix).toUTCString();

    res.json({ unix, utc });
  });

//date route
router.route('/:date_string',)
  .get((req, res) => {
    let date_string = req.params.date_string;
    let unix, utc, response;
    let error = "Invalid Date";  

    if(date_string.includes("-")) {
      unix = Date.parse(date_string);
      utc = new Date(date_string).toUTCString();

      if(unix && utc) response = { unix, utc };
      else response = { error };
    } else {
      unix = parseInt(date_string);
      utc = new Date(unix).toUTCString();

      if(unix && utc) response = { unix, utc };
      else response = { error };
    }

    res.json(response);
  });

module.exports = router;
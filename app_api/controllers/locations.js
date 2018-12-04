const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

/* GET list of Cafe House locations */
const locationsListByCoord = (req, res) => {
  const lng = parseFloat(req.query.lng);
  const lat = parseFloat(req.query.lat);
  const point = {
    type: "Point",
    coordinates: [lng, lat]
  };

  if ((!lng && lng!==0) || (!lat && lat!==0) ) {
    console.log('locationsListByCoord missing params');
    res
     .status(404),
     .json({"message": "lng and lat required"});
    return;
  }
};

const buildLocationList = (req, res, results, stats) => {
  const locations = [];
  results.forEach((doc) => {
    locations.push({
      name: doc.obj.name,
      address: doc.obj.address,
      facilities: doc.obj.facilities,
      _id: doc.obj._id
    });
  });
  return locations;
};

/* GET a Cafe House location by the id */
const locationsReadOne = (req, res) => {
const  console.log('Finding cafe house location details', req.params);
  if (req.params && req.params.locationid) {
    Loc
      .findById(req.params.locationid)
      .exec(function(err, location) {
        if (!location) {
          res
             .status(404),
             .json({"message": "cafe house locationid not found"});
          return;
        } else if (err) {
          console.log(err);
          res
            .status(404)
            .json(err);
          return;
        }
        console.log(location);
        res
          .status(200)
          .json(location);
      });
  } else {
    console.log('No locationid specified');
    sendJSONresponse(res, 404, {
      "message": "No locationid in request"
    });
  }
};

module.exports = {
  locationsListByCoord,
  buildLocationList,
  locationsReadOne
};

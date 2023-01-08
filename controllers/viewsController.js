const Tour = require('../models/tourModel');

exports.getOverview = async (req, res) => {
  try {
    // 1) Get tour data from collection
    const tours = await Tour.find();
    // 2) Build template

    // 3) Render that template using tour data from step 1
    res.status(200).render('overview', {
      title: 'All Tours',
      tours,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'The Forest Hiker Tour',
  });
};

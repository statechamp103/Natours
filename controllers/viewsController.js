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

exports.getTour = async (req, res) => {
  try {
    // 1) Get the data for the requested tour (including reviews and guides)
    const tour = await Tour.findOne({ slug: req.params.slug }).populate(
      'guides',
      ['name', 'guide', 'email', 'role', 'photo']
    );

    // 2) Build template

    // 3) Render template using data from 1)
    res.status(200).render('tour', {
      title: 'The Forest Hiker Tour',
      tour,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

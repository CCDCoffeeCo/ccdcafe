* These information are for the Coffee Houses and Coffee Famers

* Coffee House information put into MongoDB database/collections

    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true

    },
    facilities: {
        type: String,
        required: true
    },
    // Always store coordinates longitude, latitude order.
    coords: {
        type: [Number],
        index: '2dsphere',
        required: true
    },
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]

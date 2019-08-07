const { List, Map } = require('immutable');

export default {
    gallery: Map({
        images: List(),
        galleryWidth: 685
    }),
    app: Map({
      size: 200,
      tag: '',
      tags: List(),
      logged_in: '',
      location_logged_in: '',
      img_logged_in: '',
      reviews_logged_in: []
    }),
    register: Map({
        userName: '',
        password: '',
        img: '',
        location: '',
        teken: false,
        locationSuggestions: [],
        locations: List()
    }),
    otherProfile: Map({
        userName: '',
        location: '',
        reviews: List()

    }),
    login: Map({
        userName: '',
        password: '',
        message: ''
    }),
    selfProperties: Map({
        userName: '',
        location:'',
        img: '',
        editedName: '',
        editedLocation: ''
    }),
    review: Map({
        bq: 0,
        sk: 0,
        clean: 0,
        dtq: 0,
        ds: 0,
        fq: 0,
        editbq: false,
        editsk: false,
        editclean: false,
        editdtq: false,
        editds: false, 
        editfq: false,
        title: '',
        location: '',
        deleted: false,
        imgs: List(),
        date: null
    }),
    selfProfile: Map({
        userName: '',
        location: '',
        img: '',
        reviews: [],
        add_button: false
    }),
    restaurant: Map({
        name: '',
        location: '',
        reviews: List()
    }),
    restaurants: Map({
        restaurants: [],
        layout: 'list',
        selectedCar: null,
        visible: false,
        sortKey: null,
        sortOrder: null,
        current_reviews: []
    }),

    profiles: Map({
        profiles: [],
        layout: 'list',
        selectedCar: null,
        visible: false,
        sortKey: null,
        sortOrder: null,
        current_reviews: []
    })
    
}

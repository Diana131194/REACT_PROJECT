const { List, Map } = require('immutable');

export default {
    gallery: Map({
        images: List(),
        galleryWidth: 0
    }),
    app: Map({
      size: 200,
      tag: '',
      tags: List()
    }),
    register: Map({
        userName: '',
        password: '',
        img: '',
        location: '',
        teken: false,
        locationSuggestions: List(),
        locations: List()
    }),
    otherProfile: Map({
        userName: '',
        location: '',
        reviews: List()

    }),
    login: Map({
        userName: '',
        password: ''
    }),
    selfProperties: Map({
        userName: '',
        location:'',
        img: '',
        editedName: '',
        etidetLocation: ''
    }),
    review: Map({
        bq: 0,
        new_bq: 0,
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
        reviews: List(),
        add_button: false
    })
    
}

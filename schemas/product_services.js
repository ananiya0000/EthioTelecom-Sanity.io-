export default{
    name:'product',
    type:'document',
    title:'Product',
    fields:[
        {
            name:'title',
            type:'string',
            title:'Title'
        },
        {
            name:'description',
            type:'string',
            title:'Description'
        },
        {
            name:'btntxt',
            type:'string',
            title:'Btntxt'
        },
        {
            name:'tagline',
            type:'string',
            title:'Tagline'
        },
        {
            name:'date',
            type:'datetime',
            title:'Date'
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
              hotspot: true,
            },
        },
    ]
}
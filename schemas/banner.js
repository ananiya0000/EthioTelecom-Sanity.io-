export default{
    name:'banner',
    type:'document',
    title:'Banner',
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
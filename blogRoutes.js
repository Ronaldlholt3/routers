app.get('/',(req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) =>{
res.render('about', { title: 'About' });
});

//blog routes
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});

app.get('blogs',(req, res) => {
    Blog.find().sort({ createdAt: -1})
    .then(result => {
        res.render('index', { blogs: result, title: 'All blogs'});
    })
})
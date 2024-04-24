const express=require('express');
const app=express();
app.use(express.json())


let notes=[
    {
        id: 1,
        content: "HTML is easy",
        important: true
      },
      {
        id: 2,
        content: "Browser can execute only JavaScript",
        important: false
      },
      {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
      }
];
app.get('/',(req,res)=>{
    res.send('<h1>Hello there</h1>');
});
app.get('/api/notes',(req,res)=>{
    res.json(notes);
});
app.get('/api/notes/:id',(req,res)=>{
  const id=Number(req.params.id);
  console.log(id)
  const note=notes.find((note)=>note.id===id);
  console.log(note);
  if(note)
  res.json(note);
  else{
    res.statusMessage = `There is no note with id : ${id}`;
    res.status(404).end();}

});
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})
app.post('/api/notes',(request,response) => {
  const maxId=notes.length>0 ? Math.max(...notes.map((n)=>n.id)):0;

  const note =request.body;
  console.log(note)
  note.id=maxId+1;
  notes=notes.concat(note);
  

  response.json(note)
})

const PORT=3001;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
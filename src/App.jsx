
import './App.css'

function App() {
  const headleSubmit = (e) => {
  
e.preventDefault()
console.log(e.target.name.value);

    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const uesr = { name, email }
    console.log(uesr);
    

}

  return (
    <>
   
      <h2>Simple Crud</h2>
      
      <form onSubmit={headleSubmit} >
        


      <input type="text" name='name' placeholder='name' /> <br/>
      <input type="email" name='email' placeholder='eamil' /> <br/>
      <input type="submit" value={"Add"} />
    
</form>
    </>
  )
}

export default App

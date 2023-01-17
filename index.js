function Navbar(){
  return (
    <div>
      <a className="home" href ="#">Home</a>
      <a className="index" href ="#">Index</a>
      <a className="profile" href ="#">Profile</a>
    </div>
  )
}
ReactDOM.render(
  <div>
    <Navbar />
  </div>
  , document.getElementById('root'));

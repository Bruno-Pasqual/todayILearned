const Header = ({ showForm, setShowForm }) => {
  return (
    <header>
      <div className="wrapper">
        <img className="logoIcon" src="/public/logo.png" alt="" />
        <h1 className="title">Today i learned</h1>
      </div>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'close' : 'Share a fact'}
      </button>
    </header>
  );
};

export default Header;

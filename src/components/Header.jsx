const Header = ({ showForm, setShowForm }) => {
  return (
    <header>
      <div className="wrapper">
        <img className="logoIcon" src="/public/logo.png" alt="" />
        <h1>Today i learned</h1>
      </div>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'close' : 'Share a fact'}
      </button>
    </header>
  );
};

export default Header;

export function Jumbotron() {
  return (
    <>
      <div className="homediv container-fluid bg-dark text-light p-5 mb-4">
        <div className="container bg-dark p-5">
          <h1 className="display-4">Welcome to my Fake Pokemon Store</h1>
          <hr />
          <p>Go to My Store</p>
          <a href="/store" className="btn btn-primary">
            Shop Now!
          </a>
          <hr />
          <div className="pokemonbg"></div>
          <h3>
            This store is super awesome!
          </h3>
        </div>
      </div>
    </>
  );
}

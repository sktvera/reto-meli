const React = require('react');
const { useEffect, useState } = require('react');

function Profile() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  async function fetchData() {
    setLoading(true);
    const url = `/api/users`;
    const { users } = await fetch(url).then(res => res.json());

    setLoading(false);

    if (users) {
      setItems(users);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header>
        <h1><a href="/"><img src="/assets/logo.png" /></a></h1>


        <form action="/search" method="GET">
          <input type="search" id="query" />
          <button type="submit">
            <img src="/assets/search.png" />
          </button>
        </form>

        <ul className="btns"> <li><a href="/profile">Profile</a></li></ul>
      </header>

      <div>
        <h2>Contactos</h2>
        <div>
          <ul>
            {items.length ? items.map(item => (
              <li aria-label={`Usuario: ${item.id}`} key={item.id}>
                <span>{item.username}</span> - <span>{item.email}</span> - <span>{item.dni}</span>
              </li>
            )): null}
          </ul>
        </div>
        {loading ? <p>Cargando resultados</p> : null}

      </div>
      <script src="profile.js"></script>
    </>
  );
}

module.exports = Profile;

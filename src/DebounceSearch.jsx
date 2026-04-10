import { useState, useEffect } from "react";

function DebounceSearch() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?name_like=${debouncedSearch}`,
        );
        if (!response.ok) {
          throw new Error("Api not found (404)");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        console.log("Fetch attempt completed.");
      }
    };
    fetchUser();
  }, [debouncedSearch]);

  return (
    <div>
      <h1>Debounce Search</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {user.length === 0 ? (
        <p>No user found</p>
      ) : (
        <ul>
          {user.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DebounceSearch;

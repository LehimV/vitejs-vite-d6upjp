import BaseCards from "./Components/BaseCard";

function App() {
  return (
    <>
      <header style={{ background: "black" }}>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
    alt="Rick and Morty"
    style={{
      display: "block",
      margin: "auto",
      maxWidth: "80%",
      height: "auto",
    }}
  />
</header>
      <main style={{ background: "black" }}>
        <BaseCards />
      </main>
    </>
  );
}

export default App;
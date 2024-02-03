// import Input from "./components/Input";

import Button from "./components/Button";

function App() {
  return (
    <main>
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://google.com" target="#">
          A Link
        </Button>
      </p>
    </main>
  );
}

export default App;

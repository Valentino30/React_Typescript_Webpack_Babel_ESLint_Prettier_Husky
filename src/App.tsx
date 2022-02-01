import "./styles.css";
import logo from "./assets/webpack-logo.jpeg";

export default function App() {
  return (
    <div>
      <img src={logo} alt="webpack-logo" width={150} height={150} />
      <h1>Welcome to Webpack</h1>
    </div>
  );
}

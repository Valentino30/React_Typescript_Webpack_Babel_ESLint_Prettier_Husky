import "./styles.css";
import logo from "./assets/webpack-logo.svg";
import image from "./assets/webpack-logo.jpeg";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img src={logo} alt="webpack-logo" width={50} height={50} />
      <h1>Welcome to Webpack</h1>
      <img src={image} alt="webpack-image" width={50} height={50} />
    </div>
  );
}

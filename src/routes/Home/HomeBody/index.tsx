import "./styles.css";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

export default function HomeBody() {
  return (
    <main className="container">
      <div className="home-container">
        <h2>Desafio Github API</h2>
        <p>DevSuperior - Escola de programação</p>
      </div>
      <Link to="/search">
        <Button name="Começar" />
      </Link>
    </main>
  );
}

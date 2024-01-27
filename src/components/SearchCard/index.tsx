import "./styles.css";
import Button from "../Button";
import { useState } from "react";
import NotFound from "../NotFound";
import ProfileCard from "../ProfileCard";
import { ProfileDTO } from "../../models/Profile";
import * as githubApi from "../../services/github-api";

type FormData = {
  user: string;
};

export default function SearchCard() {
  const [userData, setUserData] = useState<ProfileDTO>();

  const [formData, setFormData] = useState<FormData>({
    user: "",
  });

  const [error, setError] = useState();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleFormSubmit(event: any) {
    event.preventDefault();
    githubApi
      .searchUser(formData.user)
      .then((response) => {
        setUserData(response.data);
        console.log(userData);
      })
      .catch((error) => {
        setError(error.response.data);
        setUserData(undefined);
      }),
      [formData];
  }

  return (
    <>
      <div className="container">
        <div className="search-card-container">
          <p>Encontre um perfil Github</p>
          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                name="user"
                type="text"
                placeholder="Usuário Github"
                onChange={handleInputChange}
                value={formData.user}
              />
              <Button name="Encontrar" />
            </div>
          </form>
        </div>
      </div>
      <div>
        {(userData && <ProfileCard profile={userData} />) ||
          (error && <NotFound />)}
      </div>
    </>
  );
}

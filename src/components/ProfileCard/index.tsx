import { ProfileDTO } from "../../models/Profile";
import "./styles.css";

type Props = {
  profile: ProfileDTO;
};

export default function ProfileCard({ profile }: Props) {
  return (
    <div className="container">
      <div className="profilecard-container">
        <div className="profile-picture-container">
          <img src={profile.avatar_url} alt={profile.name} />
        </div>
        <div className="profilecard-info">
          <p className="profilecard-info-title">Informações</p>
          <div className="profilecard-info-resultbox">
            <p>
              Perfil: <span className="result-blue">{profile.html_url}</span>
            </p>
          </div>
          <div className="profilecard-info-resultbox">
            <p>
              Seguidores:{" "}
              <span className="result-regular">{profile.followers}</span>
            </p>
          </div>
          <div className="profilecard-info-resultbox">
            <p>
              Localidade:{" "}
              <span className="result-regular">{profile.location}</span>
            </p>
          </div>
          <div className="profilecard-info-resultbox">
            <p>
              Nome: <span className="result-regular">{profile.name}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

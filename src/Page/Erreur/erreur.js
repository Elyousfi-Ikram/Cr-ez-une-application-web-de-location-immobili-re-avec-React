import { Link, useNavigate } from "react-router-dom";
import "../Erreur/erreur.scss";

function Erreur() {

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <div className="error-container">
                <div>
                    <h1 className="error-title">404</h1>
                    <p className="error-text"> Oups! La page que vous demandez n'existe pas.</p>
                </div>
                <div className="link-return">
                    <Link onClick={handleGoBack} >
                        Retourner à la page précédente
                    </Link>

                    <Link to="/" >
                        Retourner à la page d'accueil
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Erreur;













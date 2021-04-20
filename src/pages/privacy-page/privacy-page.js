import React from 'react';
import './privacy-page.scss';

const PrivacyPage = (props) => {
    return(
        <div className="container privacy">
            <div className="row">
                <div className="col-12">
                <h2>Privacy Policy</h2>
                <p>Dear user!</p>
                <p>Please note that this website was created for demonstration purposes only.</p>
                <p>There is absolutely NO PRIVACY for any data you submit into the feedback and contact forms.</p>
                <p>DO NOT submit any sensitive personal data to this website. It is completely useless and unsafe.</p>
                <p>Thank you for your understanding!</p>
                    <hr/>
                <p>
                Estimado usuario:</p>
                <p>Este sitio web fue desarrollado sólo para demonstración.</p>
                <p>No habrá privacidad para los datos enviados a través de los formularios de este sitio web.</p>
                <p>Por favor, no comparte ningúna información privada aquí: no tiene ningún sentido y ningúna seguridad.</p>
                <p>Muchas gracias por su colaboración</p>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <button className="btn btn-primary" onClick={() => props.history.goBack()}>Back</button>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPage;
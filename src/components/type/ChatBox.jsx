import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css';
import '../../assets/css/additional-styles/bootstrap-chat.min.css';
import Profil from '../../assets/images/User-Icon.png';


const Profilproperty = styled.div`
    section.gradient-custom {
        display: grid;
        place-items: center; 
        justify-items: center; /* Pour centrer horizontalement */
        align-items: center; /* Pour centrer verticalement */
        /* Ajoutez d'autres styles selon vos besoins */
        width: 100%;
        height: 100vh; /* Hauteur de la vue */
        padding-top: 10vh;
        // border: 1px solid;
   }
  .gradient-custom {
    font-family: "Poppins",sans-serif;
    font-size: 15px;
    /* display: grid;*/
    /* fallback for old browsers */
    background: #0a0f19;

    /* Chrome 10-25, Safari 5.1-6 */
    background: #0a0f19;

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to bottom right, #0a0f19, #0a0f19);
  }

  .mask-custom {
    background: #0a0f19;
    border-radius: 2em;
    backdrop-filter: blur(15px);
    border: 2px solid #6c62e2;
    background-clip: padding-box;
    box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);
  }
  a {
    color: #
  }
  .form-control {
   background-color: #222B5F;
   color: #000;
  }
  #buttonSend {
    background-color: #6C62E2;
    color: #fff;
  }
`;

// const buttonSend = styled.div`
// button{

// }
// ';

function ChatBox() {
  return (
    <>

    <Profilproperty>
      <section className="gradient-custom">
        <div className="container py-5" 
        // style={{
        //    backgroundColor: 'rgba(255, 255, 255, 0.5)'
        //                    }}>
          > <div className="row">
            <div className="col-md-6 col-lg-5 col-xl-5 mb-4 mb-md-0">
              <h5 className="font-weight-bold mb-3 text-center text-white">Propriétaire</h5>
              <div className="card mask-custom">
                <div className="card-body">
                  <ul className="list-unstyled mb-0" >
                    <li className="p-2 border-bottom" style={{ borderBottom: '1px solid rgba(255,255,255,.3) !important' }}>
                      <a href="#!" className="d-flex justify-content-between link-light">
                        <div className="d-flex flex-row">
                         <img id='profil' src={Profil} alt="avatar" className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" 
                         style={{
                           maxWidth: '50px',
                           maxHeight: '50px'
                           }} />

                          <div className="pt-1">
                            <p className="fw-bold mb-0">Propriétaire 1</p>
                            <p className="small text-white">Coucou nju ,aon le plan?</p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-white mb-1">A l'instant</p>
                          <span className="badge bg-danger float-end">1</span>
                        </div>
                      </a>
                    </li>
                    {/* Ajouter les autres éléments de la liste ici */}
                    <li className="p-2 border-bottom" style={{ borderBottom: '1px solid rgba(255,255,255,.3) !important' }}>
                      <a href="#!" className="d-flex justify-content-between link-light">
                        <div className="d-flex flex-row">
                         <img id='profil' src={Profil} alt="avatar" className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"style={{
                           maxWidth: '50px',
                           maxHeight: '50px'
                           }} />

                          <div className="pt-1">
                            <p className="fw-bold mb-0">Propriétaire 6</p>
                            <p className="small text-white">Discussion</p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-white mb-1">Hier</p>
                        </div>
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="#!" className="d-flex justify-content-between link-light">
                        <div className="d-flex flex-row">
                         <img id='profil' src={Profil} alt="avatar" className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60"style={{
                           maxWidth: '50px',
                           maxHeight: '50px'
                           }} />

                          <div className="pt-1">
                            <p className="fw-bold mb-0">Propriétaire 7</p>
                            <p className="small text-white">Discussion</p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-white mb-1">5 mins ago</p>
                          <span className="text-white float-end"><i className="fas fa-check" aria-hidden="true"></i></span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-7 col-xl-7">
              <ul className="list-unstyled text-white">
                <li className="d-flex justify-content-between mb-4">
                 <img id='profil' src={Profil} alt="avatar" className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" style={{
                           maxWidth: '50px',
                           maxHeight: '50px'
                           }} />
                  <div className="card mask-custom">
                    <div className="card-header d-flex justify-content-between p-3" style={{ borderBottom: '1px solid rgb(255, 255, 255)' }}>
                      <p className="fw-bold mb-0">Vendeur</p>
                      <p className="text-light small mb-0"><i className="far fa-clock"></i> Il y a  12 mins</p>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                </li>
                <li className="d-flex justify-content-between mb-4">
                  <div className="card mask-custom w-100">
                    <div className="card-header d-flex justify-content-between p-3" style={{ borderBottom: '1px solid rgb(255, 255, 255)' }}>
                      <p className="fw-bold mb-0">Vous</p>
                      <p className="text-light small mb-0"><i className="far fa-clock"></i> Il y a  13 mins</p>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>
                  </div>
                  <img id='profil' src={Profil} alt="avatar" className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" style={{ maxWidth: '50px' }} />
                </li>
                <li className="d-flex justify-content-between mb-4">
                 <img id='profil' src={Profil} alt="avatar" className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" style={{ maxWidth: '50px' }} />
                  <div className="card mask-custom">
                    <div className="card-header d-flex justify-content-between p-3" style={{ borderBottom: '1px solid rgb(255, 255, 255)' }}>
                      <p className="fw-bold mb-0">Vendeur</p>
                      <p className="text-light small mb-0"><i className="far fa-clock"></i> Il y a 10 min</p>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="form-outline form-white">
                    <textarea className="form-control" id="textAreaExample3" rows="4" style={{ fontSize: '13px' }}></textarea>
                    {/* <label className="form-label" htmlFor="textAreaExample3">Message</label> */}
                  </div>
                </li>
                <button id='buttonSend' type="button" className="btn btn-light btn-lg btn-rounded float-end"
               
                >Envoyer</button>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </Profilproperty>
   
    </>
    
  );
}

export default ChatBox;

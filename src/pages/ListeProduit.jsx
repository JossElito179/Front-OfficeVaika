import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { link } from '../BackConfig';

function ListeProduit({ id_annonce }) {
  const [annonce, setAnnonce] = useState(null);
  const [errors, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageActuelle,setImageActuelle]=useState('');
  const requestBody={
    id_annonce:id_annonce,
    etat:10
  };
  useEffect(() => {
    const token=sessionStorage.getItem('token');
    const fetchAnnonce = async () => {
      try {
        const response = await axios.get(`${link}annonce/findAllAnnonceNonValiderById/${id_annonce}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAnnonce(response.data.allAnnonces[0]);
        setImageActuelle(response.data.allAnnonces[0].detailsAnnonce.urls[0]);
        setIsLoading(false);
      } catch (error) {
        setError('Erreur lors de la récupération des données.');
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchAnnonce();
  }, [id_annonce]);

  const handleValiderAnnonce = async () => {
    // try {
    //   const token = sessionStorage.getItem('token');
    //   alert(`${link}annonce/updateEtat/`);
    //   await axios.post(`${link}annonce/updateEtat`, requestBody, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    //   console.log('Annonce validée avec succès.');
    //   // Ajoutez ici le code pour mettre à jour l'état ou rediriger l'utilisateur si nécessaire
    // } catch (error) {
    //   console.error('Erreur lors de la validation de l\'annonce :', error);
    // }
    console.log('validation');
  };


  if (isLoading) {
    return <p>Chargement en cours...</p>;
  }

  if (errors) {
    return <p>Erreur: {errors}</p>;
  }

  if (!annonce) {
    return <p>Aucune annonce trouvée.</p>;
  }

  const changerImage = (nouvelleImage) => {
    setImageActuelle(nouvelleImage);
  };


  return (
    <div className=" carder  col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Annonce 1</h2>
      </header>
      <div className="card-wrapper">
        <style>
          {`
            .gap-6 {
              gap: 10.7rem;
            }
            .img-item{
              width:20%;
              height:100%;
            }
            .img-item img {
              width: 100%;
            }
            .card{
              padding:30px 40px;
              height:auto;
              border:1px solid white;
              border-radius:10px;
              margin-top:50px;
            }
            .carder{
              height:auto;
              display:grid;
            }
            .img-display {
              width:80%;
            }
          `}
        </style>
        <div className="card">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src={imageActuelle} alt="shoe image" />
              </div>
            </div>
            <div className="img-select">
              {annonce.detailsAnnonce.urls.map((image) =>(
              <div className="img-item" key={image}>
                <img
                  src={image}
                  alt="shoe image"
                  onClick={() => changerImage(image)}
                />
              </div>
              ))}

            </div>
          </div>

          <div className="product-content">
            <h2 className="product-title">{annonce.marque} {annonce.modeles}</h2>
            <a href="#" className="product-link">Description: {annonce.description}</a>

            <div className="product-price">
              <p className="new-price">Prix: <span>Ar{annonce.prix}</span></p>
            </div>

            <div className="product-detail">
              <p>Plus de details sur</p>
              <ul>
                <li>Transmission : <span>{annonce.transmission}</span></li>
                <li>Moteur : <span>{annonce.moteur}</span></li>
                <li>Carburant : <span>{annonce.carburant}</span></li>
                <li>Catégorie : <span>{annonce.categorie}</span></li>
                <li>Place : <span>{annonce.nbr_place}</span></li>
                <li>Porte : <span>{annonce.nbr_porte}</span></li>
                <li>Couleur : <span>{annonce.couleur}</span></li>
              </ul>
            </div>

            <div className="purchase-info">
              <button type="button" className="btn" onClick={handleValiderAnnonce}>
                Interessé(e) <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListeProduit;

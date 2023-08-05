import React, { useState } from 'react';
import Modal from '../components/Modal';
const Cart = () => {
  const [commande, setCommande] = useState([]);

  const addToCart = (nouvelleCommande) => {
    setCommande([...commande, nouvelleCommande]);
  };

  const removeFromCart = (index) => {
    const nouvellesCommandes = [...commande];
    nouvellesCommandes.splice(index, 1);
    setCommande(nouvellesCommandes);
  };

  return (
    <div>
      <h1>Panier d'achat</h1>
      <ul>
        {commande.map((c, index) => (
          <li key={index}>
            <div>Nom : {c.nom}</div>
            <div>Prénom : {c.prenom}</div>
            <div>Téléphone : {c.telephone}</div>
            <div>Adresse : {c.adresse}</div>
            <div>Quantité : {c.quantite}</div>
            <div>Moyens de transport : {c.transport}</div>
            <div>Paiement : {c.paiement}</div>
            <button onClick={() => removeFromCart(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <Modal open={true} onClose={() => {}} addToCart={addToCart} />
    </div>
  );
};

export default Cart;

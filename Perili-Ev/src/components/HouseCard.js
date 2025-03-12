import React from "react";

const HouseCard = ({houseData,index,array}) => {
  return <div className="house-card" key={houseData.id}>
  <p>
    {array.length} / {index + 1}
  </p>
  <img src={houseData.image} />
  <div>
    <ul>
      <li>
        <span>Fiyat:</span>
        {houseData.price}
      </li>
      <li>
        <span>Lokasyon:</span>
        {houseData.location}
      </li>
      <li>
        <span>Metrekare:</span>
        {houseData.squareFeet}
      </li>
      <li>
        <span>Dönüm:</span>
        {houseData.acres}
      </li>
      <li>
        <span>Yapım Yılı:</span>
        {houseData.yearBuilt}
      </li>
      <li>
        <span>Yatak Odası:</span>
        {houseData.bedrooms}
      </li>
      <li>
        <span>Banyo:</span>
        {houseData.bathrooms}
      </li>
      <li>
        <span>Diğer Odalar:</span>
        {houseData.otherRooms}
      </li>
      <li>
        <span>Garaj:</span>
        {houseData.garage ? "Evet" : "Hayır"}
      </li>
      <li>
        <span>Klima:</span>
        {houseData.airConditioning ? "Evet" : "Hayır"}
      </li>
      <li>
        <span>Isıtma Sistemi:</span>
        {houseData.heating ? "Evet" : "Hayır"}
      </li>
      <li>
        <span>Lanetli:</span>
        {houseData.haunted ? "Evet" : "Hayır"}
      </li>
    </ul>
  </div>
</div>;
};

export default HouseCard;

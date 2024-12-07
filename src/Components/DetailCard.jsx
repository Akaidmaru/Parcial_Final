import doctorImage from "/images/doctor.jpg"

const DetailCard = ({ name, username, id, email, phone, website }) => {
  return (
    <div className="card detail-card">
      <img src={doctorImage} alt="doctor" width={200} />
      <div className="detail-info">
        <h3>Información Detallada del Doctor</h3>
        <p className="dentist-items"><strong>ID:</strong> {id}</p>
        <p className="dentist-items"><strong>Nombre:</strong> {name}</p>
        <p className="dentist-items"><strong>Usuario:</strong> {username}</p>
        <p className="dentist-items"><strong>Email:</strong> {email}</p>
        <p className="dentist-items"><strong>Teléfono:</strong> {phone}</p>
        <p className="dentist-items"><strong>Sitio Web:</strong> {website}</p>
      </div>
    </div>
  );
};

export default DetailCard;

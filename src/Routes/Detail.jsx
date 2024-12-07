import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailCard from '../Components/DetailCard'
import { useDentistState } from '../Context/Context'

const Detail = () => {
  const { id } = useParams()
  const { state } = useDentistState()
  const [dentist, setDentist] = useState(null)

  useEffect(() => {
    const selectedDentist = state.data.find(d => d.id === parseInt(id))
    console.log("Dentista seleccionado:", selectedDentist)
    setDentist(selectedDentist)
  }, [id, state.data])

  return (
    <main className="detail-container">
      {dentist ? (
        <DetailCard
          name={dentist.name}
          username={dentist.username}
          id={dentist.id}
          email={dentist.email}
          phone={dentist.phone}
          website={dentist.website}
        />
      ) : (
        <p>Cargando información del dentista...</p>
      )}
    </main>
  )
}

export default Detail
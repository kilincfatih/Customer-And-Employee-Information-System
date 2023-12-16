import React, { useEffect, useState } from 'react'
import PersonelService from '../services/PersonelService'
import { Link } from 'react-router-dom'

const ListPersonelComponent = () => {

  const [personels, setPersonels] = useState([])

  useEffect(() => {
    getAllPersonels();
  }, [])

  const getAllPersonels = () => {
    PersonelService.getAllPersonels().then((response) => {
      setPersonels(response.data)
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }
  const deletePersonel = (recordId) => {
    PersonelService.deletePersonel(recordId).then((response) => {
      getAllPersonels();
    }).catch(error => {
      console.log(error);
    })
  }
  return (
    <div className="container">
      <h2 className="text-center">Personel Listesi</h2>
      <Link to="/add-personel" className="btn btn-primary mb-2 me-2">Personel Ekle</Link>
      <Link to="/" className="btn btn-primary mb-2 me-2">Anasayfaya Git</Link>
      <Link to="/customers" className="btn btn-primary mb-2">Müşteri Listesine Git</Link>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>Record Id</th>
            <th>Tckn</th>
            <th>Personel Adı Soyadı</th>
            <th>Personel Telefon Numarası</th>
            <th>Personel Mail Adresi</th>
            <th>Personel İşe Başlangıç Tarihi</th>
            <th>Personel İşten Ayrılış Tarihi</th>
            <th>Personel Adresi</th>
            <th>Personel Maaş Bilgisi</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {personels.map(personel => (
            <tr key={personel.recordId}>
              <td>{personel.recordId}</td>
              <td>{personel.tckn}</td>
              <td>{personel.personelNameSurname}</td>
              <td>{personel.personelPhoneNumber}</td>
              <td>{personel.personelMailAddress}</td>
              <td>{personel.personelStartDate}</td>
              <td>{personel.personelFinishDate}</td>
              <td>{personel.personelAddress}</td>
              <td>{personel.personelSalaryInformation}</td>
              <td>
                <Link className='btn btn-info' to={`/edit-personel/${personel.recordId}`}>Güncelle</Link>
                <button className='btn btn-danger' onClick={() => deletePersonel(personel.recordId)} style={{ marginLeft: "10px" }}>Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListPersonelComponent

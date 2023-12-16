import React, {useEffect, useState} from 'react'
import {useNavigate , Link, useParams} from 'react-router-dom'
import PersonelService from '../services/PersonelService';

const AddPersonelComponent = () => {
  const [tckn, settckn] = useState('');
  const [personelNameSurname, setpersonelNameSurname] = useState('');
  const [personelPhoneNumber, setpersonelPhoneNumber] = useState('');
  const [personelMailAddress, setpersonelMailAddress] = useState('');
  const [personelStartDate, setpersonelStartDate] = useState('');
  const [personelFinishDate, setpersonelFinishDate] = useState('');
  const [personelAddress, setpersonelAddress] = useState('');
  const [personelSalaryInformation, setpersonelSalaryInformation] = useState('');
  const navigate = useNavigate();
  const { recordId } = useParams();

  const saveOrUpdatePersonel = (e) => {
    e.preventDefault();

    const personel = { tckn, personelNameSurname, personelPhoneNumber, personelMailAddress, personelStartDate, personelFinishDate, personelAddress, personelSalaryInformation};

    if (recordId) {
      const recordIdInt = parseInt(recordId, 10);
      if (!isNaN(recordIdInt)) {
        PersonelService.updatePersonel(recordIdInt, personel)
          .then((response) => {
            navigate('/personel');
          })
          .catch(error => {
            console.error("Güncelleme Hatası: ", error);
          });
      } else {
        console.error("Geçersiz recordId:", recordId);
      }
    } else {
      PersonelService.createPersonel(personel)
        .then((response) => {
          navigate('/personel');
        })
        .catch(error => {
          console.error("Personel Ekleme Hatası: ", error);
        });
    }
  };

  useEffect(() => {
    if (recordId) {
      const recordIdInt = parseInt(recordId, 10);
      if (!isNaN(recordIdInt)) {
        PersonelService.getPersonelByRecordId(recordIdInt)
          .then(response => {
            settckn(response.data.tckn);
            setpersonelNameSurname(response.data.personelNameSurname);
            setpersonelPhoneNumber(response.data.personelPhoneNumber);
            setpersonelMailAddress(response.data.personelMailAddress);
            setpersonelStartDate(response.data.personelStartDate);
            setpersonelFinishDate(response.data.personelFinishDate);
            setpersonelAddress(response.data.personelAddress);
            setpersonelSalaryInformation(response.data.personelSalaryInformation);
          })
          .catch(error => {
            console.log("Personel bilgileri alınırken hata oluştu:", error);
          });
      } else {
        console.log("Geçersiz recordId:", recordId);
      }
    }
  }, [recordId]);

  const title = () => {
    return <h2 className='text-center'>{recordId ? 'Güncelle' : 'Ekle'}</h2>;
  };
     
  return (
    <div>
        <br/> <br/> <br/> 
      <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
            {
                title()
            }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>TCKN</label>
                            <input
                                type="text"
                                placeholder='Lütfen TCKN giriniz..'
                                name='tckn'
                                className='form-control'
                                value={tckn}
                                onChange={(e) => settckn(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Personel Adı Soyadı</label>
                            <input
                                type="text"
                                placeholder='Lütfen Personel Adı Soyadı Giriniz..'
                                name='personelNameSurname'
                                className='form-control'
                                value={personelNameSurname}
                                onChange={(e) => setpersonelNameSurname(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Personel Telefon Numarası</label>
                            <input
                                type="text"
                                placeholder='Lütfen Personel Telefon Numarasını giriniz..'
                                name='personelPhoneNumber'
                                className='form-control'
                                value={personelPhoneNumber}
                                onChange={(e) => setpersonelPhoneNumber(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Personel Mail Adresi</label>
                            <input
                                type="text"
                                placeholder='Lütfen Personel Mail Adresini giriniz..'
                                name='personelMailAddress'
                                className='form-control'
                                value={personelMailAddress}
                                onChange={(e) => setpersonelMailAddress(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Personel İşe Başlangıç Tarihi</label>
                            <input
                                type="text"
                                placeholder='Lütfen İşe Başlangıç Tarihini giriniz..'
                                name='personelStartDate'
                                className='form-control'
                                value={personelStartDate}
                                onChange={(e) => setpersonelStartDate(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Personel İşten Çıkış Tarihi</label>
                            <input
                                type="text"
                                placeholder='Lütfen İşten Çıkış Tarihini giriniz..'
                                name='personelFinishDate'
                                className='form-control'
                                value={personelFinishDate}
                                onChange={(e) => setpersonelFinishDate(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Personel Adresi</label>
                            <input
                                type="text"
                                placeholder='Lütfen Personel Adresini giriniz..'
                                name='personelAddress'
                                className='form-control'
                                value={personelAddress}
                                onChange={(e) => setpersonelAddress(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Personel Maaş Bilgisi</label>
                            <input
                                type="text"
                                placeholder='Lütfen Maaş Bilgisini giriniz..'
                                name='personelSalaryInformation'
                                className='form-control'
                                value={personelSalaryInformation}
                                onChange={(e) => setpersonelSalaryInformation(e.target.value)}
                            >
                            </input>
                        </div>
                        <button className='btn btn-success' onClick={saveOrUpdatePersonel}>Kaydet</button>
                        <Link to="/personel" className="btn btn-danger"> İptal</Link>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddPersonelComponent;

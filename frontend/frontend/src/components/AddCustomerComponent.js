import React, {useEffect, useState} from 'react'
import {useNavigate , Link, useParams} from 'react-router-dom'
import CustomerService from '../services/CustomerService'

const AddCustomerComponent = () => {
  const [vknTckn, setvknTckn] = useState('');
  const [customerCompanyNameSurname, setcustomerCompanyNameSurname] = useState('');
  const [customerPhoneNumber, setcustomerPhoneNumber] = useState('');
  const [customerMailAddress, setcustomerMailAddress] = useState('');
  const [customerDebtInformation, setcustomerDebtInformation] = useState('');
  const navigate = useNavigate();
  const { recordId } = useParams();

  const saveOrUpdateCustomer = (e) => {
    e.preventDefault();

    const customer = { vknTckn, customerCompanyNameSurname, customerPhoneNumber, customerMailAddress, customerDebtInformation };

    if (recordId) {
      const recordIdInt = parseInt(recordId, 10);
      if (!isNaN(recordIdInt)) {
        CustomerService.updateCustomer(recordIdInt, customer)
          .then((response) => {
            navigate('/customers');
          })
          .catch(error => {
            console.error("Güncelleme Hatası: ", error);
          });
      } else {
        console.error("Geçersiz recordId:", recordId);
      }
    } else {
      CustomerService.createCustomer(customer)
        .then((response) => {
          navigate('/customers');
        })
        .catch(error => {
          console.error("Müşteri Ekleme Hatası: ", error);
        });
    }
  };

  useEffect(() => {
    if (recordId) {
      const recordIdInt = parseInt(recordId, 10);
      if (!isNaN(recordIdInt)) {
        CustomerService.getCustomerByRecordId(recordIdInt)
          .then(response => {
            setvknTckn(response.data.vknTckn);
            setcustomerCompanyNameSurname(response.data.customerCompanyNameSurname);
            setcustomerPhoneNumber(response.data.customerPhoneNumber);
            setcustomerMailAddress(response.data.customerMailAddress);
            setcustomerDebtInformation(response.data.customerDebtInformation);
          })
          .catch(error => {
            console.log("Müşteri bilgileri alınırken hata oluştu:", error);
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
                            <label className='form-label'>Vkn/Tckn</label>
                            <input
                                type="text"
                                placeholder='Lütfen VKN/TCKN giriniz..'
                                name='vknTckn'
                                className='form-control'
                                value={vknTckn}
                                onChange={(e) => setvknTckn(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Müşteri Adı</label>
                            <input
                                type="text"
                                placeholder='Lütfen Müşteri Adını giriniz..'
                                name='customerCompanyNameSurname'
                                className='form-control'
                                value={customerCompanyNameSurname}
                                onChange={(e) => setcustomerCompanyNameSurname(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Müşteri Telefon Numarası</label>
                            <input
                                type="text"
                                placeholder='Lütfen Müşteri Telefon Numarasını giriniz..'
                                name='customerPhoneNumber'
                                className='form-control'
                                value={customerPhoneNumber}
                                onChange={(e) => setcustomerPhoneNumber(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Müşteri Mail Adresi</label>
                            <input
                                type="text"
                                placeholder='Lütfen Müşteri Mail Adresini giriniz..'
                                name='customerMailAddress'
                                className='form-control'
                                value={customerMailAddress}
                                onChange={(e) => setcustomerMailAddress(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Müşteri Borç Bilgisi</label>
                            <input
                                type="text"
                                placeholder='Lütfen Müşteri Borç Bilgisini giriniz..'
                                name='customerDebtInformation'
                                className='form-control'
                                value={customerDebtInformation}
                                onChange={(e) => setcustomerDebtInformation(e.target.value)}
                            >
                            </input>
                        </div>
                        <button className='btn btn-success' onClick={saveOrUpdateCustomer}>Kaydet</button>
                        <Link to="/customers" className="btn btn-danger"> İptal</Link>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddCustomerComponent

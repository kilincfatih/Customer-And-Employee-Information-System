import React, {useEffect, useState} from 'react'
import CustomerService from '../services/CustomerService'
import { Link } from 'react-router-dom'

const ListCustomerComponent = () => {

    const [customers, setCustomers] = useState([])

    useEffect(()=>{
        getAllCustomers();
    },[])

    const getAllCustomers = () =>{
        CustomerService.getAllCustomers().then((response)=>{
            setCustomers(response.data)
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }
    const deleteCustomer=(recordId) =>{
        CustomerService.deleteCustomer(recordId).then((response)=>{
            getAllCustomers();
        }).catch(error=>{
        console.log(error);
    })
}
  return (
    <div className="container">
      <h2 className="text-center">Müşteri Listesi</h2>
      <Link to="/add-customer" className="btn btn-primary mb-2 me-2">Müşteri Ekle</Link>
<Link to="/" className="btn btn-primary mb-2 me-2">Anasayfaya Git</Link>
<Link to="/personel" className='btn btn-primary mb-2 me-2'>Personel Listesine Git</Link>
      <table className='table table-bordered table-striped'>
        <thead>
            <tr>
                <th>Record Id</th>
                <th>Vkn/Tckn</th>
                <th>Müşteri Adı</th>
                <th>Müşteri Telefon Numarası</th>
                <th>Müşteri Mail Adresi</th>
                <th>Müşteri Borç Bilgisi</th>
                <th>İşlem</th>
            </tr>
        </thead>
<tbody>
    {customers.map(customer => (
        <tr key={customer.recordId}>
            <td>{customer.recordId}</td>
            <td>{customer.vknTckn}</td>
            <td>{customer.customerCompanyNameSurname}</td>
            <td>{customer.customerPhoneNumber}</td>
            <td>{customer.customerMailAddress}</td>
            <td>{customer.customerDebtInformation}</td>
            <td>
            <Link className='btn btn-info' to={`/edit-customer/${customer.recordId}`}>Güncelle</Link>
            <button className='btn btn-danger' onClick={() => deleteCustomer(customer.recordId)}style={{marginLeft:"10px"}}>Sil</button>
            </td>
        </tr>
    ))}
</tbody>
      </table>
    </div>
  )
}

export default ListCustomerComponent

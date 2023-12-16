import axios from 'axios';

const CUSTOMER_BASE_REST_API_URL=`http://localhost:8080/api/v1/customers`;

class CustomerService{
    getAllCustomers(){
        return axios.get(CUSTOMER_BASE_REST_API_URL)
    }

    createCustomer(customer) {
        console.log("API'ye Gönderilen Müşteri:", customer);
        return axios.post(CUSTOMER_BASE_REST_API_URL, customer);
    }

    getCustomerByRecordId(recordId) {
        return axios.get(`${CUSTOMER_BASE_REST_API_URL}/${recordId}`);
    }    

    updateCustomer(recordId, customer){
        return axios.put(`${CUSTOMER_BASE_REST_API_URL}/${recordId}`, customer);
    }
    
    deleteCustomer(recordId){
        return axios.delete(`${CUSTOMER_BASE_REST_API_URL}/${recordId}`)
    }
}

export default new CustomerService();
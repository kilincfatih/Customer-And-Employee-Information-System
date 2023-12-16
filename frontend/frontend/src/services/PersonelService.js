import axios from 'axios';

const PERSONEL_BASE_REST_API_URL=`http://localhost:8080/api/v2/personel`;

class PersonelService{
    getAllPersonels(){
        return axios.get(PERSONEL_BASE_REST_API_URL)
    }

    createPersonel(personel) {
        console.log("API'ye Gönderilen Müşteri:", personel);
        return axios.post(PERSONEL_BASE_REST_API_URL, personel);
    }

    getPersonelByRecordId(recordId) {
        return axios.get(`${PERSONEL_BASE_REST_API_URL}/${recordId}`);
    }    

    updatePersonel(recordId, personel){
        return axios.put(`${PERSONEL_BASE_REST_API_URL}/${recordId}`, personel);
    }
    
    deletePersonel(recordId){
        return axios.delete(`${PERSONEL_BASE_REST_API_URL}/${recordId}`)
    }
}

export default new PersonelService();
package net.javaguides.backend.controller;


import net.javaguides.backend.exception.ResourceNotFoundException;
import net.javaguides.backend.model.Personel;
import net.javaguides.backend.repository.PersonelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v2/personel")
public class PersonelController {
    @Autowired
    private PersonelRepository personelRepository;

    @GetMapping
    public List<Personel> getAllPersonel(){
        return personelRepository.findAll();
    }

    @PostMapping
    public Personel createPersonel(@RequestBody Personel personel){
        return personelRepository.save(personel);
    }

    @GetMapping("/{recordId}")
    public ResponseEntity<Personel> getPersonelById(@PathVariable("recordId")Integer recordId){
        Personel personel = personelRepository.findById(Integer.valueOf(recordId))
                .orElseThrow(() -> new ResourceNotFoundException(recordId + "RecordId Değerine Sahip Personel Bulunamadı !"));
        return ResponseEntity.ok(personel);
    }

    @PutMapping("{recordId}")
    public ResponseEntity<Personel> updatePersonel(@PathVariable Integer recordId, @RequestBody Personel personelDetails) {
        Personel updatePersonel = personelRepository.findById(recordId)
                .orElseThrow(() -> new ResourceNotFoundException(recordId + " RecordId Değerine Sahip Personel Bulunamadı !"));

    updatePersonel.setTckn(personelDetails.getTckn());
    updatePersonel.setPersonelNameSurname(personelDetails.getPersonelNameSurname());
    updatePersonel.setPersonelPhoneNumber(personelDetails.getPersonelPhoneNumber());
    updatePersonel.setPersonelMailAddress(personelDetails.getPersonelMailAddress());
    updatePersonel.setPersonelStartDate(personelDetails.getPersonelStartDate());
    updatePersonel.setPersonelFinishDate(personelDetails.getPersonelFinishDate());
    updatePersonel.setPersonelAddress(personelDetails.getPersonelAddress());
    updatePersonel.setPersonelSalaryInformation(personelDetails.getPersonelSalaryInformation());

    personelRepository.save(updatePersonel);

    return ResponseEntity.ok(updatePersonel);
    }

    @DeleteMapping("{recordId}")
    public ResponseEntity<HttpStatus> deletePersonel(@PathVariable Integer recordId){
        Personel personel = personelRepository.findById(recordId)
                .orElseThrow(()->new ResourceNotFoundException(recordId + "RecordId Değerine Sahip Personel Bulunamadı !"));
        personelRepository.delete(personel);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

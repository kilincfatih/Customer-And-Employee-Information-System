package net.javaguides.backend.controller;

import net.javaguides.backend.exception.ResourceNotFoundException;
import net.javaguides.backend.model.Customer;
import net.javaguides.backend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/customers")
public class CustomerController {
    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping
    public List<Customer> getAllCustomer(){
        return customerRepository.findAll();
    }

    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer){
        return customerRepository.save(customer);
    }

    @GetMapping("/{recordId}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable("recordId") Integer recordId){
        Customer customer = customerRepository.findById(Integer.valueOf(recordId))
                .orElseThrow(() -> new ResourceNotFoundException(recordId + " RecordId Değerine Sahip Müşteri Bulunamadı !"));
        return ResponseEntity.ok(customer);
    }
    @PutMapping("{recordId}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Integer recordId,@RequestBody Customer customerDetails){
        Customer updateCustomer = customerRepository.findById(recordId)
                .orElseThrow(()->new ResourceNotFoundException(recordId + " RecordId Değerine Sahip Müşteri Bulunamadı !"));

        updateCustomer.setVknTckn(customerDetails.getVknTckn());
        updateCustomer.setCustomerCompanyNameSurname(customerDetails.getCustomerCompanyNameSurname());
        updateCustomer.setCustomerPhoneNumber(customerDetails.getCustomerPhoneNumber());
        updateCustomer.setCustomerMailAddress(customerDetails.getCustomerMailAddress());
        updateCustomer.setCustomerDebtInformation(customerDetails.getCustomerDebtInformation());

        customerRepository.save(updateCustomer);

        return ResponseEntity.ok(updateCustomer);
    }

    @DeleteMapping("{recordId}")
    public ResponseEntity<HttpStatus> deleteCustomer(@PathVariable Integer recordId){
        Customer customer = customerRepository.findById(recordId)
                .orElseThrow(()->new ResourceNotFoundException(recordId + " RecordId Değerine Sahip Müşteri Bulunamadı !"));
        customerRepository.delete(customer);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

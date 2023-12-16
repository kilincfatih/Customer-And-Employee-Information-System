package net.javaguides.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Id;
import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "record_id")
    private Integer recordId;

    @Column(name = "vkn_tckn")
    private String vknTckn;

    @Column(name = "customer_company_name_surname")
    private String customerCompanyNameSurname;

    @Column(name = "customer_phone_number")
    private String customerPhoneNumber;

    @Column(name = "customer_mail_address")
    private String customerMailAddress;

    @Column(name = "customer_debt_information")
    private String customerDebtInformation;
}

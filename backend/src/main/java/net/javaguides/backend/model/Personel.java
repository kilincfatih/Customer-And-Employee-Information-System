package net.javaguides.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "personel")
public class Personel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "record_id")
    private Integer recordId;

    @Column(name = "tckn")
    private String tckn;

    @Column(name = "personel_name_surname")
    private String personelNameSurname;

    @Column(name = "personel_phone_number")
    private String personelPhoneNumber;

    @Column(name = "personel_mail_address")
    private String personelMailAddress;

    @Column(name = "personel_start_date")
    private LocalDateTime personelStartDate;

    @Column(name = "personel_finish_date")
    private LocalDateTime personelFinishDate;

    @Column(name = "personel_address")
    private String personelAddress;

    @Column(name = "personel_salary_information")
    private String personelSalaryInformation;
}

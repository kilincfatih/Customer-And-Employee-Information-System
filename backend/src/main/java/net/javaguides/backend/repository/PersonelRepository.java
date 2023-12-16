package net.javaguides.backend.repository;

import net.javaguides.backend.model.Personel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonelRepository extends JpaRepository<Personel, Integer> {
}

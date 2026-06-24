package org.vote.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.vote.entities.Options;

@Repository
public interface OptionsRepository extends JpaRepository<Options, Long> {
}

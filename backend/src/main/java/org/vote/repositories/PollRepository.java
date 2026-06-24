package org.vote.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.vote.entities.Poll;

import java.util.Collection;
import java.util.List;

@Repository
public interface PollRepository extends JpaRepository<Poll,Long> {

    List<Poll> findAllByUserId(Long id);
}

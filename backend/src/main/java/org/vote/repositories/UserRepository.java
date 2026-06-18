package org.vote.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.vote.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

}

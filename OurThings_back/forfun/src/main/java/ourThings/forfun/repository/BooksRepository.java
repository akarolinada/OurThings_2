package ourThings.forfun.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ourThings.forfun.models.Books;

public interface BooksRepository extends JpaRepository<Books,Integer>{

}

package ourThings.forfun.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ourThings.forfun.models.Books;
import ourThings.forfun.repository.BooksRepository;

@Service
public class BooksService {
	
	@Autowired
	private BooksRepository booksRepository;
	
	public List<Books> booksList(){
		return booksRepository.findAll();
	}
	
	

}

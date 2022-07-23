package ourThings.forfun.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ourThings.forfun.models.Books;
import ourThings.forfun.services.BooksService;

@CrossOrigin
@RestController
@RequestMapping("forfun")
public class BooksController {
	
	@Autowired
	private BooksService booksService;
	
	@GetMapping("books/list")
	public List<Books> booksList(){
		List<Books> books = booksService.booksList();
		return books;
	}
}

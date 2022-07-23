package ourThings.forfun.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Books {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id_book;
	
	@Column(nullable=false, length=150)
	private String bok_tittle;
	
	@Column(nullable=false,length=150)
	private String bok_author;
	
	@Column(nullable=true,length=150)
	private String bok_image;

	public Integer getId_book() {
		return id_book;
	}

	public void setId_book(Integer id_book) {
		this.id_book = id_book;
	}

	public String getBok_tittle() {
		return bok_tittle;
	}

	public void setBok_tittle(String bok_tittle) {
		this.bok_tittle = bok_tittle;
	}

	public String getBok_author() {
		return bok_author;
	}

	public void setBok_author(String bok_author) {
		this.bok_author = bok_author;
	}

	public String getBok_image() {
		return bok_image;
	}

	public void setBok_image(String bok_image) {
		this.bok_image = bok_image;
	}
}

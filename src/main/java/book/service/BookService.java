package book.service;

import book.model.dto.BookDto;
import book.model.mapper.BookMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Service
public class BookService {

    private final BookMapper bookMapper;

    @Autowired
    public BookService(BookMapper bookMapper) {
        this.bookMapper = bookMapper;
    }

    // 1. 책 등록
    public boolean write(BookDto bookDto){
        System.out.println("BookController.write");
        System.out.println("bookDto = " + bookDto);
        return bookMapper.write(bookDto);
    } // f end

    // 비밀번호 조회
    public boolean pwdMatch(BookDto bookDto){
        System.out.println("BookService.pwdMatch");
        System.out.println("bookDto = " + bookDto);
        return bookMapper.pwdMatch(bookDto);
    } // f end

    // 2. 책 전체 조회
    public List<BookDto> findAll(){
        System.out.println("BookService.findAll");
        return bookMapper.findAll();
    } // f end

    // 3. 책 개별 조회
    public BookDto findByBno(int bno){
        System.out.println("BookService.findByBno");
        System.out.println("bno = " + bno);
        return bookMapper.findByBno(bno);
    } // f end

    // 4. 책 수정
    public boolean update(BookDto bookDto){
        System.out.println("BookService.update");
        System.out.println("bookDto = " + bookDto);
        return bookMapper.update(bookDto);
    } // f end

    // 5. 책 삭제
    public boolean delete(int bno){
        System.out.println("BookService.delete");
        System.out.println("bno = " + bno);
        return bookMapper.delete(bno);
    } // f end

}

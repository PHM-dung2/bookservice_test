package book.controller;

import book.model.dto.BookDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import book.service.BookService;

import java.util.List;

@RestController
@RequestMapping("/book")
@CrossOrigin("http://192.168.40.45:5173")
public class BookController {

    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    // 1. 책 등록
    @PostMapping
    public boolean write(@RequestBody BookDto bookDto){
        System.out.println("BookController.write");
        System.out.println("bookDto = " + bookDto);
        return bookService.write(bookDto);
    } // f end

    // 비밀번호 조회
    @PostMapping("/match")
    public boolean pwdMatch(@RequestParam int bno, @RequestBody BookDto bookDto){
        System.out.println("BookController.pwdMatch");
        bookDto.setBno(bno);
        System.out.println("bookDto = " + bookDto);
        return bookService.pwdMatch(bookDto);
    } // f end

    // 2. 책 전체 조회
    @GetMapping
    public List<BookDto> findAll(){
        System.out.println("BookController.findAll");
        return bookService.findAll();
    } // f end

    // 3. 책 개별 조회
    @GetMapping("/view")
    public BookDto findByBno(@RequestParam int bno){
        System.out.println("BookController.findByBno");
        System.out.println("bno = " + bno);
        return bookService.findByBno(bno);
    } // f end

    // 4. 책 수정
    @PutMapping
    public boolean update(@RequestParam int bno, @RequestBody BookDto bookDto){
        System.out.println("BookController.update");
        // 가져온 bno dto에 저장
        bookDto.setBno(bno);
        System.out.println("bookDto = " + bookDto);
        return bookService.update(bookDto);
    } // f end

    @DeleteMapping
    // 5. 책 삭제
    public boolean delete(@RequestParam int bno){
        System.out.println("BookController.delete");
        System.out.println("bno = " + bno);
        return bookService.delete(bno);
    } // f end

}

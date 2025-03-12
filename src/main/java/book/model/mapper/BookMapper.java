package book.model.mapper;

import book.model.dto.BookDto;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface BookMapper {
    @Insert( "INSERT INTO book( btitle, bwriter, bcomment, bpwd )  VALUES ( #{btitle}, #{bwriter}, #{bcomment}, #{bpwd} )" )
    boolean write(BookDto bookDto);
    @Select( "SELECT count(*) FROM book WHERE bno = #{bno} && bpwd = #{bpwd} ")
    boolean pwdMatch(BookDto bookDto);
    @Select( "SELECT * FROM book")
    List<BookDto> findAll();
    @Select( "SELECT * FROM book WHERE bno = #{bno}" )
    BookDto findByBno(int bno);
    @Update( "UPDATE book SET btitle = #{btitle}, bwriter = #{bwriter}, bcomment = #{bcomment} WHERE bno = #{bno}" )
    boolean update(BookDto bookDto);
    @Delete( "DELETE FROM book WHERE bno = #{bno}" )
    boolean delete(int bno);
}

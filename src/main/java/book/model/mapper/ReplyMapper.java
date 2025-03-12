package book.model.mapper;

import book.model.dto.ReplyDto;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ReplyMapper {
    @Insert( "INSERT INTO reply( rname, rcomment, rpwd, bno ) VALUES ( #{rname}, #{rcomment}, #{rpwd}, #{bno} )" )
    boolean write(ReplyDto replyDto);
    @Select( "SELECT count(*) FROM reply WHERE rno = #{rno} && bno = #{bno} && rpwd = #{rpwd}" )
    boolean pwdMatch(ReplyDto replyDto);
    @Select( "SELECT * FROM reply WHERE bno = #{bno}" )
    List<ReplyDto> findByBno(int bno);
    @Delete( "DELETE FROM reply WHERE rno = #{rno}" )
    boolean delete(int rno);
}

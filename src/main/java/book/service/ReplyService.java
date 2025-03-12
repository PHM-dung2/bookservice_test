package book.service;

import book.model.dto.ReplyDto;
import book.model.mapper.ReplyMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
public class ReplyService {

    private final ReplyMapper replyMapper;

    @Autowired
    public ReplyService(ReplyMapper replyMapper) {
        this.replyMapper = replyMapper;
    }

    // 1. 리뷰 작성
    public boolean write(ReplyDto replyDto){
        System.out.println("ReplyController.write");
        System.out.println("replyDto = " + replyDto);
        return replyMapper.write(replyDto);
    } // f end
    // 비밀번호 조회
    @PostMapping("/match")
    public boolean pwdMatch(ReplyDto replyDto){
        System.out.println("ReplyController.pwdMatch");
        System.out.println("replyDto = " + replyDto);
        return replyMapper.pwdMatch(replyDto);
    } // f end

    // 2. 리뷰 전체 조회
    @GetMapping
    public List<ReplyDto> findByBno(int bno){
        System.out.println("ReplyController.findBybno");
        System.out.println("bno = " + bno);
        return replyMapper.findByBno(bno);
    }

    // 3. 리뷰 삭제
    @DeleteMapping
    public boolean delete(int rno){
        System.out.println("ReplyController.delete");
        System.out.println("rno = " + rno);
        return replyMapper.delete(rno);
    } // f end

}

package book.controller;

import book.model.dto.ReplyDto;
import book.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reply")
@CrossOrigin("http://192.168.40.45:8080")
public class ReplyController {

    private final ReplyService replyService;

    @Autowired
    public ReplyController(ReplyService replyService) {
        this.replyService = replyService;
    }

    // 1. 리뷰 작성
    @PostMapping
    public boolean write(@RequestParam int bno, @RequestBody ReplyDto replyDto){
        System.out.println("ReplyController.write");

        replyDto.setBno(bno);
        System.out.println("replyDto = " + replyDto);
        return replyService.write(replyDto);
    } // f end
    // 비밀번호 조회
    @PostMapping("/match")
    public boolean pwdMatch(@RequestParam int rno, @RequestParam int bno, @RequestBody ReplyDto replyDto){
        System.out.println("ReplyController.pwdMatch");

        replyDto.setBno(bno);
        replyDto.setRno(rno);
        System.out.println("replyDto = " + replyDto);
        return replyService.pwdMatch(replyDto);
    } // f end

    // 2. 리뷰 전체 조회
    @GetMapping
    public List<ReplyDto> findByBno(@RequestParam int bno){
        System.out.println("ReplyController.findBybno");
        System.out.println("bno = " + bno);
        return replyService.findByBno(bno);
    }

    // 3. 리뷰 삭제
    @DeleteMapping
    public boolean delete(@RequestParam int rno){
        System.out.println("ReplyController.delete");
        System.out.println("rno = " + rno);
        return replyService.delete(rno);
    } // f end

}

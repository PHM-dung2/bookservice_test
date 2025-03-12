package model.dto;

import lombok.*;

@Getter @Setter @ToString
@NoArgsConstructor @AllArgsConstructor
public class ReplyDto {
    private int rno;
    private String rname;
    private String rcomment;
    private String rpwd;
    private int bno;
}

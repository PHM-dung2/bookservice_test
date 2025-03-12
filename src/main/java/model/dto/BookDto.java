package model.dto;

import lombok.*;

@Getter @Setter @ToString
@NoArgsConstructor @AllArgsConstructor
public class BookDto {
    private int bno;
    private String btitle;
    private String bwriter;
    private String bcomment;
    private String bpwd;
}

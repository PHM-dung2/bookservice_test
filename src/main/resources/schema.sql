-- 책 테이블
DROP TABLE IF EXISTS book;

create table book(
	bno int unsigned auto_increment,
	btitle varchar(100) not null,
    bwriter varchar(30) not null,
    bcomment varchar(255) not null,
    bpwd varchar(30) not null,
    constraint primary key( bno )
);

-- 댓글 테이블
DROP TABLE IF EXISTS reply;

create table reply(
	rno int unsigned auto_increment,
    rname varchar(30) not null,
    rcomment varchar(255) not null,
    rpwd varchar(30) not null,
    bno int unsigned,
    constraint primary key( rno ),
    constraint foreign key( bno ) references book ( bno ) on update cascade on delete cascade
);


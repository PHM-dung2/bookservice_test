drop database if exists bookservice;
create database bookservice;
use bookservice;

create table book(
	bno int unsigned auto_increment,
	btitle varchar(100) not null,
    bwriter varchar(30) not null,
    bcomment varchar(255) not null,
    bpwd varchar(30) not null,
    constraint primary key( bno )
);

INSERT INTO book( btitle, bwriter, bcomment, bpwd ) VALUES
( '소년이 온다', '한강', '2014년 만해 문학상', '1234' ),
( '급류', '정대건', '2020년 한경신춘문예', '1234' ),
( '모순', '양귀자', '1998년 초판이 출간된 이후 132쇄를 찍으며 여전히 많은 사랑을 받고 있는 작품', '1234' );

SELECT * FROM book;

create table reply(
	rno int unsigned auto_increment,
    rname varchar(30) not null,
    rcomment varchar(255) not null,
    rpwd varchar(30) not null,
    bno int unsigned,
    constraint primary key( rno ),
    constraint foreign key( bno ) references book ( bno ) on update cascade on delete cascade
);

INSERT INTO reply( rname, rcomment, rpwd, bno ) VALUES
( '유재석', '저도 추천해요!', '1234', 1 ),
( '강호동', '노벨 한강 화이팅', '2345', 1 ),
( '신동엽', '한경신춘문예 잘보고 있습니다.', '3456', 2 );

SELECT * FROM reply;

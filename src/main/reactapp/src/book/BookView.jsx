import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Reply from "./Reply";

export default function BookView( props ){
    useEffect( () => { onFindByBno(); }, [] );
    const [ book, setBook ] = useState( { btitle: '', bwriter: '', bcomment: '', bpwd: '' } )
    const [ searchParams ] = useSearchParams();
    const bno = searchParams.get('bno');
    
    const onFindByBno = async ( props ) => {
        try{
            const response = await axios.get( `http://192.168.40.45:8080/book/view?bno=${bno}` )
            const info = response.data;
            setBook( { ...book, btitle: info.btitle, bwriter: info.bwriter, bcomment: info.bcomment } )
            
        }catch( e ){ console.log( e ); }
    } // f end

    const onBoardMatch = async ( props ) => {
        try{
            let bpwdInput = prompt('비밀번호를 입력해주세요');
            let jsonBpwd = { bpwd: bpwdInput };
            const response = await axios.post( `http://192.168.40.45:8080/book/match?bno=${bno}`, jsonBpwd );
            return response.data;
        }catch( e ){ console.log( e ); }
        return false;
    } // f end

    const onUpdate = async () => {
        const boardMatch = await onBoardMatch();
        if( boardMatch == true){
            location.href = `./bookupdate?bno=${bno}`;
        }else{ alert('비밀번호가 일치하지 않습니다.') }
    } // f end

    const onDelete = async ( props ) => {
        try{
            const boardMatch = await onBoardMatch();
            if( boardMatch == true ){
                if( !confirm('정말 삭제하시겠습니까?') ){ return; }
                
                const response = await axios.delete( `http://192.168.40.45:8080/book?bno=${bno}` );
                if( response.data == true ){
                    alert('게시물 삭제가 완료되었습니다.');
                    location.href = './book';
                }else{ alert('게시물 삭제 실패'); }
            }else{ alert('비밀번호가 일치하지 않습니다.') }
        }catch( e ){ console.log( e ); }
        
    } // f end

    return(<>
        <div>
            <h2> 책 추천 개별 조회  </h2> <br/>
            <table>
                <tbody>
                    <tr>
                        <th> 책 제목 </th>
                        <td> { book.btitle } </td>
                    </tr>
                    <tr>
                        <th> 작가명 </th>
                        <td> { book.bwriter } </td>
                    </tr>
                    <tr>
                        <th> 내용 </th>
                        <td> { book.bcomment } </td>
                    </tr>
                    <tr>
                        <td> <button type="button" onClick={ onUpdate } > 수정 </button> </td>
                        <td> <button type="button" onClick={ onDelete } > 삭제 </button> </td>
                    </tr>
                </tbody>
            </table> <br/>

            <Reply bno={bno} />

        </div>
    </>)
} // f end
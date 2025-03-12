import { useEffect, useState } from "react"
import axios from 'axios';

const ReplyComp = ( props ) => {

    const bno = props.bno;
    const onReplyMatch = async ( rno ) => {
        try{
            console.log( rno );
            let rpwdInput = prompt('비밀번호를 입력해주세요');
            let jsonRpwd = { rpwd: rpwdInput };
            const response = await axios.post( `http://192.168.40.45:8080/reply/match?rno=${rno}&bno=${bno}`, jsonRpwd );
            return response.data;
        }catch( e ){ console.log( e ); }
        return false;
    } // f end

    const onDelete = async ( rno ) => {
        try{
            const replyMatch = await onReplyMatch( rno );
            if( replyMatch == true ){
                if( !confirm('정말 삭제하시겠습니까?') ){ return; }
                
                const response = await axios.delete( `http://192.168.40.45:8080/reply?&rno=${rno}` );
                if( response.data == true ){
                    alert('리뷰 삭제가 완료되었습니다.');
                    onFindAll();
                }else{ alert('리뷰 삭제 실패'); }
            }else{ alert('비밀번호가 일치하지 않습니다.') }
        }catch( e ){ console.log( e ); }
    } // f end

    return(<>
        <table border={1} >
            <tbody>
                <tr>
                    <th> 작성자 </th>
                    <td> { props.rname } </td>
                </tr>
                <tr>
                    <th> 리뷰 내용 </th>
                    <td> { props.rcomment } </td>
                </tr>
            </tbody>
        </table>
        <button type="button" onClick={ (e) => { onDelete( props.rno ) } } > 삭제 </button>
    </>)
} // f end

export default function Reply( props ){

    const bno = props.bno;
    const [ formData, setFormData ] = useState( { rname: '', rpwd: '', rcomment: '' } );
    const formDataChange = ( e ) => {
        console.log( e.target.value );
        setFormData( { ...formData, [ e.target.name ] : e.target.value } )
    } // f end
    const [ replys, setReplys ] = useState( [] );
    useEffect( () => { onFindAll(); }, [] );

    const onFindAll = async ( props ) => {
        const response = await axios.get( `http://192.168.40.45:8080/reply?bno=${bno}` );
        if( response.data.rname == '' ){ return; }
        setReplys( response.data );
    } // f end

    const onPost = async ( props ) => {
        if( !confirm('리뷰를 등록하시겠습니까?') ){ return; } 
        try{
            const response = await axios.post( `http://192.168.40.45:8080/reply?bno=${bno}`, formData );
            if( response.data == true ){
                alert('리뷰 등록이 완료되었습니다.');
                setFormData( { rname: '', rpwd: '', rcomment: '' } );
                onFindAll();
            }else{ alert('리뷰 등록 실패'); }
        }catch( e ){ console.log( e ); }
    } // f end

    return(<>
        <h3> 리뷰 작성</h3> <br/>
            
            <form>
                <table>
                    <tbody>
                        <tr>
                            <th> 작성자 </th>
                            <td> <input type="text" name="rname" value={formData.rname} onChange={ formDataChange } /> </td>
                        </tr>
                        <tr>
                            <th> 비밀번호 </th>
                            <td> <input type="text" name="rpwd" value={formData.rpwd} onChange={ formDataChange } /> </td>
                        </tr>
                    </tbody>
                </table>
                <div style={ { fontWeight: "bold" } } > 리뷰 내용 </div>
                <textarea cols={50} rows={5} name="rcomment" value={formData.rcomment} onChange={ formDataChange } ></textarea> <br/>
                <button type="button" onClick={ onPost } > 등록 </button>
            </form> <br/>

        <h3> 리뷰 </h3> <br/>
        <div>
            {
                replys.map( ( reply, index ) => {
                    return(
                        <ReplyComp key={ index } rno={ reply.rno } rname={ reply.rname } 
                                    rcomment={ reply.rcomment } bno={ bno } 
                                     onFindAll={ onFindAll() } />
                    )
                })
            }
        </div>
    </>)
} // f end
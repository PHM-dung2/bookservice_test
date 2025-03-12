import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function BookUpdate( props ){
    useEffect( () => { onFindByBno(); }, [] );
    const [ searchParams ] = useSearchParams();
    const bno = searchParams.get('bno');

    const [ formData, setFormData ] = useState( { btitle: '', bwriter: '', bcomment: '', bpwd: '' })
    const formDataChange = ( e ) => {
        console.log( e );
        setFormData( { ...formData, [ e.target.name ] : e.target.value } );
    } // f end
    
    const onFindByBno = async ( props ) => {
        try{
            console.log( bno );
            const response = await axios.get( `http://192.168.40.45:8080/book/view?bno=${bno}` )
            const info = response.data;
            console.log( info )
            setFormData( info )
            
        }catch( e ){ console.log( e ); }
    } // f end

    const onCancle = () => {
        location.href = `./bookview?bno=${bno}`;
    } // f end

    const onUpdate = async ( props ) => {
        try{
            if( !confirm('정말 수정하시겠습니까?') ){ return; }
            
            const response = await axios.put( `http://192.168.40.45:8080/book?bno=${bno}`, formData );
            if( response.data == true ){
                alert('게시물 수정이 완료되었습니다.');
                location.href = './book';
            }else{ alert('게시물 수정 실패'); }
        }catch( e ){ console.log( e ); }
        
    } // f end

    return(<>
        <div>
            <h2> 책 추천 수정  </h2> <br/>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <th> 책 제목 </th>
                            <td> <input type="text" name="btitle" value={ formData.btitle } onChange={ formDataChange } /> </td>
                        </tr>
                        <tr>
                            <th> 작가명 </th>
                            <td> <input type="text" name="bwriter" value={ formData.bwriter } onChange={ formDataChange } /> </td>
                        </tr>
                        <tr>
                            <th> 내용 </th>
                            <td> <input type="text" name="bcomment" value={ formData.bcomment } onChange={ formDataChange } /> </td>
                        </tr>
                        <tr>
                            <td> <button type="button" onClick={ onUpdate } > 수정 </button> </td>
                            <td> <button type="button" onClick={ onCancle } > 취소 </button> </td>
                        </tr>
                    </tbody>
                </table> 
            </form> <br/>
        </div>
    </>)
} // f end
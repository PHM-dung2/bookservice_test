import axios from "axios";
import { useState } from "react"

export default function BookWrite( props ){

    const [ formData, setFormData ] = useState( { btitle: '', bwriter: '', bcomment: '', bpwd: '' })
    const formDataChange = ( e ) => {
        setFormData( { ...formData, [ e.target.name ] : e.target.value } );
    } // f end

    const onPost = async ( props ) => {
        if( !confirm('추천 책을 등록하시겠습니까?') ){ return; }

        try{
            const response = await axios.post(`http://192.168.40.45:8080/book`, formData );
            if( response.data == true ){
                alert('등록 성공');
                location.href = './Book';
            }else{ alert('등록 실패') }
        }catch( e ){ console.log( e ) }
    } // f end

    return(<>
        <div>
            <h2> 책 추천 등록 </h2> <br/>
            
            <form>
                <table>
                    <tbody>
                        <tr>
                            <th> 책 제목 </th>
                            <td> <input type="text" name="btitle" onChange={ formDataChange } /> </td>
                        </tr>
                        <tr>
                            <th> 작가명 </th>
                            <td> <input type="text" name="bwriter" onChange={ formDataChange } /> </td>
                        </tr>
                        <tr>
                            <th> 비밀번호 </th>
                            <td> <input type="password" name="bpwd" onChange={ formDataChange } /> </td>
                        </tr>
                        <tr>
                            <th> 내용 </th>
                            <td> <textarea type="text" name="bcomment" value={ formData.bcomment } onChange={ formDataChange } cols={40} rows={5} /> </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> <button type="button" onClick={ onPost } > 등록 </button> </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </>)
} // f end
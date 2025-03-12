import axios from 'axios';
import { useEffect, useState } from 'react';

const BookComp = ( props ) => {

    const viewLink = ( bno ) => {
        location.href = `./bookview?bno=${bno}`;
    } // f end

    return(<>
        <tr onClick={ (e) => { viewLink( props.bno ) } }>
            <td>{ props.index+1 }</td>
            <td>{ props.btitle }</td>
            <td>{ props.bwriter }</td>
        </tr>
    </>)
} // f end

export default function Book( props ){
    const [ books, setBooks ] = useState( [] );
    useEffect( () => { onFindAll(); }, [] );

    const onFindAll = async ( props ) => {
        try{ 
            const response = await axios.get( 'http://192.168.40.45:8080/book' );
            setBooks( response.data );
        }catch( error ){ console.log( error); }
    } // f end

    return(<>
        <div>
            <h2> 책 추천 전체 조회 </h2> <br/>

            <table border={1}>
                <thead>
                    <tr>
                        <th> 번호 </th>
                        <th> 책 제목 </th>
                        <th> 작가 </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        books.map( ( book, index ) => {
                            return(
                                <BookComp key={ book.bno } index={ index } bno={ book.bno } btitle={ book.btitle } bwriter={ book.bwriter } />
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    </>)
} // f end
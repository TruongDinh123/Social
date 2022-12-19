import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { makeRequest } from '../../../axios';
import "./key.scss";
import { CgSearch } from 'react-icons/cg';

const Key = ({ key }) => {
    const { data } = useQuery(["key"], () =>
        makeRequest.get('/keys').then((res) => {
            return res.data
        })
    )

    return (
        <div className="key">
            <Link to={"/"} href="#" className="btn-back">&#8249; Trở về trang chủ</Link>
            <h2 className='key-title'>TỪ KHÓA DU LỊCH</h2>
            <div className='key-search flex'>
                <input type="text" placeholder='Tìm kiếm...' >
                </input>
                <span className="key-icon"><CgSearch></CgSearch></span>
            </div>
            <table class="list-table table table-hover">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Tên từ khóa</th>
                    <th scope="col">Giải thích</th>
                    <th scope="col">Minh họa</th>

                </tr>
                {data?.map((key) => (
                    <tbody>
                        <tr>
                            <td>{key.key_id}</td>
                            <td>{key.key_name}</td>
                            <td>{key.description}</td>
                            <td>
                                <img src={"/upload/" + key.img} alt="" /> </td>

                        </tr>

                    </tbody>
                ))
                }
            </table>
            <ul class="pagination pagination-sm">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </div>
    )
}

export default Key
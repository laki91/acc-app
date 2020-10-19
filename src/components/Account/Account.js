import React from 'react';
import { Link } from 'react-router-dom';

const Account = ({account, edit, deleteAccount}) => {

    const buttons = edit ? (
        <>
            <td><button onClick={()=>{deleteAccount(account.id)}} className='btn btn-danger' >Delete</button></td>
            <td><Link to={"/edit/" + account.id} className='btn btn-warning' >Edit</Link></td>
        </>
    ) : null;

    return (
        <tr>
            <td>{account.id}</td>
            <td>{account.name}</td>
            <td>{account.lastname}</td>
            <td>{account.phone}</td>
            <td>{account.email}</td>
            {buttons}
        </tr>
    )
}

export default Account;
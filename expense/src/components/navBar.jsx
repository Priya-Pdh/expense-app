import React from 'react';

export default function NavBar() {
    return (
        <>
        <div className='my-5'>
            <ul className='flex justify-end'>
                <li className='mx-5'>Expenses</li>
                <li className='mx-5'>Purchase Request</li>
                <li className='mx-5'>Notification</li>
                <li className='mx-5 mr-10'>Admin</li>
            </ul>
        </div>
        </>
    )
}
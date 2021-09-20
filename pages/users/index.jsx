export const getStaticProps = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data =  await res.json();
    return{
        props:{persons:data}
    }
}

import React from 'react'
import Link from 'next/dist/client/link';
import Head from 'next/dist/shared/lib/head';
const users = ({persons}) => {
    return (
        <>
        <Head>
            <title>All users</title>
        </Head>
            {persons.map(person=>(
                <Link href={`/users/${person.id}`} key={person.id}>
                    <h1>{person.name}</h1>
                </Link>
            ))}
        </>
    )
}

export default users

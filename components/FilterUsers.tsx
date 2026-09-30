"use client"

type User = {
    id: number;
    name: string;
    username: string;
}
import {  useState } from "react";

export default function FilterUsers({users}: {users: User[] }) {
    const [searchTerm, setSearchTerm] = useState("");
    const filterUsers = users.filter(User => {
        return User.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    })

    return(<>
        <div>
            <input type="text" name="" placeholder="search user" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
            </div>

        <ul>
            {filterUsers.map((user: User)=>{
                return <li key={user.id}>{user.name}</li>
            })}
        </ul>
    </>
    )



}
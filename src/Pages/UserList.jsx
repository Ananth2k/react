import { Link } from "react-router-dom";

const Users = [
    {id:1,name:"Viay"},
    {id:2,name:"ajith"},
    {id:3,name:"surya"}

]

function UserList(){
    return(
        <>
        <h2>User List</h2>
              <ul>
            {Users.map((user)=>(
                <li key={user.id}>
                <Link to={`/user/${user.id}/${user.name}`}>{user.name}</Link>
                </li>
            ))}
        </ul>
        </>
    );
}

export default UserList;
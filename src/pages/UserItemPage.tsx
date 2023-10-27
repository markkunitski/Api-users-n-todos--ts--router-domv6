import axios from 'axios';
import * as React from 'react';
import List from '../components/List';
import { IUser } from '../types/types';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

type UserItemParams = {
    id: string;
};
const UserItemPage: React.FunctionComponent = () => {
    const [user, setUser] = React.useState<IUser | null>(null)
    const params = useParams<UserItemParams>();
    const navigate = useNavigate();

    function handleClick() {
      navigate('/users');
    }
    React.useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            <button style={{margin: '50px'}} onClick={handleClick}>BACK</button>
            <h1>Page of: {user?.name}</h1>
            {user?.email}
            <span>
                {user?.address.city} - {user?.address.street} - {user?.address.zipcode}
            </span>
        </div>


    );
};

export default UserItemPage;

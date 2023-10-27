import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ITodo, IUser } from '../types/types';
import List from '../components/List';
import UserItem from '../components/UserItem';
import { useNavigate } from 'react-router-dom';

const UserPage: React.FunctionComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (error) {
            alert(error)
        }
    }
    const navigate = useNavigate();
    return (
        <List items={users}
            renderItem={(user: IUser) =>
                <UserItem fakeClick={(user) => navigate(`/users/${user.id}`)} key={user.id} user={user}></UserItem>}></List>


    );
};

export default UserPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: number;
  username: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // 发起后端API请求获取用户列表
    axios.get('http://127.0.0.1:8080/users')
      .then((response) => {
        // 请求成功，更新用户列表
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>ID:</strong> {user.id}, <strong>Username:</strong> {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

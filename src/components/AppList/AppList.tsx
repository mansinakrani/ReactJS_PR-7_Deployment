import { useEffect, useState } from 'react'
import "./App.css";
import UserInfo from '../UserInfo/UserInfo';
import { UserList } from '../UserList/UserList';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../redux/actions/UserListAction';
import { RootState } from '../redux/reducers';

interface user {
    id: number;
    avatar: string;
    first_name: string; 
    last_name: string;
    email: string; 
    status: string;
    access: string;
    icon: string;
}

type json = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: [];
  };
export const AppList = () => {
    const users = useSelector((state: RootState) => state.allUsers.users);
    const dispatch = useDispatch();
    const [user, setUser] = useState<user | null>(null);
    const [userDetails, setUserDetails] = useState<json>({} as json);
    const [paginationItems, setPaginationItems] = useState<JSX.Element[]>();

   const fetchUsers = async (pageNumber: number) => {
     await fetch(`${process.env.REACT_APP_URL}?page=${pageNumber}`)
          .then((res) => { 
              if(res.ok) 
              return res.json();
               })
          .then((res: json) => {
            setUserDetails(res);
            dispatch(setUsers(res.data));
          })
          .catch((error: string) => {return error;});
      };
    
      useEffect(() => {
        fetchUsers(1);
      }, []);

    useEffect(() => {
        const pageNumbers: number[] = [];
        if (typeof userDetails != undefined)
          for (let i = 1; i <= userDetails.total_pages; i++) {
            pageNumbers.push(i);
          }
        const items: JSX.Element[] = pageNumbers.map((number) => {
          return (
            <span
              key={number}
              onClick={() => {
                fetchUsers(number);
              }}
            >
              {number}
            </span>
          );
        });
        setPaginationItems(items);
      }, [userDetails]);
    
    
    return (
      <>
          <div className="App">
          {/* <UserList/> component which contains user list */}
          <div className='userList'>
           <UserList users={users} handleMouseOver={(user) => { setUser(user); } } paginationItems={paginationItems} />
           </div>
          {/* <UserInfo/> component which contains user profile */}
          <div className='user-info'>
          <UserInfo info={user}  />
          </div>
          </div>
      </>
    );
};


import React from 'react'
import "./UserList.css"
import Pagination from "../Pagination/Pagination";



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

interface Props {
    handleMouseOver: (user: user | null) => void;
    users: user[];
    paginationItems: JSX.Element[] | undefined;
}

  export const UserList = (props: Props) => { 
      
    return (
            <div className='content'>
                <div className='user-list'>
                    <table>
                        <thead>
                            <tr style={{ textAlign: "left" }}>
                              <th style={{ width: "40%" }}>Name</th>
                              <th style={{ width: "30%" }}>Status</th>
                              <th style={{ width: "30%" }}>Access</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {props.users.map((user, index) => {
                              return (
                                <>
                                {index === 0 && (
                                <tr key={user.id}>
                                    <td>
                                        <div className='user'>
                                            <img src={user.avatar} alt="avatar" />
                                            <div className='user-name'>
                                                <div className='fname'>{user.first_name + " " + user.last_name}</div>
                                                <div>{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
    
                                    <td>
                                        <div className='user-status'>
                                            <div className='active'>Active</div>           
                                        </div>
                                    </td>
    
                                    <td>
                                        <div className='user-status'>
                                            <div>Owner</div>         
                                        </div>
                                    </td>
    
                                    <td>
                                        <div className='user-icon'>
                                        
                                        <i className="fa fa-lock"></i>          
                                        </div>
                                    </td>
                                </tr>
                                )}


                                {index !== 0 && (
                                <tr  key={user.id}
                                onMouseEnter={() => {
                                    props.handleMouseOver(user);
                                }}
                                onMouseLeave={() => {
                                    props.handleMouseOver(null);
                                }}
                                >
                                <td>
                                    <div className='user'>
                                        <img src={user.avatar} alt='avatar'/>
                                        <div className='user-name'>
                                            <div className='fname'>{user.first_name + " " + user.last_name}</div>
                                            <div>{user.email}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className='user-status'>
                                        <select value={user.status}>
                                            <option className='active' value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>
                                    </div>
                                </td>

                                <td>
                                    <div className='user-status'>
                                        <select value={user.access}>
                                            <option value="Manager">Manager</option>
                                            <option value="Read">Read</option>
                                        </select>
                                    </div>

                                </td>

                                <td>
                                    <div className='user-icon'>
                                        <i className="fa fa-trash-o"></i>
                                    </div>
                                </td>
                                </tr>
                                )}
                                </>
                              );
                            })}
                            </tbody>

                            <tfoot>
                                <tr>
                                    <td colSpan={4} align="center" >
                                     <Pagination paginationItems={props.paginationItems} />
                                    </td>
                                </tr>
                            </tfoot>
                    </table>
                </div>
            </div>
    );
};

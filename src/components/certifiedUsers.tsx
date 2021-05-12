import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/effects/Posts';
import { Table } from 'react-bootstrap';
import { Post } from '../redux/interfaces/post';
import { AppState } from '../redux/store';
import Sidebar from './Sidebar';


const CertifiedUsers: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch]);
    const employees = useSelector((state: AppState) => state.employees);

    return  (
    <>
    <Sidebar />
    <div className="container"  style={{marginTop: "80px"}}>
          <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th><input type="checkbox"/></th>
                    <th style={{verticalAlign : 'middle', textAlign :'center'}}>Name</th>
                    <th style={{verticalAlign : 'middle', textAlign :'center'}}>Employee ID</th>
                    <th style={{verticalAlign : 'middle', textAlign :'center'}}>Joined On</th>
                    <th style={{verticalAlign : 'middle', textAlign :'center'}}>Certified Date</th>
                    <th style={{verticalAlign : 'middle', textAlign :'center'}}>Issue Certificate</th> 
                </tr>
            </thead>
            <tbody>
                {employees.employees.map((post: Post) => (   
                
                  <tr>
                      <td style={{verticalAlign : 'middle', textAlign :'center'}}>{post.id}</td>
                      <td style={{verticalAlign : 'middle', textAlign :'center'}}>{post.name}</td>
                      <td style={{verticalAlign : 'middle', textAlign :'center'}}>{post.emp_id}</td>
                      <td style={{verticalAlign : 'middle', textAlign :'center'}}>{post.joined_on}</td>
                      <td style={{verticalAlign : 'middle', textAlign :'center'}}>{post.certified_date}</td>
                      <td style={{verticalAlign : 'middle', textAlign :'center'}}>{post.issue_certificate}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
    </div>
  </>)
}

export default CertifiedUsers;
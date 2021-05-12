import React, { useEffect, useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../redux/effects/Courses';
import { course, courseData } from '../redux/interfaces/course';
import { AppState } from '../redux/store';
import Sidebar from './Sidebar';

const CourseList: React.FC = () => {
    const courses = useSelector((state: AppState) => state.courses);
    // const [total,setTotal] = useState(1);
    const [csdata, setCsdata] = useState<courseData[]>([]);
    const [show, setShow] = useState(false);
    const [addModal, setAddmodal] = useState(false);
    const [viewer, setViewers] =  useState<courseData[]>([]);
    
    console.log("courses", courses);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCourses());

        // console.log("viewer", viewer); 
      
    }, [dispatch]);

    useEffect(() => {
        courses.courses.map((eachCourse) => {
            // console.log("eachCourse", eachCourse);
            const { data } = eachCourse;
            // setTotal(total_pages);
            setCsdata(data);
           
        })
    }, [courses]);
    console.log("csdata", csdata)

    const handleClose = () => setShow(false);
    const handleCloseAddModal = () => setAddmodal(false);

    const handleShow = (id: any) => (event: any) => {
        setShow(true);
        console.log(id);

        const newObj = csdata.filter(item => item.id == id)

        setViewers(csdata.filter(item => item.id == id));
        console.log("newObj", newObj);
    }

    const handleShowAddModal = () => {
        setAddmodal(true);
    }


    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <>
        <Sidebar />
        <div className="container">
            <Button style={{ float: "right", margin: "20px" }} onClick={handleShowAddModal}>Add new</Button>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Tutor</th>
                        <th>Attendees</th>
                    </tr>
                </thead>
                <tbody>
                    {csdata.map(course =>(
                    <tr>
                        <td>{course.id}</td>   
                        <td>{course.name}</td>       
                        <td>{course.tutor}</td>
                        <td>{course.attendees} <span className="link" onClick={handleShow(course.id)}>View</span></td>
                    </tr>
                ))}
                </tbody>
            </Table>


            <Pagination>{items}</Pagination>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Attendees</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {viewer.map(user =>(
                    <li>
                        <span>{user.list + ','}</span>    
                    </li>
                ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={addModal} onHide={handleCloseAddModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New Attendees</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>Name</label>
                        <input type="text" />
                        <br />
                        <label>Tutor</label>
                        <input type="text" />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        </>
    )

}

export default CourseList;
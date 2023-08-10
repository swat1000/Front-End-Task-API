import React, { useState } from 'react';
import Table from '../components/Table'; 
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const [searchTerm, setSearchTerm] = useState('');

   
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 50;

   
    const apiResponse = [
        {
            "id": 1,
            "first_name": "nainu",
            "last_name": "wadhwa",
            "resume_name": "first one",
            "level": "internship",
            "profession": "ancd",
            "email": "nainu@gmail.com",
            "phone_number": "861728",
            "city": "city",
            "country": "country",
            "pincode": "124001",
            "github": "github",
            "twitter": "twitter",
            "linkedin": "bejded",
            "portfolio_link": "portfolio_link",
            "languages": "english,hindi",
            "summary": "cbejbkejbfdkebf",
            "accomplishment": "dbejdbwkdbkwbdkwbdw",
            "education": [
                {
                    'education_id': 1,
                    "school_name": "school_name",
                    "school_location": "school_location",
                    "degree": "degree",
                    "field_of_study": "field_of_study",
                    "degree_start_date": "2022-12-09",
                    "degree_end_date": "2022-12-09",
                    "current_attend_here": 0
                },

                {
                    "education_id": 2,
                    "school_name": "school_name2",
                    "school_location": "school_location2",
                    "degree": "degree2",
                    "field_of_study": "field_of_study2",
                    "degree_start_date": "2022-12-09",
                    "degree_end_date": "2022-12-09",
                    "current_attend_here": 1
                },
                {
                    "education_id": 3,
                    "school_name": "school_name2",
                    "school_location": "school_location2",
                    "degree": "degree2",
                    "field_of_study": "field_of_study2",
                    "degree_start_date": "2022-12-09",
                    "degree_end_date": "2022-12-09",
                    "current_attend_here": 1
                }
            ],
            "work_experience": [
                {
                    "work_id": 1,
                    "job_title": "job_title",
                    "company_name": "company_name",
                    "company_location": "company_location",
                    "start_date": "022-12-09",
                    "end_date": "2022-12-09",
                    "Description": "Description",
                    "currently_work_here": 0
                },
                {
                    "work_id": 2,
                    "job_title": "job_title",
                    "company_name": "company_name",
                    "company_location": "company_location",
                    "start_date": "022-12-09",
                    "end_date": "2022-12-09",
                    "Description": "Description",
                    "currently_work_here": 0
                }
            ],
            "projects": [
                {
                    "project_id": 1,
                    "project_name": "project_name",
                    "project_link": "project_link",

                    "description": "description"
                },
                {
                    "project_id": 2,
                    "project_name": "project_name",
                    "project_link": "project_link",
                    "description": "description"
                }
            ],
            "skills": [
                {
                    "skills_id": 1,
                    "top_technical_skills": "java,python",
                    "technical_skills": "java,python",
                    "non_technical_skills": "java,python",
                    "softwares": "java,python"
                }
            ],
            "certificates": [
                {
                    "certi_id": 1,
                    "certi_name": "name here ",
                    "certi_link": "link here",
                    "certi_start_date": "2022-12-09",
                    "certi_end_date": "2022-12-09",
                    "currently_pursuing": 0
                },
                {
                    "certi_id": 2,
                    "certi_name": "certi_name",
                    "certi_link": "certi_link",
                    "certi_start_date": "2022-12-09",
                    "certi_end_date": "2022-12-09",
                    "currently_pursuing": 0
                }
            ]
        }
    ];


    const filteredData = apiResponse.filter((record) =>
        record.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>


            <input
                type="text"
                placeholder="Search by first name"
                className="px-4 py-2 border rounded-md mb-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />


            <Table data={currentRecords} />


            <div className="mt-4 flex items-center">
                <span className="mr-2">Page {currentPage}</span>
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-2 py-1 border rounded-md"
                >
                    Previous
                </button>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentRecords.length < recordsPerPage}
                    className="px-2 py-1 border rounded-md"
                >
                    Next
                </button>
                <Link to="/" style={{ height: "30px", background: "green" , padding:"10px", textDecoration: "none", color: "white", marginRight: "10px"}}>Home Page</Link>
                <Link to="/resume" style={{ height: "30px", background: "green" , padding:"10px", textDecoration: "none", color: "white"}}>Check resume Task 2</Link>
            </div>
        </div>
    );
};

export default Dashboard;

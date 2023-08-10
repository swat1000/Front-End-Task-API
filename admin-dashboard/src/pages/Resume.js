import React from 'react';
import { Link } from 'react-router-dom';
import '../Resume.css'

function Resume() {
    const resumeData = {
        "first_name": "John",
        "last_name": "Doe",
        "resume_name": "Experienced Software Developer",
        "level": "Professional",
        "profession": "Software Developer",
        "email": "johndoe@example.com",
        "phone_number": "123-456-7890",
        "city": "New York",
        "country": "United States",
        "pincode": "10001",
        "github": "johndoe",
        "twitter": "johndoe",
        "linkedin": "johndoe",
        "portfolio_link": "https://johndoe.dev",
        "languages": "English, Spanish",
        "summary": "Experienced software developer with a passion for creating high-quality, efficient, and scalable applications.",
        "accomplishment": "Led a team of developers to successfully deliver a critical project ahead of schedule.",
        "education": [
            {
                "education_id": 1,
                "school_name": "University of California, Berkeley",
                "school_location": "Berkeley, CA",
                "degree": "Bachelor of Science",
                "field_of_study": "Computer Science",
                "degree_start_date": "2015-08-25",
                "degree_end_date": "2019-05-15",
                "current_attend_here": 0
            },
            {
                "education_id": 2,
                "school_name": "Stanford University",
                "school_location": "Stanford, CA",
                "degree": "Master of Science",
                "field_of_study": "Software Engineering",
                "degree_start_date": "2020-01-10",
                "degree_end_date": "2022-05-30",
                "current_attend_here": 0
            }
        ],
        "work_experience": [
            {
                "work_id": 1,
                "job_title": "Senior Software Engineer",
                "company_name": "TechCo",
                "company_location": "San Francisco, CA",
                "start_date": "2019-06-01",
                "end_date": "2022-12-31",
                "description": "Developed and maintained critical components of the company's flagship product.",
                "currently_work_here": 0
            },
            {
                "work_id": 2,
                "job_title": "Software Engineer",
                "company_name": "InnovateSoft",
                "company_location": "Mountain View, CA",
                "start_date": "2017-03-15",
                "end_date": "2019-05-31",
                "description": "Contributed to the design and implementation of various software projects.",
                "currently_work_here": 0
            }
        ],
        "projects": [
            {
                "project_id": 1,
                "project_name": "E-commerce Platform",
                "project_link": "https://ecommerce.example.com",
                "description": "Developed a scalable e-commerce platform with user-friendly interface and secure payment processing."
            },
            {
                "project_id": 2,
                "project_name": "Online Learning Portal",
                "project_link": "https://elearning.example.com",
                "description": "Built an online learning portal with interactive courses and progress tracking features."
            }
        ],
        "skills": [
            {
                "skills_id": 1,
                "top_technical_skills": "JavaScript, Python",
                "technical_skills": "React, Node.js, Express, MongoDB",
                "non_technical_skills": "Team Leadership, Communication",
                "softwares": "Visual Studio Code, Git"
            }
        ],
        "certificates": [
            {
                "certi_id": 1,
                "certi_name": "Certified Full Stack Web Developer",
                "certi_link": "https://certificates.example.com/full-stack",
                "certi_start_date": "2021-03-15",
                "certi_end_date": "2021-05-15",
                "currently_pursuing": 0
            },
            {
                "certi_id": 2,
                "certi_name": "Agile Project Management",
                "certi_link": "https://certificates.example.com/agile",
                "certi_start_date": "2020-09-10",
                "certi_end_date": "2020-09-30",
                "currently_pursuing": 0
            }
        ]
    }


    return (
        <div >
            <header>
                <h1 className='Full-name'>{`${resumeData.first_name} ${resumeData.last_name}`}</h1>
                <p>{resumeData.profession}</p>
                {/* Add other contact details */}
            </header>
            <div className='resume'>
                <div className='column-1'>


                    <section className="contacts">
                        <h2>Contact Details</h2>
                        <p>{resumeData.phone_number}</p>
                        <p>{resumeData.email}</p>
                        <p>{resumeData.city}</p>
                    </section>

                    <section className="summary">
                        <h2>Summary</h2>
                        <p>{resumeData.summary}</p>
                    </section>

                    <section className="skills">
                        <h2>SKILLS</h2>
                        {resumeData.skills.map((keyskills) => (
                            <div key={keyskills.skills_id}>
                                <p>{keyskills.top_technical_skills}</p>
                                <p>{keyskills.technical_skills}</p>
                                <p>{keyskills.non_technical_skills}</p>
                                <p>{keyskills.softwares}</p>

                            </div>
                        ))}
                    </section>

                    <section className="education">
                        <h2>Education</h2>
                        {resumeData.education.map((edu) => (
                            <div key={edu.education_id}>
                                <p>{edu.school_name}</p>
                                <p>{edu.school_location}</p>
                                <p>{edu.degree}</p>
                                <p>{edu.field_of_study}</p>
                                <p>{edu.degree_start_date}-{edu.degree_end_date}</p>

                            </div>
                        ))}
                    </section>
                </div>

                <div>

                    <section className="work-experience">
                        <h2>Work Experience</h2>
                        {resumeData.work_experience.map((work) => (
                            <div key={work.work_id[2]}>
                                <p>{work.job_title}</p>
                                <p>{work.company_name}</p>
                                <p>{work.company_location}</p>
                                <p>{work.start_date}-{work.end_date}</p>
                                <p>{work.description}</p>
                            </div>
                        ))}
                    </section>

                    <section className="projects">
                        <h2>Projects</h2>
                        {resumeData.projects.map((project) => (
                            <div key={project.project_id}>
                                <p>{project.project_name}</p>
                                <p>{project.description}</p>
                                <p>{project.project_link}</p>

                            </div>
                        ))}
                       
                    </section>
                    <Link to="/" style={{ height: "30px", background: "green" , padding:"10px", textDecoration: "none", color: "white", marginRight: "10px"}}>Home Page</Link>
                    <Link to="/admin/dashboard" style={{ height: "30px", background: "green" , padding:"10px", textDecoration: "none", color: "white"}}> Go to Admin Dashboard</Link>
                </div>
            </div>


        </div>
    );
}

export default Resume;

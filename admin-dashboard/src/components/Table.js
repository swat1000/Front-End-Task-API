import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const CustomTable = ({ data }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'first_name', headerName: 'First Name', flex: 2 },
    { field: 'last_name', headerName: 'Last Name', flex: 2 },
    { field: 'email', headerName: 'Email', flex: 2},
    { field: 'resume_name', headerName: 'Resume Name',flex:2 },
    { field: 'level', headerName: 'Level',flex:2 },
    { field: 'profession', headerName: 'Profession',flex:2 },
    { field: 'phone_number', headerName: 'Phone Number',flex:2 },
    { field: 'city', headerName: 'City',flex:2 },
    { field: 'country', headerName: 'Country',flex:2 },
    { field: 'pincode', headerName: 'Pincode',flex:2 },
    { field: 'github', headerName: 'GitHub',flex:2 },
    { field: 'twitter', headerName: 'Twitter',flex:2 },
    { field: 'linkedin', headerName: 'LinkedIn',flex:2 },
    { field: 'portfolio_link', headerName: 'Portfolio Link',flex:2 },
    { field: 'languages', headerName: 'Languages',flex:2 },
    { field: 'summary', headerName: 'Summary',flex:2 },
    { field: 'accomplishment', headerName: 'Accomplishment',flex:2 },
    { field: 'education', headerName: 'Education',flex:2, renderCell: (params) => (
      <div>
        {params.value.map((edu, eduIndex) => (
          <div key={eduIndex}>
            <p>{edu.school_name}</p>
            <p>{edu.field_of_study}</p>
            <p>{edu.degree_start_date} - {edu.degree_end_date}</p>
          </div>
        ))}
      </div>
    )},
    { field: 'work_experience', headerName: 'Work Experience',flex:2, renderCell: (params) => (
      <div>
        {params.value.map((work, workIndex) => (
          <div key={workIndex}>
            <p>{work.job_title}</p>
            <p>{work.company_name}</p>
            <p>{work.company_location}</p>
            <p>{work.start_date} - {work.end_date}</p>
            <p>{work.Description}</p>
          </div>
        ))}
      </div>
    )},
    { field: 'projects', headerName: 'Projects',flex:2, renderCell: (params) => (
      <div>
        {params.value.map((project, projectIndex) => (
          <div key={projectIndex}>
            <p>{project.project_name}</p>
            <p>{project.project_link}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    )},
    { field: 'skills', headerName: 'Skills',flex:2, renderCell: (params) => (
      <div>
        {params.value.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <p>{skill.top_technical_skills}</p>
            <p>{skill.technical_skills}</p>
            <p>{skill.non_technical_skills}</p>
            <p>{skill.softwares}</p>
          </div>
        ))}
      </div>
    )},
    { field: 'certificates', headerName: 'Certificates',flex:2, renderCell: (params) => (
      <div>
        {params.value.map((certi, certiIndex) => (
          <div key={certiIndex}>
            <p>{certi.certi_name}</p>
            <p>{certi.certi_link}</p>
            <p>{certi.certi_start_date} - {certi.certi_end_date}</p>
            <p>{certi.currently_pursuing}</p>
          </div>
        ))}
      </div>
    )},
  ];

  return (
    <div style={{ height: 600, width: '100%' , background: "lightgrey"}}>
      <DataGrid
        rows={data}
        columns={columns}
        pagination
      />
    </div>
  );
};

export default CustomTable;

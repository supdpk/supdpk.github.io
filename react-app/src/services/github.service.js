export const githubUserAPI ={
    base_url:"https://supdpk.github.io/api",
    github_api_url:"https://api.github.com",
    getUser:async ()=>{
        let result = { name:'',title:'',about:'',img:'',linkedin:'',github:'#' }
        let request = await fetch(`${githubUserAPI.github_api_url}/users/supdpk`);
        let response = await request.json();
        result.name = response.name;
        result.title = response.company;
        result.about = response.bio;
        result.img = response.avatar_url;
        result.linkedin = response.blog;
        request.github = response.html_url;
        return result;
    },
    getWorkExperience:async ()=>{
        let result = [] ;
        let request = await fetch(`${githubUserAPI.base_url}/work-experience.json`);
        let response = await request.json();
        result = response.work_experience;
        return result;
    },
    getSkills:async ()=>{
        let result = [] ;
        let request = await fetch(`${githubUserAPI.base_url}/skills.json`);
        let response = await request.json();
        result = response.skills;
        return result;
    },
    getProjects:async ()=>{
        let result = [] ;
        let request = await fetch(`${githubUserAPI.base_url}/projects.json`);
        let response = await request.json();
        result = response.projects;
        return result;
    },
    getContactInfo:async ()=>{
        let result = [] ;
        let request = await fetch(`${githubUserAPI.base_url}/contact.json`);
        let response = await request.json();
        result = response.contact;
        return result;
    },
    getRepositories:async ()=>{
        let result = [] ;
        let request = await fetch(`${githubUserAPI.base_url}/repositories.json`);
        let response = await request.json();
        result = response.repositories;
        return result;
    }
}
export const githubUserAPI ={
    getUser:async ()=>{
        let result = { name:'',title:'',about:'',img:'',linkedin:'',github:'#' }
        let request = await fetch('https://api.github.com/users/supdpk');
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
        let request = await fetch('https://supdpk.github.io/api/work-experience.json');
        let response = await request.json();
        result = response.work_experience;
        return result;
    },
    getSkills:async ()=>{
        let result = [] ;
        let request = await fetch('https://supdpk.github.io/api/skills.json');
        let response = await request.json();
        result = response.skills;
        return result;
    },
    getProjects:async ()=>{
        let result = [] ;
        let request = await fetch('https://supdpk.github.io/api/projects.json');
        let response = await request.json();
        result = response.projects;
        return result;
    }
}
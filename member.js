function skillsMember(){
  return {
    name: 'skills',
    description: 'A member of the skills team',
    skills: ['JavaScript', 'Node.js', 'React'],
    experience: 5, // years
    role: 'Developer',
    projects: [
      {
        name: 'Project A',
        description: 'A web application built with React and Node.js',
        duration: '6 months'
      },
      {
        name: 'Project B',
        description: 'An API service for data processing',
        duration: '3 months'
      }
    ]
  };
}
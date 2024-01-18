const subjects = [
    {
      code: "MATH-101",
      name: "Mathematics",
      description: "Mathematics",
      credits: 3,
      created_at: new Date(),
      updated_at: new Date(),
      teacher: "John Doe",
    },
    {
      code: "PHYS-101",
      name: "Physics",
      description: "Physics",
      credits: 4,
      created_at: new Date(),
      updated_at: new Date(),
      teacher: "Jane Doe",
    },
    {
      code: "CHEM-101",
      name: "Chemistry",
      description: "Chemistry",
      credits: 4,
      created_at: new Date(),
      updated_at: new Date(),
      teacher: "John Doe",
    },
  ];
  
  function getSubjects(res) {
    return subjects;
  }
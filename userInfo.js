// userInfo.js

function createUserProfiles(names, modifiedNames) {
  let id = 1;
  return names.map((name, index) => {
    return {
      originalName: name,
      modifiedName: modifiedNames[index],
      id: id++
    };
  });
}

// Example usage
const names = ["Frimpong", "Evans", "Opoku"];
const modifiedNames = ["frimpong", "EVANS", "opoku"];
const profiles = createUserProfiles(names, modifiedNames);
console.log(profiles);

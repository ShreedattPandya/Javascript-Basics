const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// NOTE: for-in doesn't work with arrays

let tech = ["js", "java", "cpp"]

for (const key in tech) {
    console.log(key);
}
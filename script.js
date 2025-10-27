function firstWord(s) {
    if (!s) return ""; 

 
    s = s.trim();
    const index = s.indexOf(" ");


    return index === -1 ? s : s.slice(0, index);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

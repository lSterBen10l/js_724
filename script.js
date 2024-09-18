const people = [
    {
        name: "Laila Johanne Handelsby",
        role: "Rektor",
        image: "https://example.com/laila.png"
    },
    {
        name: "Torben Andersen",
        role: "Assisterende rektor",
        image: "https://example.com/torben.png"
    },
    {
        name: "Martin Sandø-Frank",
        role: "Studieleder",
        image: "https://example.com/martin.png"
    },
    {
        name: "Cathrine Mannsaker",
        role: "Undervisningsleder",
        image: "https://example.com/cathrine.png"
    },
    {
        name: "Sissel Moen",
        role: "Administrasjonsleder",
        image: "https://example.com/sissel.png"
    }
];

document.getElementById('searchBtn').addEventListener('click', function() {
    const input = document.getElementById('nameInput').value.trim().toLowerCase();
    const output = document.getElementById('output');
    output.innerHTML = ''; 
    
    const matchedPerson = people.filter(person => 
        person.name.toLowerCase().includes(input)
    );
    
    if (matchedPerson.length > 0) {
        matchedPerson.forEach(person => {
            const personDiv = document.createElement('div');
            personDiv.className = 'person';
            
            const personImage = document.createElement('img');
            personImage.src = person.image;
            personImage.alt = person.name;
            
            const personName = document.createElement('h2');
            personName.textContent = person.name;
            
            const personRole = document.createElement('p');
            personRole.textContent = person.role;
            
            personDiv.appendChild(personImage);
            personDiv.appendChild(personName);
            personDiv.appendChild(personRole);
            
            output.appendChild(personDiv);
        });
    } else {
        output.textContent = "No match found!";
    }

    document.getElementById('nameInput').value = '';
});

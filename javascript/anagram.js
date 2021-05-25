function validAnagram(first, second){
    if(first.length !== second.length){
        return false;
    }

    const lookup = {};

    for(let i=0; i< first.length; i++){
        console.log('initial lookup', lookup)
        let letter = first[i];
        console.log("letter", letter);
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        console.log('initial lookup', lookup[letter])

    }

    console.log("Lookup: " , lookup)
    for (let i=0; i < second.length; i++){
        let letter = second[i];
        console.log("second letter", letter);
        if(!lookup[letter]){

            return false;
        } else {
            lookup[letter] -= 1;
            console.log("lookup letter second", lookup[letter])
        }
    }

    return true;
}

validAnagram('anagram', 'nagaram');
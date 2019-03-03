const listMagicWords = [
    {
        id: 1,
        magicWord: 'Elefante',
        againstWord: 'Pica-Pau',
    },
    {
        id: 2,
        magicWord: 'Basquete',
        againstWord: 'Michael Jordan',
    },
    {
        id: 3,
        magicWord: 'Caminhão',
        againstWord: 'Árvore de Natal',
    }
];

findWord = (text) => {
    const word = listMagicWords.filter(wordMagic => wordMagic.magicWord === text);
    if (word && word.length > 0) {
        return word[0];
    }
    return false;
}

module.exports = findWord;
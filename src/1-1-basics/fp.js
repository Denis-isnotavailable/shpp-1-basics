const insteadCsv = `
44.38,34.33,Алушта,31440,
49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некомент

#
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,
#45.40,34.29,Джанкой,43343,

# в цьому файлі три рядки-коментарі :)
`;

const testText = 'Цей рядок для тесту Вінниця і ще для тесту Біла Церква';

const splitRow = (row) => {
    const splitedRow = row.split(',');
    return {
        x: splitedRow[0],
        y: splitedRow[1],
        name: splitedRow[2],
        population: Number(splitedRow[3])
    }
}

const secondFunc = (citiesInfo) => {
    const reg = new RegExp(Object.keys(citiesInfo).join('|'), 'gi');
    const replacer = (match) => {
        return `${match} (${citiesInfo[match].rating} місце в ТОП-10 найбільших міст України, населення ${citiesInfo[match].population} чоловік)`;
    };
    return testText.replace(reg, replacer);
}

const firstFunc = (insteadCsv) => {
    const citiesInfo = insteadCsv
        .split(/\n/)
        .filter(row => row && row[0] !== '#')
        .map(row => splitRow(row))
        .sort((a, b) => b.population - a.population)
        .slice(0, 10)
        .reduce((acc, row, i) => {
            return {
                ...acc, [row.name]: { population: row.population, rating: i + 1 }
            }
        }, {});

    console.log('citiesInfo: ', citiesInfo);

    return secondFunc(citiesInfo);
}


console.log('result: ', firstFunc(insteadCsv));
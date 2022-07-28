const shoppingList = ['Lechuga', 'Tomate', 'Papa', 'Sal', 'Pimienta'];

const addElement = shoppingList.push('Aceite de Girasol');

const subtractElement = shoppingList.pop();

const movieList = [

    {
        titulo: 'Ant-Man',
        autor:  'Peyton Reed',
        fecha:  "2015/07/16"
    },
    {
        titulo: 'Ironman',
        autor: 'Jon Favreau',
        fecha: "2008/04/30"
    },
    {
        titulo: 'Spiderman',
        autor: 'Jon Watts',
        fecha: "2021/12/17"
    }];


const movieDates = movieList.filter(movie => new Date(movie.fecha).valueOf() > new Date("2009").valueOf());

const directorList = movieList.map( Object => { return Object.autor }) ;

const titleList = movieList.map(Object => { return Object.titulo });

const directorAndTitleList = directorList.concat(titleList);

const directorAndTitleList2 = [...directorList, ...titleList];

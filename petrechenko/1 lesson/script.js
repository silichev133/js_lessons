const numberOfFilms = +prompt(
  "Сколько фильмов вы уже смотрели?",
  "Введите ответ"
);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов: ");
  const b = prompt("На сколько вы его оцените: ");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

if (personalMovieDB.numberOfFilms < 10) {
  console.log("Просмотренно доваольно мало фильмов");
} else if (
  personalMovieDB.numberOfFilms >= 10 &&
  personalMovieDB.numberOfFilms < 30
) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.numberOfFilms >= 30) {
  console.log("Вы киноман!");
} else {
  console.log("Произошла ошибка");
}
console.log(personalMovieDB);

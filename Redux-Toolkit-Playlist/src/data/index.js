import { faker } from "@faker-js/faker/locale/tr";

// Bu dosyanın Redux ile ilgisi yok
// Rastgele oluşturan film ve şarkı fonksiyonlarını dışa aktarır

export const createRandomMovie = () => {
  return `${faker.word.adjective()} ${faker.word.noun()}`;
};

export const createRandomSong = () => {
  return faker.music.songName();
};

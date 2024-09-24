import ErrorRepository from "../ErrorRepository";

describe('Проверка методов класса ErrorRepository', () => { 

  test('Проверка добавления в репозиторий ', () => {
    let errRepo = new ErrorRepository();
    errRepo.add(1, 'Ошибка 1');
    expect(errRepo.translate(1)).toBe('Ошибка 1');
  });


  test('Проверка выдачи сообщения об ошибке по коду ', () => {
    let errRepo = new ErrorRepository();
    errRepo.add(1, 'Ошибка 1');
    errRepo.add(2, 'Ошибка 2');
    errRepo.add(3, 'Ошибка 3');
    expect(errRepo.translate(2)).toBe('Ошибка 2');
  });

  test('Проверка выдачи сообщения о неизвестной ошибке по несуществующему коду ', () => {
    let errRepo = new ErrorRepository();
    errRepo.add(1, 'Ошибка 1');
    errRepo.add(2, 'Ошибка 2');
    errRepo.add(3, 'Ошибка 3');
    expect(errRepo.translate(4)).toBe('Unknown error');
  });


});

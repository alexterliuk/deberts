import toObj from '../convert-query-string-to-object';

describe(`convertQueryStringToObject converts string to object`, () => {
  it(`removes '?' if string starts with it`, () => {
    const res = toObj('?bla=14');
    expect(res).toEqual({ bla: '14' });
  });

  it(`converts obtained object to JSON`, () => {
    const res = toObj('bla=14', true);
    // prettier-ignore
    expect(res).toEqual("{\"bla\":\"14\"}");
  });

  it(`makes nested object if meets '.'`, () => {
    const res = toObj('user.firstName=John&user.lastName=Doe');
    const expectRes = {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
    expect(res).toEqual(expectRes);
  });

  it(`decodes uri component if needed`, () => {
    const res = toObj('name=John%20Doe', true);
    // prettier-ignore
    expect(res).toEqual("{\"name\":\"John Doe\"}");
  });

  it(`converts bla=14`, () => {
    const res = toObj('bla=14');
    expect(res).toEqual({ bla: '14' });
  });

  it(`converts name=John&surname=Doe`, () => {
    const res = toObj('name=John&surname=Doe');
    expect(res).toEqual({ name: 'John', surname: 'Doe' });
  });

  it(`converts ?cars.brands.subaru.models=Impreza&production.year=1998`, () => {
    const res = toObj('?cars.brands.subaru.model=Impreza&production.year=1998');
    const expectRes = {
      cars: {
        brands: {
          subaru: {
            model: 'Impreza',
          },
        },
      },
      production: {
        year: '1998',
      },
    };
    expect(res).toEqual(expectRes);
  });
});

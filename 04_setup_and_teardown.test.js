// Repeating Setup

let cityDatabase = [];

function initializeCityDatabase() {
  cityDatabase = ["Vienna", "San Juan", "London"];
}

function clearCityDatabase() {
  cityDatabase = [];
}

function isCity(name) {
  return cityDatabase.includes(name);
}

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test("city database has Vienna with repeating setup", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

// One-Time Setup

beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test("city database has Vienna with one time setup", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

// Scoping

let foodDatabase = [];

function initializeFoodDatabase() {
  foodDatabase = ["Vienna - Wiener Schnitzel", "San Juan - Mofongo"];
}

function clearFoodDatabase() {
  foodDatabase = [];
}

function isValidCityFoodPair(city, food) {
  return foodDatabase.includes(`${city} - ${food}`);
}

describe("matching cities to foods", () => {
  beforeEach(() => {
    initializeFoodDatabase();
  });

  test("pairs Vienna with Wiener Schnitzel correctly", () => {
    expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
  });
});

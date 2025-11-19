// Using a mock function

function forEach(items, callback) {
  for (const item of items) {
    callback(item);
  }
}

const mockCallback = jest.fn((x) => 42 + x);

test("forEach mock function", () => {
  forEach([0, 1], mockCallback);

  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});

// Mock Return Values

const myMock = jest.fn();

console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());

// Mocking Modules

const axios = require("axios");

class Users {
  static all() {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data);
  }
}

jest.mock("axios");

test("should fetch users", () => {
  const users = [{ name: "Bob" }];
  const res = { data: users };
  axios.get.mockResolvedValue(res);
  return Users.all().then((data) => expect(data).toEqual(users));
});

// Mock Implementations

const foo = () => {};
const mockedFoo = jest.fn(foo);
mockedFoo.mockImplementation((x) => x + 100);

test("foo implementation testing", () => {
  expect(mockedFoo(5)).toBe(105);
});

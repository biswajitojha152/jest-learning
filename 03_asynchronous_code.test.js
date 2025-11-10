// Promises

const fetchData = () => {
  return Promise.resolve("peanut butter");
};

test("the data is peanut butter", () => {
  fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

// Async/Await

test("the data is peanut butter with async await", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

const fetchDataWithError = () => {
  return Promise.reject("error");
};

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchDataWithError();
  } catch (error) {
    expect(error).toMatch("error");
  }
});

// async and await with .resolves or .rejects

test("the data is peanut butter with async await and .resolves", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error with async await and .rejects", async () => {
  await expect(fetchDataWithError()).rejects.toMatch("error");
});

// Callbacks

function fetchDataWithCallback(callback) {
  setTimeout(() => callback(null, "peanut butter"), 1000);
}

test("the data is peanut butter with callback", (done) => {
  function callback(error, data) {
    if (error) {
      done(error); // better to check error message explicitly, stack trace is wrong, and harder to debug
      return;
    }
    expect(data).toBe("peanut butter");
    done();
  }
  fetchDataWithCallback(callback);
});

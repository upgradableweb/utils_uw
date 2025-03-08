import fetchMock from "jest-fetch-mock";
import CreateFetchIt from "../src/index.ts"; // Adjust path if needed

fetchMock.enableMocks();

// Utility function test
describe("URL Parameter Conversion", () => {
  const formatParams = (params: Record<string, string | number | null>) =>
    new URLSearchParams(
      Object.fromEntries(Object.entries(params).filter(([, v]) => v !== null))
    ).toString();

  test("should convert object to URLSearchParams string", () => {
    expect(formatParams({ key1: "value1", key2: 42, key3: null })).toBe(
      "key1=value1&key2=42"
    );
  });
});

// API Client test
describe("FetchIt API Client", () => {
  let FetchIt: any;

  beforeEach(() => {
    fetchMock.resetMocks();
    FetchIt = new (CreateFetchIt({ base_url: "https://api.example.com", authorization: "Bearer test_token" }))("/test-endpoint");
  });

  test("should perform GET request", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ success: true }));

    const response = await FetchIt.get();
    expect(response.data).toEqual({ success: true });
    expect(fetchMock).toHaveBeenCalledWith("https://api.example.com/test-endpoint", {
      method: "GET",
      headers: expect.any(Headers),
    });
  });

  test("should perform POST request", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ created: true }));

    const response = await FetchIt.post({ body: { name: "Test" } });
    expect(response.data).toEqual({ created: true });
    expect(fetchMock).toHaveBeenCalledWith("https://api.example.com/test-endpoint", {
      method: "POST",
      headers: expect.any(Headers),
      body: JSON.stringify({ name: "Test" }),
    });
  });

  test("should handle errors", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ error: "Not Found" }), { status: 404 });

    await expect(FetchIt.get()).rejects.toMatchObject({ data: { error: "Not Found" } });
  });
});

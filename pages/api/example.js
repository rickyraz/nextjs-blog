export default function handler(req, res) {
  // Accessing properties of the incoming request object
  const { method, query, body } = req;
  console.log(`Method: ${method}`);
  console.log(`Query: ${JSON.stringify(query)}`);
  console.log(`Body: ${JSON.stringify(body)}`);

  // Setting response headers
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");

  // Sending response data
  const data = { message: "Hello, World!" };
  res.status(200).json(data);
}

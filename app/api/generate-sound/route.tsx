export async function POST(request: Request) {
  const requestBody = await request.json();

  if (!requestBody.modelUrl) {
    throw new Error("Missing 'model url' field in the request body");
  }

  if (!requestBody.input) {
    throw new Error("Missing 'input' field in the request body");
  }

  if (!process.env.Hugging_Face_Token) {
    throw new Error("Missing 'Hugging Face Url'");
  }

  const modelUrl = requestBody.modelUrl;
  const input = requestBody.input;

  const response = await fetch(modelUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.Hugging_Face_Token}`
    },
    body: JSON.stringify({
      inputs: input
    })
  });

  if (!response.ok) {
    throw new Error("Failed to fetch audio data");
  }

  const audioData = await response.arrayBuffer();

  return new Response(audioData, {
    headers: {
      "Content-Type": "audio/mpeg"
    }
  });
}

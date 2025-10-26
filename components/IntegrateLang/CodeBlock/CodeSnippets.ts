// File: components/IntegrateLang/CodeBlock/CodeSnippets.ts
export const codeSnippets = {
  // 🔹 Node.js (Original)
  "node js": `
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

(async function() {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'delivered@resend.dev',
    subject: 'Hello World',
    html: '<strong>it works!</strong>'
  });

  if (error) {
    return console.log(error);
  }

  console.log(data);
})();
`,

  // 🔹 Python
  python: `
import requests

API_KEY = "re_xxxxxxxxx"
url = "https://api.resend.com/emails"

payload = {
    "from": "onboarding@resend.dev",
    "to": "delivered@resend.dev",
    "subject": "Hello World",
    "html": "<strong>it works!</strong>"
}

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

if response.status_code == 200:
    print("Email sent successfully!", response.json())
else:
    print("Error:", response.text)
`,

  // 🔹 PHP
  php: `
<?php
$apiKey = "re_xxxxxxxxx";
$url = "https://api.resend.com/emails";

$data = [
  "from" => "onboarding@resend.dev",
  "to" => "delivered@resend.dev",
  "subject" => "Hello World",
  "html" => "<strong>it works!</strong>"
];

$options = [
  "http" => [
    "header" => "Authorization: Bearer " . $apiKey . "\\r\\n" .
                "Content-Type: application/json\\r\\n",
    "method" => "POST",
    "content" => json_encode($data)
  ]
];

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);

if ($result === FALSE) {
  echo "Error sending email";
} else {
  echo "Email sent successfully: " . $result;
}
?>
`,

  // 🔹 Java
  java: `
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.OutputStream;

public class Main {
  public static void main(String[] args) throws Exception {
    String apiKey = "re_xxxxxxxxx";
    URL url = new URL("https://api.resend.com/emails");
    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
    conn.setRequestMethod("POST");
    conn.setRequestProperty("Authorization", "Bearer " + apiKey);
    conn.setRequestProperty("Content-Type", "application/json");
    conn.setDoOutput(true);

    String body = "{\\"from\\":\\"onboarding@resend.dev\\",\\"to\\":\\"delivered@resend.dev\\",\\"subject\\":\\"Hello World\\",\\"html\\":\\"<strong>it works!</strong>\\"}";

    try (OutputStream os = conn.getOutputStream()) {
      os.write(body.getBytes("utf-8"));
    }

    if (conn.getResponseCode() == 200) {
      System.out.println("Email sent successfully!");
    } else {
      System.out.println("Error: " + conn.getResponseCode());
    }
  }
}
`,

  // 🔹 Ruby
  ruby: `
require 'net/http'
require 'json'
require 'uri'

uri = URI("https://api.resend.com/emails")
req = Net::HTTP::Post.new(uri)
req["Authorization"] = "Bearer re_xxxxxxxxx"
req["Content-Type"] = "application/json"
req.body = {
  from: "onboarding@resend.dev",
  to: "delivered@resend.dev",
  subject: "Hello World",
  html: "<strong>it works!</strong>"
}.to_json

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(req)
end

puts res.body
`,

  // 🔹 Serverless (AWS Lambda)
  serverless: `
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxx');

export const handler = async (event) => {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'delivered@resend.dev',
    subject: 'Hello World',
    html: '<strong>it works!</strong>'
  });

  if (error) {
    return { statusCode: 500, body: JSON.stringify(error) };
  }

  return { statusCode: 200, body: JSON.stringify(data) };
};
`,

  // 🔹 Elixir
  elixir: `
url = "https://api.resend.com/emails"
headers = [
  {"Authorization", "Bearer re_xxxxxxxxx"},
  {"Content-Type", "application/json"}
]

body = %{
  from: "onboarding@resend.dev",
  to: "delivered@resend.dev",
  subject: "Hello World",
  html: "<strong>it works!</strong>"
}

{:ok, response} = HTTPoison.post(url, Jason.encode!(body), headers)
IO.inspect(response.body)
`,
};

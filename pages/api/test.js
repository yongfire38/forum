export default function handler(req, res) {
  if (req.method == "GET") {
    res.status(200).json({ name: "GET 처리 완료" });
  }
  if (req.method == "POST") {
    res.status(200).json({ name: "POST 처리 완료" });
  }
}

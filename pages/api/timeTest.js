export default function timeTestApi(req, res) {
  let today = new Date();

  res.status(200).json(today.toGMTString());
}

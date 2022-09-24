import CodeSnippets from "../../../models/CodeSnippets";

const getallpens = (req, res) => {
  CodeSnippets.find({}, (err, snippets) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ snippets: snippets });
    }
  });
};

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function pen(req, res) {
  switch (req.method) {
    case "GET":
      await getallpens(req, res);
      break;
    default:
      res.status(405).json({
        code: "MethodNotAllowedError",
        message: `${req.method} is not allowed`,
      });
  }
}

import connectMongoDB from "../../../utils/mongodb";
import CodeSnippets from "../../../models/CodeSnippets";
/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addCodes(req, res) {
  try {
    const {
      title,
      tags,
      hash,
      codepenuser,
      description,
      thumbnail,
      type,
      draft,
    } = req.body;
    await connectMongoDB();
    const codesnippet = await CodeSnippets.create({
      title,
      tags,
      hash,
      codepenuser,
      description,
      thumbnail,
      type,
      draft,
    });
    res.status(200).json(codesnippet);
  } catch (err) {
    res.status(500).json(err);
  }
}

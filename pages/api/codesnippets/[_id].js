import CodeSnippets from "../../../models/CodeSnippets";
import connectMongoDB from "../../../utils/mongodb";

const getpen = (req, res) => {
  const { _id } = req.query;
  connectMongoDB();
  CodeSnippets.findById(_id)
    .then((record, err) => {
      if (record) {
        res.status(200).json(record);
      } else {
        res.status(404).json({});
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

const putpen = (req, res) => {
  const { _id } = req.query;
  connectMongoDB();
  CodeSnippets.findByIdAndUpdate(_id, req.body, { new: true })
    .then((record, err) => {
      if (record) {
        res.status(200).json(record);
      } else {
        res.status(401).json({});
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

const patchpen = (req, res) => {
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
  if (
    [
      title,
      tags,
      hash,
      codepenuser,
      description,
      thumbnail,
      type,
      draft,
    ].indexOf(undefined) !== -1
  ) {
    res.status(422).json({ error: `Invalid body content` });
  }
  putpen(req, res);
};

const deletepen = (req, res) => {
  const { _id } = req.query;
  connectMongoDB();
  CodeSnippets.findByIdAndDelete(_id)
    .then((record, err) => {
      if (record) {
        res.status(200).json(record);
      } else {
        res.status(401).json({});
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function getallpens(req, res) {
  switch (req.method) {
    case "GET":
      await getpen(req, res);
      break;
    case "PUT":
      await putpen(req, res);
    case "PATCH":
      await patchpen(req, res);
    case "DELETE":
      await deletepen(req, res);
  }
}

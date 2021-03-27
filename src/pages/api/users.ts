import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    { id: 1, name: 'allex' },
    { id: 2, name: 'ana' },
  ];

  return res.json(users);
};

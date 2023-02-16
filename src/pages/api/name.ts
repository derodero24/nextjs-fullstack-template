import type { NextApiRequest, NextApiResponse } from 'next';

export interface NameData {
  en: string;
  ja: string;
}

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<NameData>,
) {
  res.status(200).json({ en: 'John', ja: 'ジョン' });
}

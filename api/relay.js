const { Relayer } = require('@openzeppelin/defender-relay-client');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { DEFENDER_API_KEY, DEFENDER_API_SECRET } = process.env;

  if (!DEFENDER_API_KEY || !DEFENDER_API_SECRET) {
    return res.status(500).json({ error: 'Missing Defender credentials' });
  }

  const relayer = new Relayer({
    apiKey: DEFENDER_API_KEY,
    apiSecret: DEFENDER_API_SECRET,
  });

  try {
    const tx = await relayer.sendTransaction(req.body);
    res.status(200).json({ txHash: tx.hash });
  } catch (err) {
    console.error('Relay failed:', err);
    res.status(500).json({ error: err.message });
  }
};

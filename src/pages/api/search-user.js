export default function handler(req, res) {
  const { phone } = req.query;

  const users = [
    {
      name: "Adit Palicha",
      phone: "6296268026",
      insurance: {
        provider: "Acme Insurance",
        policyNumber: "ABC123",
        coverageAmount: 500000,
        premium: 5000,
        expiryDate: "2024-12-31",
      },
    },
    {
      name: "Ayush Saha",
      phone: "9369380032",
      insurance: {
        provider: "Umbrella Health",
        policyNumber: "XYZ456",
        coverageAmount: 1000000,
        premium: 8000,
        expiryDate: "2025-06-30",
      },
    },
    {
      name: "Suumit Shah",
      phone: "9950723495",
      insurance: {
        provider: "HealthGuard",
        policyNumber: "QRS789",
        coverageAmount: 750000,
        premium: 6500,
        expiryDate: "2024-09-15",
      },
    },
    {
      name: "Subhash Roy",
      phone: "7877822223",
      insurance: {
        provider: "SafeHealth",
        policyNumber: "LMN012",
        coverageAmount: 1250000,
        premium: 10000,
        expiryDate: "2025-03-31",
      },
    },
    {
      name: "Amit Malik",
      phone: "7062896083",
      insurance: {
        provider: "HealthWise",
        policyNumber: "PQR345",
        coverageAmount: 800000,
        premium: 7000,
        expiryDate: "2024-11-20",
      },
    },
    {
      name: "Prithish Roy",
      phone: "9136186721",
      insurance: {
        provider: "HealthSecure",
        policyNumber: "DEF678",
        coverageAmount: 1500000,
        premium: 12000,
        expiryDate: "2025-02-15",
      },
    },
  ];

  // Find the user with the provided contact number
  const user = users.find((u) => u.phone === phone);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
}

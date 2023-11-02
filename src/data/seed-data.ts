interface SeedCommerce {
  pkey: string;
  name: string;
}

interface SeedData {
  commerces: SeedCommerce[];
}

export const initialData: SeedData = {
  commerces: [
    {
      pkey: "pk_test_vajalrZHM5GQJLcj",
      name: "Tagcat",
    },
    {
      pkey: "pk_test_WzhX728K5F2l16aP",
      name: "Brainverse",
    },
    {
      pkey: "pk_test_9rP8oZ3piARWTerm",
      name: "Teklist",
    },
    {
      pkey: "pk_test_NQl2Uh9xkTM1hhKL",
      name: "Avaveo",
    },
    {
      pkey: "pk_test_qPmi6VQ7CvgDRO9v",
      name: "Riffpedia",
    },
    {
      pkey: "pk_test_czkrXNBZuTbc9zVm",
      name: "Yozio",
    },
    {
      pkey: "pk_test_ZfXFNn3lKkAyF9om",
      name: "Voonder",
    },
    {
      pkey: "pk_test_OYJaujhhGxJMDjfk",
      name: "Realcube",
    },
    {
      pkey: "pk_test_taKmneWgPYzPDZim",
      name: "Dynazzy",
    },
  ],
};

export class ImgSrc {
  imgSrc: string[] = [
    '../../add-photo-svgrepo-com.svg',
    '../../Arrows_1_Artboard_18-1024.webp',
    '../../rectangle-thin-svgrepo-com.svg',
    '../../download (1).jpg',
    '../../download (2).jpg',
    '../../OIP (1).jpg',
    '../../OIP (2).jpg',
    '../../OIP (3).jpg',
    '../../th (1).jpg',
    '../../search-alt-2-svgrepo-com.svg',
    '../../circle-dashed-svgrepo-com.svg'
  ];
  fetchingData = {
    access_token: 'pjAsuQBFFQ2SAm1',
    model_version: 'insect_id:2.0.0',
    custom_id: null,
    input: {
      latitude: null,
      longitude: null,
      similar_images: true,
      images: [
        'https://insect.kindwise.com/media/images/08230bd54ac84dbba7c6f62a034dd5f6.jpg',
      ],
      datetime: '2024-12-03T06:24:29.292077+00:00',
    },
    result: {
      classification: {
        suggestions: [
          {
            id: '2abe07914ad76570',
            name: 'Papilio machaon',
            probability: 0.9438,
            similar_images: [
              {
                id: 'd7b131fd3adc9bec839d71b3e76fdd29e3a84c77',
                url: 'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/d7b/131fd3adc9bec839d71b3e76fdd29e3a84c77.jpg',
                similarity: 0.834,
                url_small:
                  'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/d7b/131fd3adc9bec839d71b3e76fdd29e3a84c77.small.jpg',
              },
              {
                id: '644a8b50f4f55b677d92a3f1ebe569eee2a65e01',
                url: 'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/644/a8b50f4f55b677d92a3f1ebe569eee2a65e01.jpg',
                similarity: 0.386,
                url_small:
                  'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/644/a8b50f4f55b677d92a3f1ebe569eee2a65e01.small.jpg',
              },
            ],
            details: {
              common_names: [
                'swallowtail',
                'Old World Swallowtail',
                'Common Swallowtail',
                'Common Yellow Swallowtail',
              ],
              taxonomy: {
                class: 'Insecta',
                genus: 'Papilio',
                order: 'Lepidoptera',
                family: 'Papilionidae',
                phylum: 'Arthropoda',
                kingdom: 'Animalia',
              },
              description: {
                value:
                  'Papilio machaon, the Old World swallowtail, is a butterfly of the family Papilionidae. The butterfly is also known as the common yellow swallowtail or simply the swallowtail (a common name applied to all members of the family, but this species was the first to be given the name). It is the type species of the genus Papilio. This widespread species is found in much of the Palearctic (it is the only swallowtail in most of Europe) and in North America.',
                citation: 'https://en.wikipedia.org/wiki/Papilio_machaon',
                license_name: 'CC BY-SA 3.0',
                license_url: 'https://creativecommons.org/licenses/by-sa/3.0/',
              },
              language: 'en',
            },
          },
          {
            id: '61b70a6f4a26dff1',
            name: 'Papilio zelicaon',
            probability: 0.0211,
            similar_images: [
              {
                id: '4d793ecdb37ea66988725f6f00b9954df9a40e71',
                url: 'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/4d7/93ecdb37ea66988725f6f00b9954df9a40e71.jpg',
                license_name: 'CC BY 4.0',
                license_url: 'https://creativecommons.org/licenses/by/4.0/',
                citation: 'Justin Paulin',
                similarity: 0.654,
                url_small:
                  'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/4d7/93ecdb37ea66988725f6f00b9954df9a40e71.small.jpg',
              },
              {
                id: '6f47c517f48a013bd18c00bcafdb0f34af204f92',
                url: 'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/6f4/7c517f48a013bd18c00bcafdb0f34af204f92.jpeg',
                license_name: 'CC BY 4.0',
                license_url: 'https://creativecommons.org/licenses/by/4.0/',
                citation: 'Millie Basden',
                similarity: 0.307,
                url_small:
                  'https://insect-id.ams3.cdn.digitaloceanspaces.com/similar_images/2/6f4/7c517f48a013bd18c00bcafdb0f34af204f92.small.jpeg',
              },
            ],
            details: {
              common_names: ['Anise Swallowtail'],
              taxonomy: {
                class: 'Insecta',
                genus: 'Papilio',
                order: 'Lepidoptera',
                family: 'Papilionidae',
                phylum: 'Arthropoda',
                kingdom: 'Animalia',
              },
              description: {
                value:
                  'Papilio zelicaon, the anise swallowtail, is a common swallowtail butterfly of western North America. Both the upper and lower sides of its wings are black, but the upper wing has a broad yellow stripe across it, giving the butterfly an overall yellow appearance. There are striking blue spots on the rear edge of the rear wing, and the characteristic tails of the swallowtails. Its wingspan is 52–80 mm (2.04-3.15 inches). Its body is somewhat shorter than the rather similar western tiger swallowtail, with which its range overlaps; it also lacks the black stripes, converging toward the tail, of the latter. There is a somewhat darker subspecies, P. z. nitra, which is rare throughout the range, though somewhat more often found at lower elevations.',
                citation: 'https://en.wikipedia.org/wiki/Papilio_zelicaon',
                license_name: 'CC BY-SA 3.0',
                license_url: 'https://creativecommons.org/licenses/by-sa/3.0/',
              },
              language: 'en',
            },
          },
        ],
      },
      is_insect: {
        probability: 0.92513794,
        threshold: 0.5,
        binary: true,
      },
    },
    status: 'COMPLETED',
    sla_compliant_client: true,
    sla_compliant_system: true,
    created: 1733207069.292077,
    completed: 1733207069.477817,
  };
}

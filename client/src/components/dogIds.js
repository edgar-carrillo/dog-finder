const dogIds = {
  Afador: '5eaff43af96b5978ca726ccc',
  Affenpinscher: '5eaff43af96b5978ca726ccd',
  Affenhuahua: '5eaff43af96b5978ca726ccf',
  Akbash: '5eaff43af96b5978ca726cd0',
  'Airedale Terrier': '5eaff43af96b5978ca726cd1',
  'Afghan Hound': '5eaff43af96b5978ca726cce',
  'Akita Chow': '5eaff43af96b5978ca726cd4',
  'Akita Shepherd': '5eaff43af96b5978ca726cd3',
  'Alaskan Klee Kai': '5eaff43af96b5978ca726cd5',
  'Alaskan Malamute': '5eaff43af96b5978ca726cd6',
  'Akita Pit': '5eaff43af96b5978ca726cd2',
  'American Bulldog': '5eaff43af96b5978ca726cd7',
  Akita: '5eaff43af96b5978ca726cd8',
  'American English Coonhound': '5eaff43af96b5978ca726cd9',
  'American Pit Bull Terrier': '5eaff43af96b5978ca726cdc',
  'American Eskimo Dog': '5eaff43af96b5978ca726cdd',
  'American Foxhound': '5eaff43af96b5978ca726cdb',
  'American Pugabull': '5eaff43af96b5978ca726cde',
  'American Staffordshire Terrier': '5eaff43af96b5978ca726cdf',
  'American Leopard Hound': '5eaff43af96b5978ca726cda',
  Auggie: '5eaff43af96b5978ca726ce2',
  'Appenzeller Sennenhunde': '5eaff43af96b5978ca726ce3',
  Aussiedoodle: '5eaff43af96b5978ca726ce4',
  'American Water Spaniel': '5eaff43af96b5978ca726ce0',
  Aussiepom: '5eaff43af96b5978ca726ce6',
  'Australian Cattle Dog': '5eaff43af96b5978ca726ce5',
  'Australian Retriever': '5eaff43af96b5978ca726ce7',
  'Australian Shepherd': '5eaff43af96b5978ca726ce8',
  'Australian Shepherd Husky': '5eaff43af96b5978ca726ce9',
  'Australian Kelpie': '5eaff43af96b5978ca726cea',
  'Australian Shepherd Pit Bull Mix': '5eaff43af96b5978ca726ceb',
  'Anatolian Shepherd Dog': '5eaff43af96b5978ca726ce1',
  'Australian Terrier': '5eaff43af96b5978ca726cee',
  Bassador: '5eaff43af96b5978ca726cf0',
  Basenji: '5eaff43af96b5978ca726cf1',
  'Basset Hound': '5eaff43af96b5978ca726cf2',
  Azawakh: '5eaff43af96b5978ca726cec',
  'Australian Shepherd Lab Mix': '5eaff43af96b5978ca726ced',
  Barbet: '5eaff43af96b5978ca726cef',
  'Bavarian Mountain Scent Hound': '5eaff43af96b5978ca726cf3',
  Beabull: '5eaff43af96b5978ca726cf4',
  'Basset Retriever': '5eaff43af96b5978ca726cf7',
  'Basset Fauve De Bretagne': '5eaff43af96b5978ca726cf5',
  Beaglier: '5eaff43af96b5978ca726cf8',
  'Belgian Malinois': '5eaff43af96b5978ca726cf9',
  'Belgian Sheepdog': '5eaff43af96b5978ca726cfa',
  'Bedlington Terrier': '5eaff43af96b5978ca726cfb',
  'Bearded Collie': '5eaff43af96b5978ca726cfd',
  'Belgian Tervuren': '5eaff43af96b5978ca726cfe',
  Bernedoodle: '5eaff43af96b5978ca726cff',
  'Bernese Mountain Dog': '5eaff43af96b5978ca726d01',
  'Bichon Frise': '5eaff43af96b5978ca726d00',
  'Biewer Terrier': '5eaff43af96b5978ca726d02',
  Beagle: '5eaff43af96b5978ca726cf6',
  'Black And Tan Coonhound': '5eaff43af96b5978ca726d03',
  'Black Russian Terrier': '5eaff43af96b5978ca726d05',
  'Black Mouth Cur': '5eaff43af96b5978ca726d04',
  Bloodhound: '5eaff43af96b5978ca726d06',
  'Berger Picard': '5eaff43af96b5978ca726cfc',
  'Bluetick Coonhound': '5eaff43af96b5978ca726d0a',
  Bocker: '5eaff43af96b5978ca726d08',
  'Boglen Terrier': '5eaff43af96b5978ca726d0b',
  'Bohemian Shepherd': '5eaff43af96b5978ca726d0c',
  Boerboel: '5eaff43af96b5978ca726d09',
  Borador: '5eaff43af96b5978ca726d0e',
  'Border Sheepdog': '5eaff43af96b5978ca726d0f',
  'Border Terrier': '5eaff43af96b5978ca726d10',
  'Border Collie': '5eaff43af96b5978ca726d11',
  'Blue Lacy': '5eaff43af96b5978ca726d07',
  Bordoodle: '5eaff43af96b5978ca726d12',
  Borzoi: '5eaff43af96b5978ca726d13',
  Boshih: '5eaff43af96b5978ca726d16',
  'Boston Boxer': '5eaff43af96b5978ca726d14',
  'Boston Terrier': '5eaff43af96b5978ca726d17',
  Bossie: '5eaff43af96b5978ca726d15',
  'Bouvier Des Flandres': '5eaff43af96b5978ca726d18',
  Boxador: '5eaff43af96b5978ca726d19',
  Boxer: '5eaff43af96b5978ca726d1a',
  Boxmatian: '5eaff43af96b5978ca726d1b',
  Boxweiler: '5eaff43af96b5978ca726d1c',
  'Boykin Spaniel': '5eaff43af96b5978ca726d1d',
  Bolognese: '5eaff43af96b5978ca726d0d',
  Boxerdoodle: '5eaff43af96b5978ca726d1e',
  Broholmer: '5eaff43af96b5978ca726d22',
  Brittany: '5eaff43af96b5978ca726d21',
  'Braque Du Bourbonnais': '5eaff43af96b5978ca726d1f',
  Bugg: '5eaff43af96b5978ca726d25',
  'Brussels Griffon': '5eaff43af96b5978ca726d24',
  Briard: '5eaff43af96b5978ca726d20',
  'Bull-pei': '5eaff43af96b5978ca726d26',
  Bulldog: '5eaff43af96b5978ca726d27',
  'Bull Terrier': '5eaff43af96b5978ca726d28',
  Bullador: '5eaff43af96b5978ca726d29',
  'Bracco Italiano': '5eaff43af96b5978ca726d23',
  Bullmastiff: '5eaff43af96b5978ca726d2a',
  'Cardigan Welsh Corgi': '5eaff43af96b5978ca726d2e',
  'Bullboxer Pit': '5eaff43af96b5978ca726d2b',
  Bullmatian: '5eaff43af96b5978ca726d2c',
  'Catahoula Bulldog': '5eaff43af96b5978ca726d2f',
  'Cairn Terrier': '5eaff43af96b5978ca726d2d',
  'Catahoula Leopard Dog': '5eaff43af96b5978ca726d30',
  'Canaan Dog': '5eaff43af96b5978ca726d32',
  'Cane Corso': '5eaff43af96b5978ca726d31',
  'Cavalier King Charles Spaniel': '5eaff43af96b5978ca726d35',
  'Cav-a-jack': '5eaff43af96b5978ca726d34',
  Cavachon: '5eaff43af96b5978ca726d37',
  'Cesky Terrier': '5eaff43af96b5978ca726d38',
  Cavador: '5eaff43af96b5978ca726d39',
  'Caucasian Shepherd Dog': '5eaff43af96b5978ca726d33',
  Chabrador: '5eaff43af96b5978ca726d3a',
  'Chesapeake Bay Retriever': '5eaff43af96b5978ca726d3b',
  'Chi-poo': '5eaff43af96b5978ca726d3c',
  Chihuahua: '5eaff43af96b5978ca726d3d',
  Cavapoo: '5eaff43af96b5978ca726d36',
  Cheagle: '5eaff43af96b5978ca726d3e',
  Chilier: '5eaff43af96b5978ca726d41',
  Chigi: '5eaff43af96b5978ca726d40',
  'Chinese Shar-pei': '5eaff43af96b5978ca726d43',
  Chinook: '5eaff43af96b5978ca726d44',
  Chion: '5eaff43af96b5978ca726d45',
  'Chinese Crested': '5eaff43af96b5978ca726d42',
  Chipin: '5eaff43af96b5978ca726d46',
  'Chi Chi': '5eaff43af96b5978ca726d3f',
  Chiweenie: '5eaff43af96b5978ca726d47',
  Chorkie: '5eaff43af96b5978ca726d48',
  Chug: '5eaff43af96b5978ca726d49',
  'Chow Shepherd': '5eaff43af96b5978ca726d4b',
  'Cirneco Dell’etna': '5eaff43af96b5978ca726d4c',
  'Chow Chow': '5eaff43af96b5978ca726d4d',
  Cockalier: '5eaff43af96b5978ca726d4e',
  'Clumber Spaniel': '5eaff43af96b5978ca726d4f',
  Chusky: '5eaff43af96b5978ca726d4a',
  'Cocker Spaniel': '5eaff43af96b5978ca726d50',
  Cockapoo: '5eaff43af96b5978ca726d51',
  Corgidor: '5eaff43af96b5978ca726d53',
  'Corman Shepherd': '5eaff43af96b5978ca726d54',
  'Coton De Tulear': '5eaff43af96b5978ca726d55',
  'Curly-coated Retriever': '5eaff43af96b5978ca726d57',
  Dachshund: '5eaff43af96b5978ca726d58',
  Dachsador: '5eaff43af96b5978ca726d59',
  'Corgi Inu': '5eaff43af96b5978ca726d56',
  Daniff: '5eaff43af96b5978ca726d5a',
  Dalmatian: '5eaff43af96b5978ca726d5b',
  Collie: '5eaff43af96b5978ca726d52',
  Docker: '5eaff43af96b5978ca726d5f',
  'Dandie Dinmont Terrier': '5eaff43af96b5978ca726d5c',
  'Doberman Pinscher': '5eaff43af96b5978ca726d5d',
  'Dogue De Bordeaux': '5eaff43af96b5978ca726d60',
  Doberdor: '5eaff43af96b5978ca726d5e',
  'Deutscher Wachtelhund': '5eaff43af96b5978ca726d62',
  'Dogo Argentino': '5eaff43af96b5978ca726d61',
  Dorgi: '5eaff43af96b5978ca726d63',
  'Drentsche Patrijshond': '5eaff43af96b5978ca726d65',
  Dorkie: '5eaff43af96b5978ca726d64',
  Drever: '5eaff43af96b5978ca726d66',
  Doxle: '5eaff43af96b5978ca726d68',
  'English Cocker Spaniel': '5eaff43af96b5978ca726d69',
  'Dutch Shepherd': '5eaff43af96b5978ca726d67',
  'English Setter': '5eaff43af96b5978ca726d6b',
  'English Toy Spaniel': '5eaff43af96b5978ca726d6c',
  'Entlebucher Mountain Dog': '5eaff43af96b5978ca726d6e',
  'English Springer Spaniel': '5eaff43af96b5978ca726d6d',
  Doxiepoo: '5eaff43af96b5978ca726d6f',
  'English Foxhound': '5eaff43af96b5978ca726d6a',
  'Estrela Mountain Dog': '5eaff43af96b5978ca726d70',
  Eurasier: '5eaff43af96b5978ca726d71',
  'Field Spaniel': '5eaff43af96b5978ca726d72',
  'Finnish Spitz': '5eaff43af96b5978ca726d75',
  'Fox Terrier': '5eaff43af96b5978ca726d76',
  'Flat-coated Retriever': '5eaff43af96b5978ca726d74',
  'French Bulldog': '5eaff43af96b5978ca726d77',
  'French Bullhuahua': '5eaff43af96b5978ca726d78',
  'Finnish Lapphund': '5eaff43af96b5978ca726d73',
  Frenchton: '5eaff43af96b5978ca726d7a',
  'French Spaniel': '5eaff43af96b5978ca726d79',
  'German Shepherd Dog': '5eaff43af96b5978ca726d7c',
  'German Shepherd Pit Bull': '5eaff43af96b5978ca726d7d',
  'German Pinscher': '5eaff43af96b5978ca726d7b',
  'German Sheprador': '5eaff43af96b5978ca726d7e',
  Frengle: '5eaff43af96b5978ca726d7f',
  'German Shorthaired Pointer': '5eaff43af96b5978ca726d80',
  'German Wirehaired Pointer': '5eaff43af96b5978ca726d81',
  'Glen Of Imaal Terrier': '5eaff43af96b5978ca726d82',
  'German Spitz': '5eaff43af96b5978ca726d84',
  'Giant Schnauzer': '5eaff43af96b5978ca726d83',
  Goberian: '5eaff43af96b5978ca726d85',
  Goldador: '5eaff43af96b5978ca726d86',
  'Golden Cocker Retriever': '5eaff43af96b5978ca726d87',
  'Golden Shepherd': '5eaff43af96b5978ca726d88',
  'Golden Retriever': '5eaff43af96b5978ca726d8a',
  'Golden Retriever Corgi': '5eaff43af96b5978ca726d8b',
  Goldendoodle: '5eaff43af96b5978ca726d8c',
  'Great Dane': '5eaff43af96b5978ca726d8d',
  'Golden Mountain Dog': '5eaff43af96b5978ca726d89',
  Gollie: '5eaff43af96b5978ca726d8e',
  Hamiltonstovare: '5eaff43af96b5978ca726d92',
  'Great Pyrenees': '5eaff43af96b5978ca726d8f',
  'Gordon Setter': '5eaff43af96b5978ca726d90',
  Greyhound: '5eaff43af96b5978ca726d93',
  'Greater Swiss Mountain Dog': '5eaff43af96b5978ca726d91',
  Havanese: '5eaff43af96b5978ca726d96',
  Harrier: '5eaff43af96b5978ca726d97',
  Greyador: '5eaff43af96b5978ca726d94',
  'Hanoverian Scenthound': '5eaff43af96b5978ca726d95',
  'Ibizan Hound': '5eaff43af96b5978ca726d9a',
  Huskydoodle: '5eaff43af96b5978ca726d99',
  Hokkaido: '5eaff43af96b5978ca726d98',
  Horgi: '5eaff43af96b5978ca726d9b',
  'Irish Setter': '5eaff43af96b5978ca726d9e',
  'Irish Terrier': '5eaff43af96b5978ca726d9f',
  'Irish Red And White Setter': '5eaff43af96b5978ca726d9d',
  'Irish Wolfhound': '5eaff43af96b5978ca726da0',
  'Italian Greyhound': '5eaff43af96b5978ca726da1',
  'Icelandic Sheepdog': '5eaff43af96b5978ca726d9c',
  Huskita: '5eaff43af96b5978ca726da2',
  'Irish Water Spaniel': '5eaff43af96b5978ca726da3',
  'Jack Russell Terrier': '5eaff43af96b5978ca726da4',
  'Jack-a-poo': '5eaff43af96b5978ca726da6',
  'Jack Chi': '5eaff43af96b5978ca726da8',
  'Japanese Spitz': '5eaff43af96b5978ca726da7',
  'Korean Jindo Dog': '5eaff43af96b5978ca726daa',
  'Karelian Bear Dog': '5eaff43af96b5978ca726dab',
  Keeshond: '5eaff43af96b5978ca726da9',
  Jackshund: '5eaff43af96b5978ca726dac',
  'Kerry Blue Terrier': '5eaff43af96b5978ca726dad',
  Kuvasz: '5eaff43af96b5978ca726dae',
  'Japanese Chin': '5eaff43af96b5978ca726da5',
  'Kyi-leo': '5eaff43af96b5978ca726daf',
  'Lab Pointer': '5eaff43af96b5978ca726db0',
  Komondor: '5eaff43af96b5978ca726db1',
  Kooikerhondje: '5eaff43af96b5978ca726db2',
  Labmaraner: '5eaff43af96b5978ca726db3',
  'King Shepherd': '5eaff43af96b5978ca726db5',
  Labernese: '5eaff43af96b5978ca726db4',
  Labradoodle: '5eaff43af96b5978ca726db6',
  'Labrador Retriever': '5eaff43af96b5978ca726db8',
  Labrastaff: '5eaff43af96b5978ca726db9',
  Labrabull: '5eaff43af96b5978ca726dba',
  Labsky: '5eaff43af96b5978ca726dbb',
  Labradane: '5eaff43af96b5978ca726db7',
  'Lancashire Heeler': '5eaff43af96b5978ca726dbc',
  Leonberger: '5eaff43af96b5978ca726dbd',
  'Lhasa Apso': '5eaff43af96b5978ca726dbe',
  'Lagotto Romagnolo': '5eaff43af96b5978ca726dbf',
  Lowchen: '5eaff43af96b5978ca726dc0',
  'Lakeland Terrier': '5eaff43af96b5978ca726dc1',
  Lhasapoo: '5eaff43af96b5978ca726dc3',
  Maltese: '5eaff43af96b5978ca726dc2',
  Maltipoo: '5eaff43af96b5978ca726dc5',
  'Manchester Terrier': '5eaff43af96b5978ca726dc6',
  'Maltese Shih Tzu': '5eaff43af96b5978ca726dc4',
  Mastiff: '5eaff43af96b5978ca726dc7',
  'Miniature Schnauzer': '5eaff43af96b5978ca726dc8',
  'Miniature Pinscher': '5eaff43af96b5978ca726dc9',
  Mastador: '5eaff43af96b5978ca726dcb',
  Mudi: '5eaff43af96b5978ca726dcc',
  Mutt: '5eaff43af96b5978ca726dcd',
  'Norfolk Terrier': '5eaff43af96b5978ca726dce',
  Morkie: '5eaff43af96b5978ca726dca',
  Newfoundland: '5eaff43af96b5978ca726dcf',
  'Norwegian Buhund': '5eaff43af96b5978ca726dd0',
  'Neapolitan Mastiff': '5eaff43af96b5978ca726dd3',
  'Norwegian Elkhound': '5eaff43af96b5978ca726dd1',
  'Norwegian Lundehund': '5eaff43af96b5978ca726dd2',
  Papillon: '5eaff43af96b5978ca726dd7',
  'Nova Scotia Duck Tolling Retriever': '5eaff43af96b5978ca726dd8',
  'Old English Sheepdog': '5eaff43af96b5978ca726dd5',
  Papipoo: '5eaff43af96b5978ca726dd9',
  Peekapoo: '5eaff43af96b5978ca726dda',
  Pekingese: '5eaff43af96b5978ca726ddb',
  'Pembroke Welsh Corgi': '5eaff43af96b5978ca726ddc',
  Plott: '5eaff43af96b5978ca726ddd',
  Otterhound: '5eaff43af96b5978ca726dd6',
  'Norwich Terrier': '5eaff43af96b5978ca726dd4',
  Pomapoo: '5eaff43af96b5978ca726de1',
  'Polish Lowland Sheepdog': '5eaff43af96b5978ca726de0',
  Pitsky: '5eaff43af96b5978ca726de2',
  'Pharaoh Hound': '5eaff43af96b5978ca726ddf',
  Pointer: '5eaff43af96b5978ca726de4',
  Pomeagle: '5eaff43af96b5978ca726de3',
  Pomeranian: '5eaff43af96b5978ca726de5',
  'Pocket Beagle': '5eaff43af96b5978ca726de6',
  Pomchi: '5eaff43af96b5978ca726de8',
  'Petit Basset Griffon Vendeen': '5eaff43af96b5978ca726dde',
  Poochon: '5eaff43af96b5978ca726de7',
  'Portuguese Water Dog': '5eaff43af96b5978ca726dea',
  'Portuguese Podengo Pequeno': '5eaff43af96b5978ca726de9',
  Poodle: '5eaff43af96b5978ca726deb',
  Pomsky: '5eaff43af96b5978ca726dec',
  Puggle: '5eaff43af96b5978ca726def',
  Pyredoodle: '5eaff43af96b5978ca726df0',
  Pugalier: '5eaff43af96b5978ca726dee',
  Puli: '5eaff43af96b5978ca726df1',
  'Pyrenean Shepherd': '5eaff43af96b5978ca726df2',
  'Rat Terrier': '5eaff43af96b5978ca726df3',
  Puginese: '5eaff43af96b5978ca726df4',
  'Redbone Coonhound': '5eaff43af96b5978ca726df5',
  Rottador: '5eaff43af96b5978ca726df6',
  'Rhodesian Ridgeback': '5eaff43af96b5978ca726df7',
  Rottweiler: '5eaff43af96b5978ca726df8',
  Pug: '5eaff43af96b5978ca726ded',
  Rottle: '5eaff43af96b5978ca726df9',
  'Saint Berdoodle': '5eaff43af96b5978ca726dfa',
  'Saint Bernard': '5eaff43af96b5978ca726dfb',
  Saluki: '5eaff43af96b5978ca726dfc',
  Samoyed: '5eaff43af96b5978ca726dfd',
  Samusky: '5eaff43af96b5978ca726dfe',
  'Scottish Deerhound': '5eaff43af96b5978ca726e00',
  Schnoodle: '5eaff43af96b5978ca726dff',
  Schipperke: '5eaff43af96b5978ca726e01',
  'Sealyham Terrier': '5eaff43af96b5978ca726e02',
  Shepsky: '5eaff43af96b5978ca726e05',
  Sheepadoodle: '5eaff43af96b5978ca726e03',
  'Shetland Sheepdog': '5eaff43af96b5978ca726e06',
  'Scottish Terrier': '5eaff43af96b5978ca726e04',
  'Shiba Inu': '5eaff43af96b5978ca726e07',
  Shichon: '5eaff43af96b5978ca726e08',
  Shollie: '5eaff43af96b5978ca726e0b',
  'Shih Tzu': '5eaff43af96b5978ca726e0a',
  'Shih-poo': '5eaff43af96b5978ca726e09',
  'Shiloh Shepherd': '5eaff43af96b5978ca726e0c',
  Shiranian: '5eaff43af96b5978ca726e0d',
  Shorkie: '5eaff43af96b5978ca726e0e',
  Sloughi: '5eaff43af96b5978ca726e10',
  'Skye Terrier': '5eaff43af96b5978ca726e11',
  'Silky Terrier': '5eaff43af96b5978ca726e12',
  'Siberian Husky': '5eaff43af96b5978ca726e0f',
  'Silken Windhound': '5eaff43af96b5978ca726e14',
  'Small Munsterlander Pointer': '5eaff43af96b5978ca726e13',
  'Soft Coated Wheaten Terrier': '5eaff43af96b5978ca726e15',
  'Spinone Italiano': '5eaff43af96b5978ca726e18',
  Springador: '5eaff43af96b5978ca726e17',
  'Spanish Mastiff': '5eaff43af96b5978ca726e16',
  'Staffordshire Bull Terrier': '5eaff43af96b5978ca726e19',
  'Standard Schnauzer': '5eaff43af96b5978ca726e1a',
  Terripoo: '5eaff43af96b5978ca726e1b',
  'Sussex Spaniel': '5eaff43af96b5978ca726e1d',
  'Texas Heeler': '5eaff43af96b5978ca726e1e',
  'Tibetan Mastiff': '5eaff43af96b5978ca726e1f',
  Stabyhoun: '5eaff43af96b5978ca726e1c',
  'Swedish Vallhund': '5eaff43af96b5978ca726e20',
  'Tibetan Spaniel': '5eaff43af96b5978ca726e21',
  'Tibetan Terrier': '5eaff43af96b5978ca726e22',
  'Toy Fox Terrier': '5eaff43af96b5978ca726e23',
  'Valley Bulldog': '5eaff43af96b5978ca726e25',
  Vizsla: '5eaff43af96b5978ca726e24',
  'Treeing Walker Coonhound': '5eaff43af96b5978ca726e28',
  'Welsh Springer Spaniel': '5eaff43af96b5978ca726e26',
  Westiepoo: '5eaff43af96b5978ca726e29',
  'Treeing Tennessee Brindle': '5eaff43af96b5978ca726e27',
  Weimaraner: '5eaff43af96b5978ca726e2a',
  'Wirehaired Pointing Griffon': '5eaff43af96b5978ca726e2e',
  Xoloitzcuintli: '5eaff43af96b5978ca726e2f',
  'Yorkshire Terrier': '5eaff43af96b5978ca726e30',
  Yorkipoo: '5eaff43af96b5978ca726e31',
  Whippet: '5eaff43af96b5978ca726e2b',
  'West Highland White Terrier': '5eaff43af96b5978ca726e32',
  Whoodle: '5eaff43af96b5978ca726e2c',
  'Welsh Terrier': '5eaff43af96b5978ca726e2d',
};

export default dogIds;

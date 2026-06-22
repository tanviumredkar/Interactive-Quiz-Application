const CATS = [
    { id: 'ai', name: 'Artificial Intelligence (AI)', icon: '🤖' },
    { id: 'tech', name: 'Technology & Programming', icon: '💻' },
    { id: 'mv', name: 'Movies & OTT Entertainment', icon: '🎬' },
    { id: 'sp', name: 'Sports', icon: '🏆' },
    { id: 'gk', name: 'General Knowledge', icon: '🌍' },
    { id: 'gg', name: 'Gaming', icon: '🎮' },
    { id: 'fd', name: 'Food', icon: '🍕' },
    { id: 'br', name: 'Brainrot', icon: '💀' }
];

const QS = {
    ai: {
        easy: [
            { q: 'What does AI stand for?', o: ['Automated Internet', 'Artificial Intelligence', 'Advanced Information', 'Artificial Interaction'], a: 1 },
            { q: 'Which company created ChatGPT?', o: ['Google', 'Microsoft', 'OpenAI', 'Meta'], a: 2 },
            { q: 'Which of these is a virtual assistant?', o: ['Siri', 'Chrome', 'Photoshop', 'Excel'], a: 0 },
            { q: 'Which field is closely related to AI?', o: ['Carpentry', 'Plumbing', 'Gardening', 'Machine Learning'], a: 3 },
            { q: 'Which AI model generates images?', o: ['Excel', 'DALL·E', 'Firefox', 'VLC'], a: 1 },
            { q: 'AI is mainly used to?', o: ['Solve problems and automate tasks', 'Grow plants', 'Repair roads', 'Print books'], a: 0 },
            { q: 'Which of these is a chatbot?', o: ['Netflix', 'Spotify', 'ChatGPT', 'WhatsApp'], a: 2 },
            { q: 'Self-driving cars use?', o: ['Artificial Intelligence', 'Solar Panels', 'Calculators', 'Typewriters'], a: 0 },
            { q: 'Which company developed Gemini?', o: ['Apple', 'Google', 'Amazon', 'Intel'], a: 1 },
            { q: 'AI can recognize?', o: ['Trees only', 'Smells only', 'Images and Speech', 'Rocks only'], a: 2 }
        ],
        medium: [
            { q: 'What is Machine Learning?', o: ['A web browser', 'A computer virus', 'A programming language', 'A subset of AI'], a: 3 },
            { q: 'Which algorithm is used for classification?', o: ['Decision Tree', 'Bubble Sort', 'Binary Search', 'Quick Sort'], a: 0 },
            { q: 'Which type of learning uses labeled data?', o: ['UnSupervised Learning', 'Reinforcement Learning', 'Supervised Learning', 'Evolutionary Learning'], a: 2 },
            { q: 'Which language is most popular for AI development?', o: ['Java', 'HTML', 'Python', 'PHP'], a: 2 },
            { q: 'What does NLP stand for?', o: ['Natural Language Processing', 'Network Layer Protocol', 'Neural Logic Programming', 'Numerical Learning Process'], a: 0 },
            { q: 'Which neural network is commonly used for image recognition?', o: ['RNN', 'CNN', 'GAN', 'DBMS'], a: 1 },
            { q: 'Which learning method relies on rewards and penalties?', o: ['Superwised Learning', 'Reinforcement Learning', 'Unsupervised Learning', 'Transfer Learning'], a: 1 },
            { q: 'Which AI model architecture powers ChatGPT?', o: ['Transformer', 'CNN', 'KNN', 'Decision Tree'], a: 0 },
            { q: 'Which metric is commonly used to evaluate classification models?', o: ['Latency', 'Bandwidth', 'Throughput', 'Accuracy'], a: 3 },
            { q: 'Which of the following is an example of Generative AI?', o: ['ChatGPT', 'Calculator', 'MS Paint', 'File Explorer'], a: 0 }
        ],
        hard: [
            { q: 'Who introduced the term "Artificial Intelligence" in 1956?', o: ['Geoffrey Hinton', 'John McCarthy', 'Yann LeCun', 'Alan Turing'], a: 1 },
            { q: 'Which activation function is commonly used in deep neural networks?', o: ['DFS', 'FIFO', 'ReLU', 'XOR'], a: 2 },
            { q: 'What does GPT stand for?', o: ['Graph Prediction Technology', 'Generative Pattern Transfer', 'Generative Pre-trained Transformer', 'General Processing Tool'], a: 2 },
            { q: 'Which optimization algorithm is widely used in deep learning?', o: ['Adam', 'Kruskal', 'Prim', 'Dijkstra'], a: 0 },
            { q: 'Which architecture introduced the concept "Attention Is All You Need"?', o: ['CNN', 'RNN', 'Transformer', 'SVM'], a: 2 },
            { q: 'What is overfitting in machine learning?', o: ['Reducing model complexity', 'Data compression', 'A model performs well on training data but poorly on new data', 'Increasing dataset size'], a: 2 },
            { q: 'Which algorithm is commonly used for dimensionality reduction?', o: ['PCA', 'Heap Sort', 'Merge Sort', 'BFS'], a: 0 },
            { q: 'Which model was commonly used for sequential text generation before Transformers?', o: ['K-Means', 'Naive Bayes', 'CNN', 'RNN'], a: 3 },
            { q: 'Which loss function is commonly used in binary classification?', o: ['Euclidean Distance', 'Binary Cross Entropy', 'Mean Absolute Error', 'Hinge Distance'], a: 1 },
            { q: 'What does the "T" in BERT stand for?', o: ['Tokenizer', 'Transformer', 'Training', 'Tensor'], a: 1 }
        ]
    },
    tech: {
        easy: [
            { q: 'HTML stands for?', o: ['Hyper Text Markup Language', 'High Text Machine Language', 'Hyper Tool Markup Language', 'Home Tool Markup Language'], a: 0 },
            { q: 'CSS is used for?', o: ['Networking', 'Database', 'Styling webpages', 'Security'], a: 2 },
            { q: 'JavaScript is mainly used for?', o: ['Interactivity', 'Printing', 'Hardware Design', 'Storage'], a: 0 },
            { q: 'Git is used for?', o: ['Networking', 'Gaming', 'Photo Editing', 'Version Control'], a: 3 },
            { q: 'GitHub is a?', o: ['Code Hosting Platform', 'Browser', 'IDE', 'Database'], a: 0 },
            { q: 'Which symbol is used for IDs in CSS?', o: ['.', '#', '*', '&'], a: 1 },
            { q: 'Creator of Java?', o: ['Microsoft', 'Apple', 'Sun Microsystems', 'IBM'], a: 2 },
            { q: 'Which company created JavaScript?', o: ['Netscape', 'Microsoft', 'IBM', 'Apple'], a: 0 },
            { q: 'Company that developed Android?', o: ['Apple', 'Microsoft', 'Google', 'Samsung'], a: 2 },
            { q: 'Frontend development includes?', o: ['HTML', 'CSS', 'JavaScript', 'All of these'], a: 3 }
        ],
        medium: [
            { q: 'What does API stand for?', o: ['Application Programming Interface', 'Advanced Program Integration', 'Applied Programming Index', 'Automated Process Interface'], a: 0 },
            { q: 'Which data structure uses LIFO?', o: ['Stack', 'Queue', 'Array', 'Linked List'], a: 0 },
            { q: 'Which HTTP method is used to update data?', o: ['PUT', 'GET', 'DELETE', 'CONNECT'], a: 0 },
            { q: 'What is the time complexity of binary search?', o: ['O(1)', 'O(n)', 'O(n²)', 'O(log n)'], a: 3 },
            { q: 'Which company developed React?', o: ['Google', 'Meta (Facebook)', 'Microsoft', 'Amazon'], a: 1 },
            { q: 'What does SQL stand for?', o: ['Structured Query Language', 'Simple Query Logic', 'Sequential Query List', 'System Query Language'], a: 0 },
            { q: 'Which port does HTTPS use by default?', o: ['21', '80', '443', '25'], a: 2 },
            { q: 'What is Docker primarily used for?', o: ['Containerization', 'Video editing', 'Web hosting only', '3D rendering'], a: 0 },
            { q: 'Which language is Node.js built on?', o: ['JavaScript', 'Python', 'Ruby', 'Go'], a: 0 },
            { q: 'What does CRUD stand for in development?', o: ['Create, Read, Update, Delete', 'Compile, Run, Update, Debug', 'Create, Run, Undo, Delete', 'Copy, Read, Use, Discard'], a: 0 }
        ],
        hard: [
            { q: 'What is the time complexity of quicksort in the average case?', o: ['O(n²)', 'O(n log n)', 'O(log n)', 'O(n)'], a: 1 },
            { q: 'Which design pattern restricts a class to one instance?', o: ['Factory', 'Adapter', 'Singleton', 'Observer'], a: 2 },
            { q: 'What does ACID stand for in databases?', o: ['Async, Cache, Index, Data', 'Atomicity, Consistency, Isolation, Durability', 'Atomic, Cache, Isolation, Data', 'Access, Control, Identity, Data'], a: 1 },
            { q: 'Which sorting algorithm is stable and has O(n log n) worst case?', o: ['Bubble Sort', 'Merge Sort', 'Selection Sort', 'Quick Sort'], a: 1 },
            { q: 'What problem does a CAP theorem address?', o: ['Compiler optimization', 'Distributed system tradeoffs', 'Memory leaks', 'CSS rendering'], a: 1 },
            { q: 'Which concurrency issue occurs when two threads modify shared data unsafely?', o: ['Buffer underflow', 'Memory leak', 'Race condition', 'Stack overflow'], a: 2 },
            { q: 'What is the primary purpose of a load balancer?', o: ['Encrypt passwords', 'Render UI', 'Compress images', 'Distribute traffic across servers'], a: 3 },
            { q: 'Which data structure underlies most hash maps?', o: ['Stack', 'Linked list only', 'Array with hashing function', 'Binary tree only'], a: 2 },
            { q: 'What does idempotency mean for an HTTP method?', o: ['It only works over HTTPS', 'Repeating it has the same effect as once', 'It always fails on retry', 'It requires authentication'], a: 1 },
            { q: 'Which algorithmic technique does dynamic programming rely on?', o: ['Greedy choice only', 'Overlapping subproblems and optimal substructure', 'Random sampling', 'Brute force only'], a: 1 }
        ]
    },
    mv: {
        easy: [
            { q: 'Hollywood is primarily located in?', o: ['New York', 'Los Angeles', 'Chicago', 'Miami'], a: 1 },
            { q: 'Which superhero is known as the Man of Steel?', o: ['Batman', 'Iron Man', 'Superman', 'Thor'], a: 2 },
            { q: 'Which company owns Marvel?', o: ['Sony', 'Disney', 'Netflix', 'Warner Bros'], a: 1 },
            { q: 'Netflix is a?', o: ['Streaming Platform', 'Browser', 'Search Engine', 'Game'], a: 0 },
            { q: 'Which movie features Pandora?', o: ['Avatar', 'Titanic', 'Frozen', 'Joker'], a: 0 },
            { q: 'Bollywood is based in?', o: ['Delhi', 'Mumbai', 'Pune', 'Chennai'], a: 1 },
            { q: 'Who is known as the King of Bollywood?', o: ['Salman Khan', 'Shah Rukh Khan', 'Aamir Khan', 'Hrithik Roshan'], a: 1 },
            { q: 'Anime originated in?', o: ['China', 'Japan', 'Korea', 'India'], a: 1 },
            { q: 'Which platform created Stranger Things?', o: ['Disney+', 'Netflix', 'Prime Video', 'Hulu'], a: 1 },
            { q: 'Oscar Awards are related to?', o: ['Sports', 'Movies', 'Music', 'Gaming'], a: 1 }
        ],
        medium: [
            { q: 'Who directed "Inception"?', o: ['Christopher Nolan', 'Steven Spielberg', 'James Cameron', 'Quentin Tarantino'], a: 0 },
            { q: 'Which streaming platform produced "The Boys"?', o: ['Prime Video', 'Netflix', 'Disney+', 'Hulu'], a: 0 },
            { q: 'Which actor plays Tony Stark / Iron Man?', o: ['Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth', 'Mark Ruffalo'], a: 0 },
            { q: 'Which Studio Ghibli film features a giant cat-bus?', o: ['My Neighbor Totoro', 'Spirited Away', 'Princess Mononoke', "Howl's Moving Castle"], a: 0 },
            { q: 'Which award category honors Best Picture?', o: ['Academy Awards (Oscars)', 'Grammy Awards', 'Emmy Awards', 'Tony Awards'], a: 0 },
            { q: 'Who composed the music for most Marvel films, e.g. shared scores?', o: ['Multiple composers (varies by film)', 'Always John Williams', 'Always Hans Zimmer', 'Always Howard Shore'], a: 0 },
            { q: 'Which Indian film won the Oscar for Best Original Song in 2023?', o: ['"Naatu Naatu" from RRR', '"Jai Ho"', '"Senorita"', '"Kar Har Maidaan Fateh"'], a: 0 },
            { q: 'Which company owns Pixar?', o: ['Disney', 'Universal', 'Warner Bros', 'Sony'], a: 0 },
            { q: 'In which decade did color television-era blockbuster "Star Wars" (the original) release?', o: ['1980s', '1970s', '1990s', '1960s'], a: 1 },
            { q: 'Which platform is known for K-dramas like "Squid Game"?', o: ['Prime Video', 'Disney+', 'Netflix', 'Apple TV+'], a: 2 }
        ],
        hard: [
            { q: 'Which film won the first-ever Academy Award for Best Picture?', o: ['Citizen Kane', 'Gone with the Wind', 'Wings (1927)', 'Casablanca'], a: 2 },
            { q: 'Who was the first actor to portray James Bond on film?', o: ['George Lazenby', 'Sean Connery', 'Roger Moore', 'Daniel Craig'], a: 1 },
            { q: 'Which director is known for long, continuous takes in "Birdman" and "1917" style filmmaking?', o: ['Only Martin Scorsese', 'Both used by different directors (Iñárritu and Mendes)', 'Only Christopher Nolan', 'Only Quentin Tarantino'], a: 1 },
            { q: 'Which film studio created the "Universal Monsters" franchise?', o: ['MGM', 'Universal Pictures', 'Warner Bros', 'Paramount'], a: 1 },
            { q: 'Satyajit Ray, a pioneer of Indian cinema, is best known for which trilogy?', o: ['The Matrix Trilogy', 'The Apu Trilogy', 'The Lord of the Rings Trilogy', 'The Godfather Trilogy'], a: 1 },
            { q: 'Which film holds the record for most Oscar wins (11)?', o: ['Avatar', 'Tied: Ben-Hur, Titanic, Lord of the Rings: Return of the King', 'Star Wars', 'Avengers: Endgame'], a: 1 },
            { q: 'Which technique describes filming using miniatures and forced perspective, famously used in early "Lord of the Rings"?', o: ['Motion capture only', 'Stop motion only', 'Forced perspective / miniature effects', 'Green screen only'], a: 2 },
            { q: 'Which silent film era actor was famous for physical comedy and the "Tramp" character?', o: ['Fatty Arbuckle', 'Charlie Chaplin', 'Harold Lloyd', 'Buster Keaton'], a: 1 },
            { q: 'Which film is widely cited as the first feature-length sync-sound "talkie"?', o: ['Metropolis', 'Citizen Kane', 'The Jazz Singer (1927)', 'King Kong'], a: 2 },
            { q: 'Akira Kurosawa\'s "Seven Samurai" heavily influenced which Hollywood western remake?', o: ['Unforgiven', 'The Good, the Bad and the Ugly', 'The Magnificent Seven', 'Tombstone'], a: 2 }
        ]
    },
    sp: {
        easy: [
            { q: 'Players on a soccer team on the field?', o: ['9', '10', '11', '12'], a: 2 },
            { q: 'Grand Slam tournaments in tennis?', o: ['2', '3', '4', '5'], a: 2 },
            { q: 'Most FIFA World Cup wins?', o: ['Germany', 'Argentina', 'Brazil', 'France'], a: 2 },
            { q: 'Sport played at Wimbledon?', o: ['Cricket', 'Tennis', 'Badminton', 'Squash'], a: 1 },
            { q: 'Olympic flag rings?', o: ['4', '5', '6', '7'], a: 1 },
            { q: 'Points for a basketball free throw?', o: ['1', '2', '3', '4'], a: 0 },
            { q: 'National sport of Japan?', o: ['Judo', 'Kendo', 'Sumo', 'Baseball'], a: 2 },
            { q: 'Length of a standard marathon?', o: ['40 km', '42.195 km', '44 km', '45 km'], a: 1 },
            { q: 'Country that invented cricket?', o: ['Australia', 'India', 'England', 'South Africa'], a: 2 },
            { q: 'Material used for tennis balls?', o: ['Leather', 'Rubber', 'Wool & Rubber', 'Plastic'], a: 2 }
        ],
        medium: [
            { q: 'How many players are on a basketball court per team?', o: ['5', '6', '7', '4'], a: 0 },
            { q: 'Which country hosted the 2016 Summer Olympics?', o: ['Brazil', 'China', 'UK', 'Japan'], a: 0 },
            { q: 'In cricket, how many balls make up one over?', o: ['6', '5', '8', '10'], a: 0 },
            { q: 'Which trophy is awarded to the winner of the UEFA Champions League?', o: ['The European Cup (Champions League trophy)', 'The Jules Rimet Trophy', 'The FA Cup', 'The Ballon d\'Or'], a: 0 },
            { q: 'Who holds the record for most international football goals (men\'s)?', o: ['Cristiano Ronaldo', 'Lionel Messi', 'Pelé', 'Neymar'], a: 0 },
            { q: 'Which country won the first-ever Cricket World Cup (1975)?', o: ['West Indies', 'Australia', 'India', 'England'], a: 0 },
            { q: 'In tennis, what is a score of zero called?', o: ['Love', 'Nil', 'Zero', 'Duck'], a: 0 },
            { q: 'Which sport uses a "shuttlecock"?', o: ['Badminton', 'Tennis', 'Squash', 'Table Tennis'], a: 0 },
            { q: 'How many rings are there in a standard boxing match round count maximum (men\'s pro)?', o: ['12 rounds', '15 rounds', '10 rounds', '8 rounds'], a: 0 },
            { q: 'Which country is credited with inventing table tennis?', o: ['England', 'China', 'Japan', 'USA'], a: 0 }
        ],
        hard: [
            { q: 'Who is the only player to win the FIFA World Cup as both player and head coach?', o: ['Pelé', 'Mário Zagallo / Franz Beckenbauer (both achieved it)', 'Zinedine Zidane', 'Diego Maradona'], a: 1 },
            { q: 'Which country has won the most Olympic gold medals overall (all-time)?', o: ['Germany', 'China', 'United States', 'Soviet Union'], a: 2 },
            { q: 'In Formula 1, which driver has won the most World Championships (as of recent history)?', o: ['Max Verstappen', 'Lewis Hamilton and Michael Schumacher', 'Ayrton Senna', 'Sebastian Vettel'], a: 1 },
            { q: 'Which fencing/boxing-related rule describes scoring via repeated points within a time limit, common to combat-sport judging?', o: ['Single elimination only', 'Point-based round judging', 'Time-based knockout only', 'Sudden death only'], a: 1 },
            { q: 'Which cricketer holds the record for most international centuries?', o: ['Ricky Ponting', 'Virat Kohli', 'Sachin Tendulkar', 'Kumar Sangakkara'], a: 2 },
            { q: 'What is the term for a chess-clock style countdown used in some sports broadcasts called?', o: ['Penalty clock', 'Match clock', 'Shot clock', 'Stop clock'], a: 2 },
            { q: 'Which athlete is known as the fastest man in history over 100m (world record holder)?', o: ['Justin Gatlin', 'Carl Lewis', 'Usain Bolt', 'Tyson Gay'], a: 2 },
            { q: 'In golf, what term describes scoring one stroke under par on a hole?', o: ['Bogey', 'Birdie', 'Albatross', 'Eagle'], a: 1 },
            { q: 'Which country won the inaugural Rugby World Cup in 1987?', o: ['South Africa', 'England', 'Australia', 'New Zealand'], a: 3 },
            { q: 'Which swimmer has won the most Olympic gold medals of any athlete?', o: ['Katie Ledecky', 'Mark Spitz', 'Ian Thorpe', 'Michael Phelps'], a: 3 }
        ]
    },
    gk: {
        easy: [
            { q: 'What is the capital of France?', o: ['Berlin', 'Madrid', 'Paris', 'Rome'], a: 2 },
            { q: 'Which is the largest planet in our solar system?', o: ['Earth', 'Mars', 'Jupiter', 'Saturn'], a: 2 },
            { q: 'What is the largest ocean?', o: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], a: 3 },
            { q: 'Chemical symbol for Gold?', o: ['Ag', 'Au', 'Fe', 'Cu'], a: 1 },
            { q: 'Which planet is known as the Red Planet?', o: ['Venus', 'Mars', 'Jupiter', 'Mercury'], a: 1 },
            { q: 'The Taj Mahal is located in?', o: ['Delhi', 'Agra', 'Jaipur', 'Mumbai'], a: 1 },
            { q: 'Which country has the largest population?', o: ['USA', 'India', 'China', 'Brazil'], a: 2 },
            { q: 'What is the longest river in the world?', o: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], a: 1 },
            { q: 'Who painted the Mona Lisa?', o: ['Van Gogh', 'Picasso', 'Da Vinci', 'Rembrandt'], a: 2 },
            { q: 'How many bones in the adult human body?', o: ['196', '206', '216', '226'], a: 1 }
        ],
        medium: [
            { q: 'Which country gifted the Statue of Liberty to the USA?', o: ['Spain', 'France', 'Italy', 'England'], a: 1 },
            { q: 'What is the smallest country in the world by area?', o: ['Monaco', 'San Marino', 'Vatican City', 'Nauru'], a: 2 },
            { q: 'Which gas do plants absorb from the atmosphere for photosynthesis?', o: ['Nitrogen', 'Carbon Dioxide', 'Hydrogen', 'Oxygen'], a: 1 },
            { q: 'Who was the first man to walk on the Moon?', o: ['Buzz Aldrin', 'Yuri Gagarin', 'Neil Armstrong', 'John Glenn'], a: 2 },
            { q: 'Which is the largest desert in the world (by area)?', o: ['Arabian Desert', 'Gobi Desert', 'Antarctic Desert', 'Sahara Desert'], a: 2 },
            { q: 'Which organ in the human body produces insulin?', o: ['Heart', 'Pancreas', 'Kidney', 'Liver'], a: 1 },
            { q: 'Which currency is used in Japan?', o: ['Won', 'Yuan', 'Ringgit', 'Yen'], a: 3 },
            { q: 'Which is the tallest mountain in the world?', o: ['K2', 'Lhotse', 'Mount Everest', 'Kangchenjunga'], a: 2 },
            { q: 'How many continents are there on Earth?', o: ['8', '6', '7', '5'], a: 2 },
            { q: 'Which Indian state is known as the "Spice Garden of India"?', o: ['Karnataka', 'Kerala', 'Goa', 'Tamil Nadu'], a: 1 }
        ],
        hard: [
            { q: 'Which treaty formally ended World War I?', o: ['Treaty of Paris', 'Treaty of Versailles', 'Treaty of Lausanne', 'Treaty of Vienna'], a: 1 },
            { q: 'Which element has the chemical symbol "Hg"?', o: ['Hydrogen', 'Mercury', 'Hafnium', 'Helium'], a: 1 },
            { q: 'Who wrote the Indian national anthem "Jana Gana Mana"?', o: ['Subhas Chandra Bose', 'Sarojini Naidu', 'Rabindranath Tagore', 'Bankim Chandra Chattopadhyay'], a: 2 },
            { q: 'Which strait separates Asia and North America?', o: ['Strait of Gibraltar', 'Palk Strait', 'Bering Strait', 'Strait of Malacca'], a: 2 },
            { q: 'Which empire built the Great Wall of China primarily during its dynasty?', o: ['Ottoman Empire', 'Multiple dynasties, mainly Ming', 'Roman Empire', 'Mongol Empire'], a: 1 },
            { q: 'What is the rarest blood type among humans?', o: ['O-negative', 'AB-negative', 'A-negative', 'B-negative'], a: 1 },
            { q: 'Which scientist proposed the theory of general relativity?', o: ['Niels Bohr', 'Isaac Newton', 'Albert Einstein', 'Max Planck'], a: 2 },
            { q: 'The Magna Carta was signed in which year?', o: ['1776', '1492', '1215', '1066'], a: 2 },
            { q: 'Which river is considered the longest in Asia?', o: ['Mekong River', 'Yellow River', 'Yangtze River', 'Ganges River'], a: 2 },
            { q: 'Which country was formerly known as "Persia"?', o: ['Turkey', 'Iran', 'Syria', 'Iraq'], a: 1 }
        ]
    },
    gg: {
        easy: [
            { q: 'Minecraft was created by?', o: ['Epic Games', 'Mojang', 'Valve', 'Rockstar Games'], a: 1 },
            { q: 'BGMI stands for?', o: ['Gaming India', 'Battle Grounds Mobile India', 'Best Gaming Mobile India', 'Battle Game Mobile India'], a: 1 },
            { q: 'Which company created Valorant?', o: ['Activision', 'EA', 'Riot Games', 'Ubisoft'], a: 2 },
            { q: 'GTA stands for?', o: ['Global Traffic Agency', 'Grand Theft Auto', 'Game Time Action', 'Great Traffic Area'], a: 1 },
            { q: 'Free Fire is a?', o: ['Sports Game', 'Puzzle Game', 'Battle Royale Game', 'Racing Game'], a: 2 },
            { q: 'PlayStation is made by?', o: ['Nintendo', 'Sony', 'Apple', 'Microsoft'], a: 1 },
            { q: 'Xbox is made by?', o: ['Google', 'Apple', 'Microsoft', 'Sony'], a: 2 },
            { q: 'Which game features Steve?', o: ['Valorant', 'Minecraft', 'BGMI', 'GTA'], a: 1 },
            { q: 'Esports refers to?', o: ['Entertainment Sports', 'Electronic Sports', 'Event Sports', 'Easy Sports'], a: 1 },
            { q: 'Valorant is a?', o: ['Strategy Shooter', 'Puzzle Game', 'Cricket Game', 'Racing Game'], a: 0 }
        ],

        medium: [
            { q: 'Which company developed "The Legend of Zelda" series?', o: ['Capcom', 'Nintendo', 'Sega', 'Sony'], a: 1 },
            { q: 'What does MOBA stand for?', o: ['Massive Open Battle Arena', 'Multiplayer Online Battle Arena', 'Multiplayer Open Battle Area', 'Massive Online Battle Adventure'], a: 1 },
            { q: 'Which game popularized the Battle Royale genre first at scale?', o: ['Minecraft', 'PUBG / Fortnite era (PUBG first mainstreamed it)', 'FIFA', 'Call of Duty'], a: 1 },
            { q: 'Which company owns the "Call of Duty" franchise?', o: ['Ubisoft', 'Take-Two', 'Activision', 'EA'], a: 2 },
            { q: 'In chess notation, what does "O-O" represent?', o: ['Checkmate', 'Kingside castling', 'En passant', 'A draw'], a: 1 },
            { q: 'Which engine is widely used to develop both Fortnite and many AAA games?', o: ['Source Engine', 'CryEngine', 'Unity', 'Unreal Engine'], a: 3 },
            { q: 'What does "NPC" stand for in gaming?', o: ['Network Player Connection', 'Non-Player Character', 'New Player Character', 'Non-Personal Class'], a: 1 },
            { q: 'Which game series features the character Master Chief?', o: ['Doom', 'Halo', 'Destiny', 'Gears of War'], a: 1 },
            { q: 'Which company developed the "Genshin Impact" game?', o: ['Tencent', 'Garena', 'HoYoverse (miHoYo)', 'NetEase'], a: 2 },
            { q: 'What is "respawning" in video games?', o: ['Switching weapons', 'Joining a new server', 'Reappearing after death/elimination', 'Saving the game'], a: 2 }
        ],

        hard: [
            { q: 'Which game is widely credited as the first commercially successful video game (1972)?', o: ['Pac-Man', 'Pong', 'Tetris', 'Space Invaders'], a: 1 },
            { q: 'Which esports title has the highest prize pool tournament historically (The International)?', o: ['Fortnite', 'Dota 2', 'CS:GO', 'League of Legends'], a: 1 },
            { q: 'Who is the creator of the "Super Mario" franchise?', o: ['Gunpei Yokoi', 'Hideo Kojima', 'Shigeru Miyamoto', 'Satoru Iwata'], a: 2 },
            { q: 'Which game introduced the now-common "battle pass" monetization model widely?', o: ['Fortnite', 'Apex Legends', 'Dota 2 (Compendium) popularized the concept', 'PUBG'], a: 2 },
            { q: 'What year was the first "World Cyber Games" held?', o: ['2010', '2000', '1995', '2005'], a: 1 },
            { q: 'Which game designer is known for "Metal Gear Solid"?', o: ['Todd Howard', 'Hideo Kojima', 'Shigeru Miyamoto', 'Hidetaka Miyazaki'], a: 1 },
            { q: 'Which studio developed "Dark Souls" and "Elden Ring"?', o: ['Bethesda', 'Square Enix', 'FromSoftware', 'CD Projekt Red'], a: 2 },
            { q: 'What does "ping" measure in online gaming?', o: ['Frame rate', 'Network latency', 'CPU usage', 'Server load'], a: 1 },
            { q: 'Which console was Sony\'s first entry into the gaming market?', o: ['PSP', 'PlayStation (1994)', 'PlayStation 3', 'PlayStation 2'], a: 1 },
            { q: 'Which game is considered the origin of the "Roguelike" genre name?', o: ['Diablo', 'Hades', 'Rogue (1980)', 'NetHack'], a: 2 }
        ]
    },
    fd: {
        easy: [
            { q: 'Which state is famous for Vada Pav?', o: ['Punjab', 'Maharashtra', 'Kerala', 'Gujarat'], a: 1 },
            { q: 'What is the main ingredient of Paneer?', o: ['Potato', 'Rice', 'Milk', 'Wheat'], a: 2 },
            { q: 'Which Indian bread is cooked in a tandoor?', o: ['Thepla', 'Naan', 'Bhakri', 'Puri'], a: 1 },
            { q: 'Biryani is primarily made with?', o: ['Millet', 'Rice', 'Corn', 'Wheat'], a: 1 },
            { q: 'Which sweet is commonly associated with West Bengal?', o: ['Jalebi', 'Laddu', 'Rasgulla', 'Mysore Pak'], a: 2 },
            { q: 'What is the main ingredient in Dosa?', o: ['Rice and Lentils', 'Barley', 'Maize', 'Wheat'], a: 0 },
            { q: 'Which drink is popularly made from yogurt?', o: ['Sharbat', 'Coffee', 'Lassi', 'Tea'], a: 2 },
            { q: 'Pani Puri is also known as?', o: ['Kachori', 'Puchka', 'Poha', 'Dhokla'], a: 1 },
            { q: 'Which spice gives turmeric its yellow color?', o: ['Curcumin', 'Menthol', 'Caffeine', 'Capsaicin'], a: 0 },
            { q: 'Poha is a popular breakfast dish made from?', o: ['Millets', 'Flattened Rice', 'Corn', 'Wheat'], a: 1 }
        ],

        medium: [
            { q: 'Pani Puri is commonly known as what in Rajasthan?', o: ['Gupchup', 'Puchka', 'Pani ke Batashe', 'Golgappa'], a: 2 },
            { q: 'Dhokla originates from which state?', o: ['Maharashtra', 'Punjab', 'Gujarat', 'Rajasthan'], a: 2 },
            { q: 'What is the main ingredient in Sarson Ka Saag?', o: ['Spinach', 'Mustard Leaves', 'Fenugreek', 'Cabbage'], a: 1 },
            { q: 'Which state is known for Appam and Stew?', o: ['Goa', 'Kerala', 'Tamil Nadu', 'Odisha'], a: 1 },
            { q: 'What is traditionally used to make Makki Ki Roti?', o: ['Rice Flour', 'Corn Flour', 'Gram Flour', 'Wheat Flour'], a: 1 },
            { q: 'Which Indian sweet is made from khoya and sugar syrup?', o: ['Peda', 'Kaju Katli', 'Gulab Jamun', 'Rasgulla'], a: 2 },
            { q: 'Misal Pav is a famous dish from?', o: ['Punjab', 'Bihar', 'Maharashtra', 'Goa'], a: 2 },
            { q: 'What is the main filling in a traditional Samosa?', o: ['Chicken', 'Spiced Potato', 'Rice', 'Paneer'], a: 1 },
            { q: 'Which spice blend is commonly used in Indian cooking?', o: ['Cajun', 'Garam Masala', 'Herbes de Provence', 'Zaatar'], a: 1 },
            { q: 'Dal Makhani is traditionally made using?', o: ['Soybeans', 'Green Peas', 'Black Lentils', 'Yellow Lentils'], a: 2 }
        ],

        hard: [
            { q: 'Which GI-tagged mango variety is famous in Maharashtra?', o: ['Totapuri', 'Alphonso', 'Dasheri', 'Langra'], a: 1 },
            { q: 'What is the main ingredient in traditional Puran Poli stuffing?', o: ['Moong Dal', 'Rice', 'Chana Dal', 'Urad Dal'], a: 2 },
            { q: 'Which city is famous for the sweet Petha?', o: ['Kanpur', 'Lucknow', 'Agra', 'Jaipur'], a: 2 },
            { q: 'Bisi Bele Bath is a traditional dish from?', o: ['Kerala', 'Andhra Pradesh', 'Karnataka', 'Tamil Nadu'], a: 2 },
            { q: 'What is the primary ingredient in Shrikhand?', o: ['Cream', 'Paneer', 'Hung Curd', 'Milk'], a: 2 },
            { q: 'Which state is known for the dish Undhiyu?', o: ['Punjab', 'Gujarat', 'Madhya Pradesh', 'Rajasthan'], a: 1 },
            { q: 'What is the traditional cooking vessel used for Dum Biryani?', o: ['Patila', 'Handi', 'Tawa', 'Kadhai'], a: 1 },
            { q: 'Which Maharashtrian snack is made from spicy sprouted moth beans?', o: ['Thalipeeth', 'Poha', 'Misal', 'Sabudana Khichdi'], a: 2 },
            { q: 'What is the main ingredient in Sabudana Khichdi?', o: ['Rice', 'Corn', 'Tapioca Pearls', 'Wheat'], a: 2 },
            { q: 'Which famous Indian dessert is made from condensed milk and rice?', o: ['Peda', 'Halwa', 'Kheer', 'Jalebi'], a: 2 }
        ]
    },
    br: {
        easy: [
            { q: 'What does "skibidi" originate from?', o: ['A sports term', 'A YouTube animated series', 'A news broadcast', 'A cooking show'], a: 1 },
            { q: 'What does "rizz" mean in slang?', o: ['Sadness', 'Confusion', 'Charisma / charm', 'Anger'], a: 2 },
            { q: 'What is "Ohio" used to mean in internet meme slang?', o: ['A dance move', 'Something bizarre or chaotic', 'A type of food', 'Something boring'], a: 1 },
            { q: 'What does "NPC" mean when used as slang for a person?', o: ['A famous celebrity', 'Someone acting unoriginal or scripted', 'A type of meme song', 'A video game console'], a: 1 },
            { q: 'What does "gyatt" typically express in slang?', o: ['A greeting', 'Shock or exaggerated reaction', 'A sports move', 'A type of food'], a: 1 },
            { q: 'What does "sigma" mean in modern internet slang?', o: ['A sad mood', 'A lone, independent, confident person', 'A weak person', 'A type of math symbol only'], a: 1 },
            { q: 'What is a "brainrot" meme generally characterized by?', o: ['Classical literature references', 'Formal news reporting', 'Absurd, repetitive, low-effort viral content', 'High-quality documentary content'], a: 2 },
            { q: 'What does "fanum tax" refer to in slang?', o: ['A video game level', 'Paying actual taxes', 'Taking a portion of someone\'s food', 'A type of dance'], a: 2 },
            { q: 'What does "mewing" refer to in viral trends?', o: ['A swimming style', 'A jaw/tongue posture trend', 'A type of cat sound', 'A cooking technique'], a: 1 },
            { q: 'What does "Gen Alpha" generally refer to?', o: ['A social media platform', 'The generation after Gen Z', 'A video game character', 'A music genre'], a: 1 }
        ],

        medium: [
            { q: 'What is "Skibidi Toilet" as a media format?', o: ['A cooking tutorial series', 'A surreal animated YouTube series', 'A mobile cleaning app', 'A news satire show'], a: 1 },
            { q: 'What does "delulu" mean in slang?', o: ['Very angry', 'Delusional, often used playfully', 'Very tired', 'Extremely happy'], a: 1 },
            { q: 'What does "it\'s giving..." typically introduce in slang?', o: ['A warning', 'A vibe or impression something conveys', 'A countdown', 'A gift being given'], a: 1 },
            { q: 'What does "core" mean when attached to words like "cottagecore"?', o: ['A type of music tempo', 'The center of an object', 'An aesthetic or stylistic theme', 'A computer processor part'], a: 2 },
            { q: 'What does "caught in 4K" mean?', o: ['Winning a video game match', 'Caught doing something with clear undeniable evidence', 'Filmed in high resolution only', 'A type of camera setting'], a: 1 },
            { q: 'What does "bussin" mean in slang?', o: ['Extremely boring', 'Really good, especially food', 'Very bad', 'Slow moving'], a: 1 },
            { q: 'What is the origin format of "Italian Brainrot" memes like "Tralalero Tralala"?', o: ['Soccer commentary clips', 'Classic Italian cinema clips', 'AI-generated surreal animal characters with Italian-sounding names', 'Italian cooking shows'], a: 2 },
            { q: 'What does "the ick" refer to in slang?', o: ['A skin condition', 'A sudden feeling of being turned off by someone', 'A video game glitch', 'A type of dance move'], a: 1 },
            { q: 'What does "main character energy" describe?', o: ['Playing a video game lead role', 'Acting confidently like the protagonist of your life', 'Writing a screenplay', 'Being the villain in a story'], a: 1 },
            { q: 'What does "ratio" mean as an internet slang reply?', o: ['A cooking measurement', 'A math equation', 'Indicating a reply got more engagement than the original post', 'A type of meme song'], a: 2 }
        ],

        hard: [
            { q: 'What is the general structural conceit behind most "Italian Brainrot" character memes?', o: ['Restaurant menu items', 'Absurd hybrid animal/object names with invented mythologies', 'Football player nicknames', 'Real Italian historical figures'], a: 1 },
            { q: 'What does "low-effort viral content cycle" generally describe in internet culture analysis?', o: ['Traditional television rating systems', 'Rapid spread of simple, repetitive content with little original substance', 'Peer-reviewed academic publishing', 'Documentary-style long-form storytelling'], a: 1 },
            { q: 'What does "core-stacking" refer to when multiple aesthetic suffixes are combined (e.g., "dark academia cottagecore")?', o: ['A music production technique', 'Blending multiple stylistic micro-aesthetics together', 'A computer hardware configuration', 'A fashion industry term for layering clothes only'], a: 1 },
            { q: 'What distinguishes "copypasta" from a regular meme?', o: ['It requires original art each time', 'It is text copied and pasted repeatedly across platforms', 'It is exclusive to one platform', 'It is always a video format'], a: 1 },
            { q: 'What does the phrase "this you?" typically accompany online?', o: ['A compliment on appearance', 'A screenshot used to call out hypocrisy or contradiction', 'A weather update', 'A request for identification'], a: 1 },
            { q: 'What is the general phenomenon called when AI-generated voices narrate absurd brainrot content?', o: ['Audiobook narration', 'AI-narrated meme content / "AI brainrot"', 'Podcast production', 'Voice acting auditions'], a: 1 },
            { q: 'What does "engagement farming" describe in social media slang?', o: ['A type of investment strategy', 'Posting content designed mainly to maximize likes/comments', 'A video game farming simulator', 'Growing actual crops for a living'], a: 1 },
            { q: 'What does "brain rot" mean in its original, pre-meme dictionary sense?', o: ['A type of computer virus', 'Mental dulling from consuming trivial content excessively', 'A horror movie genre', 'A literal medical brain disease'], a: 1 },
            { q: 'Why are nonsensical naming conventions (e.g. combining unrelated words/sounds) common in brainrot meme characters?', o: ['They come from translated foreign news', 'They are intentionally absurd to maximize shareability and humor', 'They follow strict linguistic rules', 'They are randomly generated by dictionaries'], a: 1 },
            { q: 'What is a key reason short-form "brainrot" content spreads rapidly across platforms?', o: ['It is promoted only through paid ads', 'Algorithms favor short, highly engaging, easily repeatable content', 'It is exclusive to a single app', 'It requires manual approval before sharing'], a: 1 }
        ]
    }
};

const DT = { easy: 15, medium: 15, hard: 15 };
const PM = [
    { min: 90, msg: '🔥 Outstanding! True master!', t: '🏆' },
    { min: 70, msg: '⭐ Great job! You know your stuff!', t: '🥇' },
    { min: 50, msg: '👍 Good effort! Keep practicing!', t: '🥈' },
    { min: 30, msg: '📚 Not bad — room to grow!', t: '🥉' },
    { min: 0, msg: '💪 Keep trying — every quiz teaches!', t: '😅' },
];

let selC = null, selD = null, qs = [], cq = 0, sc2 = 0, tl = 30, tmr = null, ans = false, rv = [], corr = 0, wrng = 0;

function thm() { const h = document.documentElement, d = h.getAttribute('data-theme') === 'dark'; h.setAttribute('data-theme', d ? 'light' : 'dark'); document.querySelector('.tog').textContent = d ? '🌞' : '🌙'; }

function go(id) {
    document.querySelectorAll('.sc').forEach(s => s.classList.remove('on'));
    document.getElementById(id).classList.add('on');
    if (id === 'lb') rlb();
    if (id === 'rev') rrv();
    document.getElementById('lnk').classList.remove('open');
}

// CATEGORIES
(function () {
    document.getElementById('cgrid').innerHTML = CATS.map(c => `<div class="cc" onclick="sc3('${c.id}',this)"><div class="ci">${c.icon}</div><div class="cn">${c.name}</div></div>`).join('');
})();
function sc3(id, el) { selC = id; document.querySelectorAll('.cc').forEach(c => c.classList.remove('sel')); el.classList.add('sel'); document.getElementById('cnxt').style.display = 'inline-flex'; }

// DIFFICULTY
function sd(d, el) { selD = d; document.querySelectorAll('.dc').forEach(c => c.classList.remove('sel')); el.classList.add('sel'); document.getElementById('dnxt').style.display = 'inline-flex'; }

// START
function startQ() {
    if (!selC || !selD) return;
    qs = [...QS[selC][selD]].sort(() => Math.random() - .5).slice(0, 10);
    cq = 0; sc2 = 0; corr = 0; wrng = 0; rv = [];
    const cat = CATS.find(c => c.id === selC);
    document.getElementById('cb').textContent = cat.icon + ' ' + cat.name;
    document.getElementById('db').textContent = selD[0].toUpperCase() + selD.slice(1);
    go('quiz'); lq();
}

// LOAD QUESTION
function lq() {
    ans = false; const q = qs[cq]; tl = DT[selD];
    document.getElementById('qn').textContent = 'Question ' + (cq + 1);
    document.getElementById('qt').textContent = q.q;
    document.getElementById('pl').textContent = 'Question ' + (cq + 1) + ' of ' + qs.length;
    const p = Math.round((cq / qs.length) * 100);
    document.getElementById('pp').textContent = p + '%';
    document.getElementById('pf').style.width = p + '%';
    document.getElementById('sb').textContent = 'Score: ' + sc2;
    document.getElementById('fb').className = 'fb';
    document.getElementById('nxt').style.display = 'none';
    const L = ['A', 'B', 'C', 'D'];
    document.getElementById('og').innerHTML = q.o.map((o, i) => `<div class="opt" onclick="so(${i},this)" id="o${i}"><span class="ol">${L[i]}</span><span>${o}</span></div>`).join('');
    utd(); clearInterval(tmr); tmr = setInterval(tick, 1000);
}

// TIMER
function tick() { tl--; utd(); if (tl <= 0) { clearInterval(tmr); if (!ans) tu(); } }
function utd() { const e = document.getElementById('tt'); e.textContent = tl; e.className = 'ttxt' + (tl <= 5 ? ' dng' : ''); }
function tu() { ans = true; const q = qs[cq]; mo(q.a, -1); sf(false, q.o[q.a]); wrng++; rv.push({ q: q.q, o: q.o, c: q.a, ch: -1 }); document.getElementById('nxt').style.display = 'inline-flex'; }

// SELECT OPTION
function so(i, el) { if (ans) return; ans = true; clearInterval(tmr); const q = qs[cq], ok = i === q.a; if (ok) { sc2 += selD === 'easy' ? 10 : selD === 'medium' ? 15 : 20; corr++; } else wrng++; mo(q.a, i); sf(ok, q.o[q.a]); rv.push({ q: q.q, o: q.o, c: q.a, ch: i }); document.getElementById('nxt').style.display = 'inline-flex'; }
function mo(ci, ch) { document.querySelectorAll('.opt').forEach(o => o.classList.add('dis')); document.getElementById('o' + ci).classList.add('ok'); if (ch >= 0 && ch !== ci) document.getElementById('o' + ch).classList.add('ng'); }
function sf(ok, ca) { const b = document.getElementById('fb'); b.className = 'fb ' + (ok ? 'ok' : 'ng'); b.innerHTML = ok ? '✅ Correct! Well done!' : `❌ Wrong! Correct answer: <strong>${ca}</strong>`; }

// NEXT
function nxQ() { cq++; if (cq >= qs.length) sres(); else lq(); }

// RESULTS
function sres() {
    clearInterval(tmr);
    const tot = qs.length, mx = tot * (selD === 'easy' ? 10 : selD === 'medium' ? 15 : 20), pc = Math.round((corr / tot) * 100), perf = PM.find(p => pc >= p.min);
    document.getElementById('rt').textContent = perf.t;
    document.getElementById('rm').textContent = perf.msg;
    document.getElementById('sp').textContent = pc + '%';
    document.getElementById('sc').style.setProperty('--pct', `${pc * 3.6}deg`);
    document.getElementById('r1').textContent = tot;
    document.getElementById('r2').textContent = sc2 + ' / ' + mx;
    document.getElementById('r3').textContent = corr;
    document.getElementById('r4').textContent = wrng;
    go('res'); slb(sc2, pc);
}

// LEADERBOARD
function slb(s, p) { const lb = JSON.parse(localStorage.getItem('qm_lb') || '[]'), cat = CATS.find(c => c.id === selC).name; lb.push({ s, p, cat, d: selD, dt: new Date().toLocaleDateString() }); lb.sort((a, b) => b.s - a.s); localStorage.setItem('qm_lb', JSON.stringify(lb.slice(0, 10))); }
function rlb() { const lb = JSON.parse(localStorage.getItem('qm_lb') || '[]'), el = document.getElementById('ll'); if (!lb.length) { el.innerHTML = '<div class="lemp">No scores yet. Play a quiz!</div>'; return; } const md = ['🥇', '🥈', '🥉']; el.innerHTML = lb.map((e, i) => `<li class="li"><span class="lrank">${md[i] || '#' + (i + 1)}</span><div class="linf"><div class="lname">${e.cat} · ${e.d[0].toUpperCase() + e.d.slice(1)}</div><div class="ldet">${e.dt} · ${e.p}% accuracy</div></div><span class="lsc">${e.s} pts</span></li>`).join(''); }
function clrLB() { if (confirm('Clear all scores?')) { localStorage.removeItem('qm_lb'); rlb(); } }

// REVIEW
function rrv() { const c = document.getElementById('rc'); if (!rv.length) { c.innerHTML = '<p style="color:var(--txt2)">Complete a quiz to see the review.</p>'; return; } c.innerHTML = rv.map((r, i) => { const rows = r.o.map((o, j) => { let cl = 'na'; if (j === r.c) cl = 'ca'; else if (j === r.ch && r.ch !== r.c) cl = 'wa'; const ic = j === r.c ? '✅' : j === r.ch ? '❌' : ''; return `<div class="ra ${cl}">${ic} ${String.fromCharCode(65 + j)}. ${o}</div>`; }).join(''); return `<div class="ritem" style="animation-delay:${i * .05}s"><div class="rq"><span class="qn">Q${i + 1}.</span>${r.q}</div><div class="rans">${rows}</div>${r.ch === -1 ? '<div style="color:var(--err);font-size:.8rem;margin-top:6px">⏰ Time ran out</div>' : ''}</div>`; }).join(''); }

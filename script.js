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
            { q: 'Which field is closely related to AI?', o: ['Machine Learning', 'Plumbing', 'Gardening', 'Carpentry'], a: 0 },
            { q: 'Which AI model generates images?', o: ['DALL·E', 'Excel', 'Firefox', 'VLC'], a: 0 },
            { q: 'AI is mainly used to?', o: ['Solve problems and automate tasks', 'Grow plants', 'Repair roads', 'Print books'], a: 0 },
            { q: 'Which of these is a chatbot?', o: ['ChatGPT', 'Spotify', 'Netflix', 'WhatsApp'], a: 0 },
            { q: 'Self-driving cars use?', o: ['Artificial Intelligence', 'Solar Panels', 'Calculators', 'Typewriters'], a: 0 },
            { q: 'Which company developed Gemini?', o: ['Apple', 'Google', 'Amazon', 'Intel'], a: 1 },
            { q: 'AI can recognize?', o: ['Images and Speech', 'Smells only', 'Trees only', 'Rocks only'], a: 0 }
        ],
        medium: [
            { q: 'What is Machine Learning?', o: ['A subset of AI', 'A computer virus', 'A programming language', 'A web browser'], a: 0 },
            { q: 'Which algorithm is used for classification?', o: ['Decision Tree', 'Bubble Sort', 'Binary Search', 'Quick Sort'], a: 0 },
            { q: 'Which type of learning uses labeled data?', o: ['Supervised Learning', 'Reinforcement Learning', 'Unsupervised Learning', 'Evolutionary Learning'], a: 0 },
            { q: 'Which language is most popular for AI development?', o: ['Python', 'HTML', 'CSS', 'PHP'], a: 0 },
            { q: 'What does NLP stand for?', o: ['Natural Language Processing', 'Network Layer Protocol', 'Neural Logic Programming', 'Numerical Learning Process'], a: 0 },
            { q: 'Which neural network is commonly used for image recognition?', o: ['CNN', 'RNN', 'GAN', 'DBMS'], a: 0 },
            { q: 'Which learning method relies on rewards and penalties?', o: ['Reinforcement Learning', 'Supervised Learning', 'Unsupervised Learning', 'Transfer Learning'], a: 0 },
            { q: 'Which AI model architecture powers ChatGPT?', o: ['Transformer', 'CNN', 'KNN', 'Decision Tree'], a: 0 },
            { q: 'Which metric is commonly used to evaluate classification models?', o: ['Accuracy', 'Bandwidth', 'Throughput', 'Latency'], a: 0 },
            { q: 'Which of the following is an example of Generative AI?', o: ['ChatGPT', 'Calculator', 'MS Paint', 'File Explorer'], a: 0 }
        ],
        hard: [
            { q: 'Who introduced the term "Artificial Intelligence" in 1956?', o: ['John McCarthy', 'Alan Turing', 'Geoffrey Hinton', 'Yann LeCun'], a: 0 },
            { q: 'Which activation function is commonly used in deep neural networks?', o: ['ReLU', 'XOR', 'FIFO', 'DFS'], a: 0 },
            { q: 'What does GPT stand for?', o: ['Generative Pre-trained Transformer', 'General Processing Tool', 'Graph Prediction Technology', 'Generative Pattern Transfer'], a: 0 },
            { q: 'Which optimization algorithm is widely used in deep learning?', o: ['Adam', 'Dijkstra', 'Prim', 'Kruskal'], a: 0 },
            { q: 'Which architecture introduced the concept "Attention Is All You Need"?', o: ['Transformer', 'CNN', 'SVM', 'RNN'], a: 0 },
            { q: 'What is overfitting in machine learning?', o: ['A model performs well on training data but poorly on new data', 'Increasing dataset size', 'Reducing model complexity', 'Data compression'], a: 0 },
            { q: 'Which algorithm is commonly used for dimensionality reduction?', o: ['PCA', 'BFS', 'Merge Sort', 'Heap Sort'], a: 0 },
            { q: 'Which model was commonly used for sequential text generation before Transformers?', o: ['RNN', 'CNN', 'K-Means', 'Naive Bayes'], a: 0 },
            { q: 'Which loss function is commonly used in binary classification?', o: ['Binary Cross Entropy', 'Mean Absolute Error', 'Euclidean Distance', 'Hinge Distance'], a: 0 },
            { q: 'What does the "T" in BERT stand for?', o: ['Transformer', 'Tokenizer', 'Training', 'Tensor'], a: 0 }
        ]
    },
    tech: {
        easy: [
            { q: 'HTML stands for?', o: ['Hyper Text Markup Language', 'High Text Machine Language', 'Hyper Tool Markup Language', 'Home Tool Markup Language'], a: 0 },
            { q: 'CSS is used for?', o: ['Styling webpages', 'Database', 'Networking', 'Security'], a: 0 },
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
            { q: 'What is the time complexity of binary search?', o: ['O(log n)', 'O(n)', 'O(n²)', 'O(1)'], a: 0 },
            { q: 'Which company developed React?', o: ['Meta (Facebook)', 'Google', 'Microsoft', 'Amazon'], a: 0 },
            { q: 'What does SQL stand for?', o: ['Structured Query Language', 'Simple Query Logic', 'Sequential Query List', 'System Query Language'], a: 0 },
            { q: 'Which port does HTTPS use by default?', o: ['443', '80', '21', '25'], a: 0 },
            { q: 'What is Docker primarily used for?', o: ['Containerization', 'Video editing', 'Web hosting only', '3D rendering'], a: 0 },
            { q: 'Which language is Node.js built on?', o: ['JavaScript', 'Python', 'Ruby', 'Go'], a: 0 },
            { q: 'What does CRUD stand for in development?', o: ['Create, Read, Update, Delete', 'Compile, Run, Update, Debug', 'Create, Run, Undo, Delete', 'Copy, Read, Use, Discard'], a: 0 }
        ],
        hard: [
            { q: 'What is the time complexity of quicksort in the average case?', o: ['O(n log n)', 'O(n²)', 'O(log n)', 'O(n)'], a: 0 },
            { q: 'Which design pattern restricts a class to one instance?', o: ['Singleton', 'Factory', 'Observer', 'Adapter'], a: 0 },
            { q: 'What does ACID stand for in databases?', o: ['Atomicity, Consistency, Isolation, Durability', 'Access, Control, Identity, Data', 'Async, Cache, Index, Data', 'Atomic, Cache, Isolation, Data'], a: 0 },
            { q: 'Which sorting algorithm is stable and has O(n log n) worst case?', o: ['Merge Sort', 'Quick Sort', 'Bubble Sort', 'Selection Sort'], a: 0 },
            { q: 'What problem does a CAP theorem address?', o: ['Distributed system tradeoffs', 'Compiler optimization', 'Memory leaks', 'CSS rendering'], a: 0 },
            { q: 'Which concurrency issue occurs when two threads modify shared data unsafely?', o: ['Race condition', 'Memory leak', 'Stack overflow', 'Buffer underflow'], a: 0 },
            { q: 'What is the primary purpose of a load balancer?', o: ['Distribute traffic across servers', 'Compress images', 'Encrypt passwords', 'Render UI'], a: 0 },
            { q: 'Which data structure underlies most hash maps?', o: ['Array with hashing function', 'Linked list only', 'Binary tree only', 'Stack'], a: 0 },
            { q: 'What does idempotency mean for an HTTP method?', o: ['Repeating it has the same effect as once', 'It always fails on retry', 'It requires authentication', 'It only works over HTTPS'], a: 0 },
            { q: 'Which algorithmic technique does dynamic programming rely on?', o: ['Overlapping subproblems and optimal substructure', 'Random sampling', 'Brute force only', 'Greedy choice only'], a: 0 }
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
            { q: 'In which decade did color television-era blockbuster "Star Wars" (the original) release?', o: ['1970s', '1980s', '1990s', '1960s'], a: 0 },
            { q: 'Which platform is known for K-dramas like "Squid Game"?', o: ['Netflix', 'Disney+', 'Prime Video', 'Apple TV+'], a: 0 }
        ],
        hard: [
            { q: 'Which film won the first-ever Academy Award for Best Picture?', o: ['Wings (1927)', 'Casablanca', 'Gone with the Wind', 'Citizen Kane'], a: 0 },
            { q: 'Who was the first actor to portray James Bond on film?', o: ['Sean Connery', 'Roger Moore', 'Daniel Craig', 'George Lazenby'], a: 0 },
            { q: 'Which director is known for long, continuous takes in "Birdman" and "1917" style filmmaking?', o: ['Both used by different directors (Iñárritu and Mendes)', 'Only Christopher Nolan', 'Only Quentin Tarantino', 'Only Martin Scorsese'], a: 0 },
            { q: 'Which film studio created the "Universal Monsters" franchise?', o: ['Universal Pictures', 'Warner Bros', 'Paramount', 'MGM'], a: 0 },
            { q: 'Satyajit Ray, a pioneer of Indian cinema, is best known for which trilogy?', o: ['The Apu Trilogy', 'The Godfather Trilogy', 'The Matrix Trilogy', 'The Lord of the Rings Trilogy'], a: 0 },
            { q: 'Which film holds the record for most Oscar wins (11)?', o: ['Tied: Ben-Hur, Titanic, Lord of the Rings: Return of the King', 'Avatar', 'Avengers: Endgame', 'Star Wars'], a: 0 },
            { q: 'Which technique describes filming using miniatures and forced perspective, famously used in early "Lord of the Rings"?', o: ['Forced perspective / miniature effects', 'Green screen only', 'Motion capture only', 'Stop motion only'], a: 0 },
            { q: 'Which silent film era actor was famous for physical comedy and the "Tramp" character?', o: ['Charlie Chaplin', 'Buster Keaton', 'Harold Lloyd', 'Fatty Arbuckle'], a: 0 },
            { q: 'Which film is widely cited as the first feature-length sync-sound "talkie"?', o: ['The Jazz Singer (1927)', 'Citizen Kane', 'King Kong', 'Metropolis'], a: 0 },
            { q: 'Akira Kurosawa\'s "Seven Samurai" heavily influenced which Hollywood western remake?', o: ['The Magnificent Seven', 'The Good, the Bad and the Ugly', 'Unforgiven', 'Tombstone'], a: 0 }
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
            { q: 'Who is the only player to win the FIFA World Cup as both player and head coach?', o: ['Mário Zagallo / Franz Beckenbauer (both achieved it)', 'Pelé', 'Diego Maradona', 'Zinedine Zidane'], a: 0 },
            { q: 'Which country has won the most Olympic gold medals overall (all-time)?', o: ['United States', 'Soviet Union', 'China', 'Germany'], a: 0 },
            { q: 'In Formula 1, which driver has won the most World Championships (as of recent history)?', o: ['Lewis Hamilton and Michael Schumacher (tied at 7)', 'Sebastian Vettel', 'Ayrton Senna', 'Max Verstappen'], a: 0 },
            { q: 'Which fencing/boxing-related rule describes scoring via repeated points within a time limit, common to combat-sport judging?', o: ['Point-based round judging', 'Sudden death only', 'Single elimination only', 'Time-based knockout only'], a: 0 },
            { q: 'Which cricketer holds the record for most international centuries?', o: ['Virat Kohli', 'Sachin Tendulkar', 'Ricky Ponting', 'Kumar Sangakkara'], a: 1 },
            { q: 'What is the term for a chess-clock style countdown used in some sports broadcasts called?', o: ['Shot clock', 'Stop clock', 'Match clock', 'Penalty clock'], a: 0 },
            { q: 'Which athlete is known as the fastest man in history over 100m (world record holder)?', o: ['Usain Bolt', 'Tyson Gay', 'Carl Lewis', 'Justin Gatlin'], a: 0 },
            { q: 'In golf, what term describes scoring one stroke under par on a hole?', o: ['Birdie', 'Eagle', 'Bogey', 'Albatross'], a: 0 },
            { q: 'Which country won the inaugural Rugby World Cup in 1987?', o: ['New Zealand', 'Australia', 'South Africa', 'England'], a: 0 },
            { q: 'Which swimmer has won the most Olympic gold medals of any athlete?', o: ['Michael Phelps', 'Mark Spitz', 'Katie Ledecky', 'Ian Thorpe'], a: 0 }
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
            { q: 'Which country gifted the Statue of Liberty to the USA?', o: ['France', 'England', 'Spain', 'Italy'], a: 0 },
            { q: 'What is the smallest country in the world by area?', o: ['Vatican City', 'Monaco', 'Nauru', 'San Marino'], a: 0 },
            { q: 'Which gas do plants absorb from the atmosphere for photosynthesis?', o: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'], a: 0 },
            { q: 'Who was the first man to walk on the Moon?', o: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'John Glenn'], a: 0 },
            { q: 'Which is the largest desert in the world (by area)?', o: ['Antarctic Desert', 'Sahara Desert', 'Gobi Desert', 'Arabian Desert'], a: 0 },
            { q: 'Which organ in the human body produces insulin?', o: ['Pancreas', 'Liver', 'Kidney', 'Heart'], a: 0 },
            { q: 'Which currency is used in Japan?', o: ['Yen', 'Won', 'Yuan', 'Ringgit'], a: 0 },
            { q: 'Which is the tallest mountain in the world?', o: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'], a: 0 },
            { q: 'How many continents are there on Earth?', o: ['7', '5', '6', '8'], a: 0 },
            { q: 'Which Indian state is known as the "Spice Garden of India"?', o: ['Kerala', 'Goa', 'Tamil Nadu', 'Karnataka'], a: 0 }
        ],
        hard: [
            { q: 'Which treaty formally ended World War I?', o: ['Treaty of Versailles', 'Treaty of Paris', 'Treaty of Vienna', 'Treaty of Lausanne'], a: 0 },
            { q: 'Which element has the chemical symbol "Hg"?', o: ['Mercury', 'Helium', 'Hydrogen', 'Hafnium'], a: 0 },
            { q: 'Who wrote the Indian national anthem "Jana Gana Mana"?', o: ['Rabindranath Tagore', 'Bankim Chandra Chattopadhyay', 'Sarojini Naidu', 'Subhas Chandra Bose'], a: 0 },
            { q: 'Which strait separates Asia and North America?', o: ['Bering Strait', 'Strait of Gibraltar', 'Strait of Malacca', 'Palk Strait'], a: 0 },
            { q: 'Which empire built the Great Wall of China primarily during its dynasty?', o: ['Multiple dynasties, mainly Ming', 'Roman Empire', 'Mongol Empire', 'Ottoman Empire'], a: 0 },
            { q: 'What is the rarest blood type among humans?', o: ['AB-negative', 'O-negative', 'B-negative', 'A-negative'], a: 0 },
            { q: 'Which scientist proposed the theory of general relativity?', o: ['Albert Einstein', 'Isaac Newton', 'Niels Bohr', 'Max Planck'], a: 0 },
            { q: 'The Magna Carta was signed in which year?', o: ['1215', '1066', '1492', '1776'], a: 0 },
            { q: 'Which river is considered the longest in Asia?', o: ['Yangtze River', 'Ganges River', 'Mekong River', 'Yellow River'], a: 0 },
            { q: 'Which country was formerly known as "Persia"?', o: ['Iran', 'Iraq', 'Turkey', 'Syria'], a: 0 }
        ]
    },
    gg: {
        easy: [
            { q: 'Minecraft was created by?', o: ['Valve', 'Epic Games', 'Rockstar Games', 'Mojang'], a: 3 },
            { q: 'BGMI stands for?', o: ['Battle Grounds Mobile India', 'Best Gaming Mobile India', 'Battle Game Mobile India', 'Gaming India'], a: 0 },
            { q: 'Which company created Valorant?', o: ['Ubisoft', 'EA', 'Riot Games', 'Activision'], a: 2 },
            { q: 'GTA stands for?', o: ['Grand Theft Auto', 'Great Traffic Area', 'Game Time Action', 'Global Traffic Agency'], a: 0 },
            { q: 'Free Fire is a?', o: ['Battle Royale Game', 'Racing Game', 'Puzzle Game', 'Sports Game'], a: 0 },
            { q: 'PlayStation is made by?', o: ['Microsoft', 'Sony', 'Nintendo', 'Apple'], a: 1 },
            { q: 'Xbox is made by?', o: ['Sony', 'Apple', 'Microsoft', 'Google'], a: 2 },
            { q: 'Which game features Steve?', o: ['GTA', 'Minecraft', 'Valorant', 'BGMI'], a: 1 },
            { q: 'Esports refers to?', o: ['Electronic Sports', 'Easy Sports', 'Entertainment Sports', 'Event Sports'], a: 0 },
            { q: 'Valorant is a?', o: ['Puzzle Game', 'Racing Game', 'Cricket Game', 'Strategy Shooter'], a: 3 }
        ],
        medium: [
            { q: 'Which company developed "The Legend of Zelda" series?', o: ['Nintendo', 'Sony', 'Sega', 'Capcom'], a: 0 },
            { q: 'What does MOBA stand for?', o: ['Multiplayer Online Battle Arena', 'Massive Online Battle Adventure', 'Multiplayer Open Battle Area', 'Massive Open Battle Arena'], a: 0 },
            { q: 'Which game popularized the Battle Royale genre first at scale?', o: ['PUBG / Fortnite era (PUBG first mainstreamed it)', 'Call of Duty', 'Minecraft', 'FIFA'], a: 0 },
            { q: 'Which company owns the "Call of Duty" franchise?', o: ['Activision', 'EA', 'Ubisoft', 'Take-Two'], a: 0 },
            { q: 'In chess notation, what does "O-O" represent?', o: ['Kingside castling', 'A draw', 'Checkmate', 'En passant'], a: 0 },
            { q: 'Which engine is widely used to develop both Fortnite and many AAA games?', o: ['Unreal Engine', 'Unity', 'CryEngine', 'Source Engine'], a: 0 },
            { q: 'What does "NPC" stand for in gaming?', o: ['Non-Player Character', 'New Player Character', 'Non-Personal Class', 'Network Player Connection'], a: 0 },
            { q: 'Which game series features the character Master Chief?', o: ['Halo', 'Gears of War', 'Destiny', 'Doom'], a: 0 },
            { q: 'Which company developed the "Genshin Impact" game?', o: ['HoYoverse (miHoYo)', 'Tencent', 'NetEase', 'Garena'], a: 0 },
            { q: 'What is "respawning" in video games?', o: ['Reappearing after death/elimination', 'Saving the game', 'Switching weapons', 'Joining a new server'], a: 0 }
        ],
        hard: [
            { q: 'Which game is widely credited as the first commercially successful video game (1972)?', o: ['Pong', 'Space Invaders', 'Pac-Man', 'Tetris'], a: 0 },
            { q: 'Which esports title has the highest prize pool tournament historically (The International)?', o: ['Dota 2', 'League of Legends', 'CS:GO', 'Fortnite'], a: 0 },
            { q: 'Who is the creator of the "Super Mario" franchise?', o: ['Shigeru Miyamoto', 'Hideo Kojima', 'Satoru Iwata', 'Gunpei Yokoi'], a: 0 },
            { q: 'Which game introduced the now-common "battle pass" monetization model widely?', o: ['Dota 2 (Compendium) popularized the concept', 'Fortnite', 'PUBG', 'Apex Legends'], a: 0 },
            { q: 'What year was the first "World Cyber Games" held?', o: ['2000', '1995', '2005', '2010'], a: 0 },
            { q: 'Which game designer is known for "Metal Gear Solid"?', o: ['Hideo Kojima', 'Shigeru Miyamoto', 'Todd Howard', 'Hidetaka Miyazaki'], a: 0 },
            { q: 'Which studio developed "Dark Souls" and "Elden Ring"?', o: ['FromSoftware', 'CD Projekt Red', 'Bethesda', 'Square Enix'], a: 0 },
            { q: 'What does "ping" measure in online gaming?', o: ['Network latency', 'Frame rate', 'Server load', 'CPU usage'], a: 0 },
            { q: 'Which console was Sony\'s first entry into the gaming market?', o: ['PlayStation (1994)', 'PlayStation 2', 'PSP', 'PlayStation 3'], a: 0 },
            { q: 'Which game is considered the origin of the "Roguelike" genre name?', o: ['Rogue (1980)', 'NetHack', 'Diablo', 'Hades'], a: 0 }
        ]
    },
    fd: {
        easy: [
            { q: 'Which Italian dish is made of a flat dough base with toppings?', o: ['Pizza', 'Pasta', 'Risotto', 'Lasagna'], a: 0 },
            { q: 'What is the main ingredient in guacamole?', o: ['Avocado', 'Tomato', 'Cucumber', 'Onion'], a: 0 },
            { q: 'Which country is sushi originally from?', o: ['China', 'Japan', 'Korea', 'Thailand'], a: 1 },
            { q: 'What is paneer made from?', o: ['Milk', 'Wheat', 'Rice', 'Soy'], a: 0 },
            { q: 'Which fruit is used to make guacamole green?', o: ['Avocado', 'Lime', 'Apple', 'Kiwi'], a: 0 },
            { q: 'Which spice gives curry its yellow color?', o: ['Turmeric', 'Cumin', 'Paprika', 'Saffron'], a: 0 },
            { q: 'What is the main ingredient in hummus?', o: ['Chickpeas', 'Lentils', 'Peas', 'Beans'], a: 0 },
            { q: 'Which drink is made by fermenting grapes?', o: ['Wine', 'Beer', 'Whiskey', 'Vodka'], a: 0 },
            { q: 'Naan bread originates from which region?', o: ['South Asia', 'East Asia', 'Europe', 'Africa'], a: 0 },
            { q: 'What is the main ingredient in a classic omelette?', o: ['Eggs', 'Milk', 'Flour', 'Cheese'], a: 0 }
        ],
        medium: [
            { q: 'Which country is the origin of croissants?', o: ['France (popularized) / Austria (origin)', 'Italy', 'Germany', 'Spain'], a: 0 },
            { q: 'What is the primary fermenting agent used in traditional bread making?', o: ['Yeast', 'Baking soda', 'Vinegar', 'Salt'], a: 0 },
            { q: 'Which Indian dish is primarily a slow-cooked lentil preparation?', o: ['Dal', 'Biryani', 'Tikka', 'Korma'], a: 0 },
            { q: 'What gives traditional balsamic vinegar its dark color and flavor?', o: ['Aging in wooden barrels', 'Added caramel coloring', 'Mixing with soy sauce', 'Fermented dairy'], a: 0 },
            { q: 'Which cheese is traditionally used in a classic Margherita pizza?', o: ['Mozzarella', 'Cheddar', 'Parmesan only', 'Gouda'], a: 0 },
            { q: 'What is the term for the Japanese cooking technique of frying battered seafood/vegetables?', o: ['Tempura', 'Teriyaki', 'Sashimi', 'Yakitori'], a: 0 },
            { q: 'Which spice is derived from the Crocus flower and is the most expensive by weight?', o: ['Saffron', 'Cardamom', 'Cinnamon', 'Clove'], a: 0 },
            { q: 'What is "umami" considered to be?', o: ['The fifth basic taste (savory)', 'A type of sushi', 'A French sauce', 'A spice blend'], a: 0 },
            { q: 'Which country is the birthplace of the croissant-like "kouign-amann"?', o: ['France', 'Belgium', 'Switzerland', 'Netherlands'], a: 0 },
            { q: 'In baking, what does "proofing" dough refer to?', o: ['Letting dough rise before baking', 'Testing the oven temperature', 'Measuring flour accurately', 'Kneading dough vigorously'], a: 0 }
        ],
        hard: [
            { q: 'Which French cooking term refers to a basic flavor base of onions, carrots, and celery?', o: ['Mirepoix', 'Roux', 'Sofrito', 'Bouquet garni'], a: 0 },
            { q: 'What is the Maillard reaction responsible for in cooking?', o: ['Browning and flavor development from heat on proteins/sugars', 'Fermentation of dairy', 'Crystallization of sugar', 'Emulsification of fats'], a: 0 },
            { q: 'Which region is the protected origin for true "Champagne" sparkling wine?', o: ['Champagne, France', 'Tuscany, Italy', 'Bordeaux, France', 'Catalonia, Spain'], a: 0 },
            { q: 'What is "sous vide" cooking?', o: ['Cooking food sealed in a bag in a precise water bath', 'Deep frying at high heat', 'Smoking meat over wood', 'Flash freezing food'], a: 0 },
            { q: 'Which enzyme in saliva begins the breakdown of starches during eating?', o: ['Amylase', 'Pepsin', 'Lipase', 'Trypsin'], a: 0 },
            { q: 'What distinguishes a "consommé" from a regular broth?', o: ['It is clarified to be completely clear', 'It contains more salt', 'It is always vegetarian', 'It is served cold only'], a: 0 },
            { q: 'Which country is the origin of the fermented soybean paste "miso"?', o: ['Japan', 'China', 'Korea', 'Vietnam'], a: 0 },
            { q: 'What is the primary leavening gas produced by yeast in bread dough?', o: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'], a: 0 },
            { q: 'Which classic French sauce is made from butter, egg yolks, and lemon juice?', o: ['Hollandaise', 'Bechamel', 'Veloute', 'Espagnole'], a: 0 },
            { q: 'What does "al dente" mean when referring to pasta?', o: ['Firm to the bite', 'Overcooked and soft', 'Served cold', 'Coated in oil'], a: 0 }
        ]
    },
    br: {
        easy: [
            { q: 'What does "skibidi" originate from?', o: ['A YouTube animated series', 'A cooking show', 'A sports term', 'A news broadcast'], a: 0 },
            { q: 'What does "rizz" mean in slang?', o: ['Charisma / charm', 'Anger', 'Sadness', 'Confusion'], a: 0 },
            { q: 'What is "Ohio" used to mean in internet meme slang?', o: ['Something bizarre or chaotic', 'Something boring', 'A type of food', 'A dance move'], a: 0 },
            { q: 'What does "NPC" mean when used as slang for a person?', o: ['Someone acting unoriginal or scripted', 'A famous celebrity', 'A video game console', 'A type of meme song'], a: 0 },
            { q: 'What does "gyatt" typically express in slang?', o: ['Shock or exaggerated reaction', 'A greeting', 'A type of food', 'A sports move'], a: 0 },
            { q: 'What does "sigma" mean in modern internet slang?', o: ['A lone, independent, confident person', 'A type of math symbol only', 'A weak person', 'A sad mood'], a: 0 },
            { q: 'What is a "brainrot" meme generally characterized by?', o: ['Absurd, repetitive, low-effort viral content', 'High-quality documentary content', 'Classical literature references', 'Formal news reporting'], a: 0 },
            { q: 'What does "fanum tax" refer to in slang?', o: ['Taking a portion of someone\'s food', 'Paying actual taxes', 'A type of dance', 'A video game level'], a: 0 },
            { q: 'What does "mewing" refer to in viral trends?', o: ['A jaw/tongue posture trend', 'A type of cat sound', 'A cooking technique', 'A swimming style'], a: 0 },
            { q: 'What does "Gen Alpha" generally refer to?', o: ['The generation after Gen Z', 'A video game character', 'A music genre', 'A social media platform'], a: 0 }
        ],
        medium: [
            { q: 'What is "Skibidi Toilet" as a media format?', o: ['A surreal animated YouTube series', 'A mobile cleaning app', 'A cooking tutorial series', 'A news satire show'], a: 0 },
            { q: 'What does "delulu" mean in slang?', o: ['Delusional, often used playfully', 'Extremely happy', 'Very tired', 'Very angry'], a: 0 },
            { q: 'What does "it\'s giving..." typically introduce in slang?', o: ['A vibe or impression something conveys', 'A gift being given', 'A countdown', 'A warning'], a: 0 },
            { q: 'What does "core" mean when attached to words like "cottagecore"?', o: ['An aesthetic or stylistic theme', 'The center of an object', 'A type of music tempo', 'A computer processor part'], a: 0 },
            { q: 'What does "caught in 4K" mean?', o: ['Caught doing something with clear undeniable evidence', 'Filmed in high resolution only', 'Winning a video game match', 'A type of camera setting'], a: 0 },
            { q: 'What does "bussin" mean in slang?', o: ['Really good, especially food', 'Very bad', 'Extremely boring', 'Slow moving'], a: 0 },
            { q: 'What is the origin format of "Italian Brainrot" memes like "Tralalero Tralala"?', o: ['AI-generated surreal animal characters with Italian-sounding names', 'Classic Italian cinema clips', 'Italian cooking shows', 'Soccer commentary clips'], a: 0 },
            { q: 'What does "the ick" refer to in slang?', o: ['A sudden feeling of being turned off by someone', 'A type of dance move', 'A skin condition', 'A video game glitch'], a: 0 },
            { q: 'What does "main character energy" describe?', o: ['Acting confidently like the protagonist of your life', 'Being the villain in a story', 'Playing a video game lead role', 'Writing a screenplay'], a: 0 },
            { q: 'What does "ratio" mean as an internet slang reply?', o: ['Indicating a reply got more engagement than the original post', 'A math equation', 'A cooking measurement', 'A type of meme song'], a: 0 }
        ],
        hard: [
            { q: 'What is the general structural conceit behind most "Italian Brainrot" character memes?', o: ['Absurd hybrid animal/object names with invented mythologies', 'Real Italian historical figures', 'Football player nicknames', 'Restaurant menu items'], a: 0 },
            { q: 'What does "low-effort viral content cycle" generally describe in internet culture analysis?', o: ['Rapid spread of simple, repetitive content with little original substance', 'Documentary-style long-form storytelling', 'Peer-reviewed academic publishing', 'Traditional television rating systems'], a: 0 },
            { q: 'What does "core-stacking" refer to when multiple aesthetic suffixes are combined (e.g., "dark academia cottagecore")?', o: ['Blending multiple stylistic micro-aesthetics together', 'A computer hardware configuration', 'A music production technique', 'A fashion industry term for layering clothes only'], a: 0 },
            { q: 'What distinguishes "copypasta" from a regular meme?', o: ['It is text copied and pasted repeatedly across platforms', 'It is always a video format', 'It requires original art each time', 'It is exclusive to one platform'], a: 0 },
            { q: 'What does the phrase "this you?" typically accompany online?', o: ['A screenshot used to call out hypocrisy or contradiction', 'A compliment on appearance', 'A request for identification', 'A weather update'], a: 0 },
            { q: 'What is the general phenomenon called when AI-generated voices narrate absurd brainrot content?', o: ['AI-narrated meme content / "AI brainrot"', 'Voice acting auditions', 'Podcast production', 'Audiobook narration'], a: 0 },
            { q: 'What does "engagement farming" describe in social media slang?', o: ['Posting content designed mainly to maximize likes/comments', 'Growing actual crops for a living', 'A video game farming simulator', 'A type of investment strategy'], a: 0 },
            { q: 'What does "brain rot" mean in its original, pre-meme dictionary sense?', o: ['Mental dulling from consuming trivial content excessively', 'A literal medical brain disease', 'A type of computer virus', 'A horror movie genre'], a: 0 },
            { q: 'Why are nonsensical naming conventions (e.g. combining unrelated words/sounds) common in brainrot meme characters?', o: ['They are intentionally absurd to maximize shareability and humor', 'They follow strict linguistic rules', 'They are randomly generated by dictionaries', 'They come from translated foreign news'], a: 0 },
            { q: 'What is a key reason short-form "brainrot" content spreads rapidly across platforms?', o: ['Algorithms favor short, highly engaging, easily repeatable content', 'It requires manual approval before sharing', 'It is exclusive to a single app', 'It is promoted only through paid ads'], a: 0 }
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

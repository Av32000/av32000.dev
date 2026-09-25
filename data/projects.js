const projects = [
  {
    id: 4,
    name: "Finance Tracker",
    type: "dev",
    description:
      "Simple tool to monitor bank accounts with cool statistics. Finance Tracker allows you to keep track of every transaction and create useful charts. Organize, analyze and manage your transactions thanks to powerful filters and tags.",
    link: {
      icon: "GitHub.svg",
      text: "Av32000/Finance-Tracker",
      url: "https://github.com/Av32000/Finance-Tracker",
    },
    favorite: 0,
    cover: {
      type: "icon",
      value: "Node.Js.svg",
    },
    cardFields: [
      {
        type: "key",
        key: "Language",
        value: "Typescript",
      },
      {
        type: "key",
        key: "Tools Used",
        value: "React, Tailwind CSS, Chart.js",
      },
      {
        type: "last-commit",
        key: "Last Update",
        value: "Av32000/Finance-Tracker",
      },
      {
        type: "last-release",
        key: "Last Release",
        value: "Av32000/Finance-Tracker",
      },
    ],
    contentBlocks: [
      {
        type: "text",
        value:
          "Finance Tracker is a simple tool to monitor bank accounts. Designed to provide |useful stats|, it includes a powerful and |highly customizable stats editor| to create graphs and diagrams without limits.",
      },
      {
        type: "text",
        value:
          "Self-hosted, you can simply run it with Node.js or the |built-in| Docker container.",
      },
      {
        type: "text",
        value:
          "I’m currently working on adding more navigation shortcuts and expanding features, such as investment management tools.",
      },
      {
        type: "images",
        tags: ["noPrint"],
        value: [
          "finance-tracker/home.png",
          "finance-tracker/transactions.png",
          "finance-tracker/stats-creation.png",
          "finance-tracker/stats-lines.png",
          "finance-tracker/stats-tags.png",
        ],
      },
      {
        type: "images",
        tags: ["printOnly"],
        value: [
          "finance-tracker/home.png",
          "finance-tracker/transactions.png",
          "finance-tracker/stats-lines.png",
          "finance-tracker/stats-tags.png",
        ],
      },
      {
        type: "related",
        value: { types: ["dev"] },
      },
    ],
  },
  {
    id: 2,
    name: "Code Lyoko UHC",
    type: "dev",
    link: {
      icon: "GitHub.svg",
      text: "Av32000/CodeLyoko-UHC",
      url: "https://github.com/Av32000/CodeLyoko-UHC",
    },
    description:
      "Code Lyoko UHC is a UHC Minecraft plugin based on the Code Lyoko universe. Each player is assigned a role corresponding to a character from the series, and must, alone or with allies, eliminate all other players to win the game. Each role has its own powers and characteristics, creating a wide range of possible strategies.",
    favorite: -1,
    cover: {
      type: "icon",
      value: "Java.svg",
    },
    cardFields: [
      {
        type: "key",
        key: "Language",
        value: "Java",
      },
      {
        type: "last-commit",
        key: "Last Update",
        value: "Av32000/CodeLyoko-UHC",
      },
    ],
    contentBlocks: [
      {
        type: "images",
        value: [
          "code-lyoko/cl-config.png",
          "code-lyoko/cl-roles.png",
          "code-lyoko/cl-tower.png",
          "code-lyoko/cl-timer.png",
        ],
      },
      {
        type: "related",
        value: { types: ["dev"] },
      },
    ],
  },
  {
    id: 3,
    name: "Soirée des talents 2025",
    type: "films",
    description:
      "Live production of the annual evening event at Lycée Descartes in Montigny-le-Bretonneux.",
    favorite: 3,
    cover: {
      type: "image",
      value: "sdt.jpg",
    },
    link: {
      icon: "Youtube.svg",
      text: "youtu.be/ESbr3xTVNks",
      url: "https://youtu.be/ESbr3xTVNks",
    },
    cardFields: [
      {
        type: "key",
        key: "Roles",
        value: "Pre-Production / Director / Editing",
      },
      {
        type: "key",
        key: "Date",
        value: "May 2025",
      },
    ],
    contentBlocks: [
      {
        type: "text",
        value:
          "A |2h40 live-recorded| talent show featuring music, dance, theater, and other student performances. With a |full replay| available on YouTube.",
      },
      {
        type: "text",
        value:
          "The project required over |two months of preparation| and involved a |15-person team| handling both technical and coordination roles.",
      },
      {
        type: "text",
        value:
          "A complete live production setup was implemented on site, transforming a |municipal theater| into a |professional multi-camera environment|.",
      },
      {
        type: "text",
        value:
          "Technical setup:\n\n- |ATEM SDI Extreme ISO| for live switching\n- |5 camera positions|\n- |200+ meters| of SDI BNC cabling\n- |7 HDMI ⇄ SDI| Blackmagic converters\n- |Hollyland wireless transmitters|\n- |ISO recording| on all sources\n- Monitoring, audio routing, and intercom systems",
      },
      {
        type: "text",
        value:
          "The objective: deliver a |high-quality stream| that highlights student creativity, with |broadcast-level| reliability and visuals.",
      },
      {
        type: "youtube",
        value: "ESbr3xTVNks",
      },
      {
        type: "images",
        value: [
          "sdt25/584-_NFA4143.jpg",
          "sdt25/590-IMG_2690.jpg",
          "sdt25/596-_NFA4214.jpg",
          "sdt25/live_smoke.jpg",
        ],
      },
      {
        type: "related",
        value: { types: ["films"] },
      },
    ],
  },
  {
    id: 1,
    name: "Roadkill",
    type: "films",
    favorite: 1,
    description:
      "Short film in the form of a making-of for a series written as part of the CNC’s “Écris ta série” competition.",
    cover: {
      type: "image",
      value: "roadkill.webp",
    },
    link: {
      icon: "Youtube.svg",
      text: "youtu.be/8fHyNr-5Uv0",
      url: "https://youtu.be/8fHyNr-5Uv0",
    },
    cardFields: [
      {
        type: "key",
        key: "Roles",
        value: "Pre-Production /  Assistant Director / 1st Camera Assistant",
      },
      {
        type: "key",
        key: "Date",
        value: "2023-2024",
      },
    ],
    contentBlocks: [
      {
        type: "text",
        value:
          "Participation in the “Écris ta série” competition organized by the CNC (Centre National du Cinéma). The objective: to create a production dossier for a series (Universe, Characters, Format, Pilot Episode).",
      },
      {
        type: "text",
        tags: ["noPrint"],
        value:
          "Result: A 98-page dossier available [here](https://drive.google.com/file/d/1AJrSbMOlCBBEu8eNssaGScx55ZLRWFTh/view) and the presentation pitch below.",
      },
      {
        type: "text",
        tags: ["printOnly"],
        value:
          "Result: A 98-page dossier available [here](https://drive.google.com/file/d/1AJrSbMOlCBBEu8eNssaGScx55ZLRWFTh/view) and a presentation video pitch.",
      },
      {
        type: "youtube",
        value: "8fHyNr-5Uv0",
      },
      {
        type: "quote",
        value:
          '"Our series is designed as a project meant to be filmed, not just read. We focused all our efforts and the details in the dossier on the pre-production phase of the series, developing numerous technical documents to anticipate a potential shoot.',
      },
      {
        type: "quote",
        tags: ["noPrint"],
        value:
          "That’s why we chose to create a fake making-of for the series—we genuinely enjoy seeing behind the scenes. This approach allowed us to hold a casting to introduce actresses who match our characters and to place them within the series’ sets. Moreover, since the project is primarily driven by visuals, we used professional equipment, involved friends in our team, and meticulously prepared the shoot.",
      },
      {
        type: "quote",
        tags: ["printOnly"],
        value:
          "That’s e chose to create a fake making-of for the series. Since the project is primarily driven by visuals, we used professional equipment, and meticulously prepared the shoot.",
      },
      {
        type: "quote",
        value:
          "This video is also a way to offer a different perspective than that of the creators, thanks to the input of external contributors such as the actresses and production assistants.",
      },
      {
        type: "quote",
        value:
          'The video pitch will showcase different aspects of the series, including its storyline, while also highlighting our motivations, passion for the project, and the choices and compromises we made." - Extract from the dossier',
      },
      {
        type: "images",
        tags: ["noPrint"],
        value: [
          "roadkill/IMG_5267.jpg",
          "roadkill/IMG_5487.jpg",
          "roadkill/IMG_5566.jpg",
          "roadkill/IMG_9649.jpg",
          "roadkill/IMG_9714.jpg",
        ],
      },
      {
        type: "images",
        tags: ["printOnly"],
        value: [
          "roadkill/IMG_5267.jpg",
          "roadkill/IMG_5566.jpg",
          "roadkill/IMG_9649.jpg",
          "roadkill/IMG_9714.jpg",
        ],
      },
      {
        type: "related",
        value: { types: ["films"] },
      },
    ],
  },
  {
    id: 5,
    name: "View More...",
    type: "more",
    favorite: 5,
    url: "/projects.html",
    cover: {
      type: "text",
      value: "View More...",
    },
  },
  {
    id: 6,
    name: "Kintsugi",
    type: "films",
    description:
      "Short film for which I managed the pre-production, overseeing shoot planning, equipment management, and logistics. This preparatory work helped establish optimal conditions for a smooth and well-structured production on set.",
    favorite: -1,
    cover: {
      type: "image",
      value: "kintsugi.jpg",
    },
    link: {
      icon: "Youtube.svg",
      text: "youtu.be/k6A2jz8GRcg",
      url: "https://youtu.be/k6A2jz8GRcg",
    },
    cardFields: [
      {
        type: "key",
        key: "Roles",
        value: "Pre-Production / Photos",
      },
    ],
    contentBlocks: [
      {
        type: "text",
        value:
          "When Elena looks at her body, all she sees are her burns. She then remembers an art form a friend once told her about: Kintsugi.",
      },
      {
        type: "youtube",
        value: "k6A2jz8GRcg",
      },
      {
        type: "images",
        value: [
          "kintsugi/NFA5400.jpg",
          "kintsugi/NFA6179.jpg",
          "kintsugi/NFA6196.jpg",
          "kintsugi/Derush.00_01_28_17.Still001.webp",
          "kintsugi/Derush.00_33_03_21.Still005.webp",
        ],
      },
      {
        type: "related",
        value: { types: ["films"], optIds: [7] },
      },
    ],
  },
  {
    id: 7,
    name: "Lycée Hotelier",
    type: "photos",
    description: "Photo shoot for Lycée Hotelier of Saint-Quentin en Yvelines",
    favorite: -1,
    link: {
      icon: "Immich.svg",
      text: "av32000.dev/PxdM93bw",
      url: "https://av32000.dev/PxdM93bw",
    },
    cover: {
      type: "image",
      value: "lycee-hotelier.jpg",
    },
    cardFields: [
      {
        type: "key",
        key: "Type",
        value: "Photo Shoot",
      },
      {
        type: "key",
        key: "Camera",
        value: "Sony A7III",
      },
      {
        type: "key",
        key: "Lens",
        value: "Sony 70-200 F4 G OSS Mark 1",
      },
    ],
    contentBlocks: [
      {
        type: "images",
        tags: ["noPrint"],
        value: [
          "lycee-hotelier/NFA3477.jpg",
          "lycee-hotelier/NFA3488.jpg",
          "lycee-hotelier/NFA3502.jpg",
          "lycee-hotelier/NFA3510.jpg",
          "lycee-hotelier/NFA3609.jpg",
          "lycee-hotelier/IMG_0348-Enhanced-NR.jpg",
          "lycee-hotelier/IMG_0456-Enhanced-NR.jpg",
        ],
      },
      {
        type: "images",
        tags: ["printOnly"],
        value: [
          "lycee-hotelier/NFA3477.jpg",
          "lycee-hotelier/NFA3502.jpg",
          "lycee-hotelier/NFA3510.jpg",
          "lycee-hotelier/NFA3609.jpg",
          "lycee-hotelier/IMG_0348-Enhanced-NR.jpg",
          "lycee-hotelier/IMG_0456-Enhanced-NR.jpg",
        ],
      },
      {
        type: "related",
        value: { types: ["photos", "films"] },
      },
    ],
  },
  {
    id: 8,
    name: "Un Regard",
    type: "films",
    favorite: -1,
    description:
      "Short film project for a candidate's application to La CinéFabrique (Lyon film school).",
    cover: {
      type: "image",
      value: "regard.jpg",
    },
    link: {
      icon: "Youtube.svg",
      text: "youtu.be/ndO783qu3pY ",
      url: "https://youtu.be/ndO783qu3pY ",
    },
    cardFields: [
      {
        type: "key",
        key: "Roles",
        value: "Pre-Production / Director’s Assistant / Technical Setup",
      },
      {
        type: "key",
        key: "Date",
        value: "April 2025",
      },
    ],
    contentBlocks: [
      {
        type: "text",
        value:
          "A |short fiction film| produced as part of an application to the prestigious |La CinéFabrique| film school in Lyon.",
      },
      {
        type: "text",
        value:
          "I contributed during the |pre-production phase| and acted as the |assistant director| throughout the shoot, ensuring both |creative continuity| and technical coordination.",
      },
      {
        type: "text",
        value:
          "Innovative camera movement was a key aspect of this project. I designed and built a |custom cablecam system| and developed a |DIY overhead slider rig| using a Ronin mounted on an extended broom handle, allowing smooth movement above a table scene.",
      },
      {
        type: "text",
        value:
          "I also set up a |wireless video monitoring system| using a Raspberry Pi with HDMI capture and transmission, enabling real-time image feedback for the director and crew.",
      },
      {
        type: "text",
        value:
          "The shoot was completed over |three days|, demonstrating strong adaptability and hands-on problem-solving in a resourceful production environment.",
      },
      {
        type: "youtube",
        value: "ndO783qu3pY",
      },
      {
        type: "images",
        value: [
          "regard/1744482048560.jpg",
          "regard/1744482049251.jpg",
          "regard/NFA0810.jpg",
        ],
      },
      {
        type: "related",
        value: { types: ["films"] },
      },
    ],
  },
  {
    id: 9,
    name: "OMCP",
    type: "dev",
    description: "Ollama CLI client to connect LLM to MCP Servers locally",
    favorite: 4,
    cover: {
      type: "icon",
      value: "Rust.svg",
    },
    link: {
      icon: "GitHub.svg",
      text: "Av32000/OMCP",
      url: "https://github.com/Av32000/OMCP",
    },
    cardFields: [
      {
        type: "key",
        key: "Language",
        value: "Rust",
      },
      {
        type: "last-commit",
        key: "Last Update",
        value: "Av32000/OMCP",
      },
      {
        type: "last-release",
        key: "Last Release",
        value: "Av32000/OMCP",
      },
    ],
    contentBlocks: [
      {
        type: "text",
        value:
          "A powerful CLI client that connects [Ollama](https://ollama.com/) language models to [Model Context Protocol](https://modelcontextprotocol.io) (MCP) servers, enabling LLMs to access |external tools| and data sources locally.",
      },
      {
        type: "image",
        value: "omcp/omcp.gif",
      },
      {
        type: "text",
        value: "Features include :",
      },
      {
        type: "text",
        value:
          "|Multiple MCP Server Support|: Connect to MCP servers via STDIO, SSE, and Streamable HTTP transports",
      },
      {
        type: "text",
        value:
          "|Interactive Chat Interface|: Terminal-based chat with real-time streaming responses",
      },
      {
        type: "text",
        value:
          "|Tool Integration|: Automatic discovery and execution of MCP server tools",
      },
      {
        type: "text",
        value:
          "|Model Management|: Built-in Ollama model selection, loading, and pulling",
      },
      {
        type: "text",
        value:
          "|Configurable Settings|: Persistent configuration with JSON-based settings",
      },
      {
        type: "text",
        value:
          "|Batch Mode|: Execute single prompts without entering interactive mode",
      },
      {
        type: "text",
        value:
          "|Tool Control|: Enable/disable tools dynamically during conversations",
      },
      {
        type: "text",
        value:
          "|Thinking Mode|: Display model reasoning process (for supported models)",
      },
      {
        type: "text",
        value:
          "[Available on the AUR](https://aur.archlinux.org/packages/omcp-git): Install via |yay -S omcp-git| on Arch Linux",
      },
      {
        type: "related",
        value: { types: ["dev"] },
      },
    ],
  },
  {
    id: 10,
    name: "Portfolio",
    type: "dev",
    description:
      "My personal portfolio website, showcasing my projects, skills, and experiences.",
    favorite: 2,
    cover: {
      type: "icon",
      value: "favicon.ico",
    },
    link: {
      icon: "GitHub.svg",
      text: "Av32000/av32000.dev",
      url: "https://github.com/Av32000/av32000.dev",
    },
    cardFields: [
      {
        type: "key",
        key: "Language",
        value: "Javascript",
      },
      {
        type: "last-commit",
        key: "Last Update",
        value: "Av32000/av32000.dev",
      },
    ],
    contentBlocks: [
      {
        type: "text",
        value:
          "This portfolio is built in pure |Vanilla JavaScript|, HTML, and CSS. The goal of the project is to create a portfolio not only to showcase my work but also to |demonstrate my development philosophy| and the way I love coding.",
      },
      {
        type: "text",
        value:
          "Every project, skill, and contact info is |rendered dynamically| from a JSON file, allowing easy updates and additions. I can add a new project without having to write a single line of code. |Everything| from the project card, recommendations, and cover to the page you're currently reading is |generated| in JavaScript.",
      },
      {
        type: "text",
        value:
          "I love the idea of coding everything in a |modular way|. I love to |take the time| to write a complex and robust base |structure| to achieve a powerful and flexible architecture.",
      },
      {
        type: "text",
        value:
          "I created a |building blocks| system that allows me to add new projects without locking myself into a specific structure. I can add |new projects| with different content, different covers, different card fields, etc...",
      },
      {
        type: "text",
        tags: ["noPrint"],
        value:
          "The code is available on [GitHub](https://github.com/Av32000/av32000.dev), so you can read it and discover my coding philosophy.",
      },
      {
        type: "text",
        tags: ["printOnly"],
        value:
          "This is an automatic export from the website. The code is available on [GitHub](https://github.com/Av32000/av32000.dev), so you can read it and discover my coding philosophy.",
      },
      {
        type: "images",
        tags: ["noPrint"],
        value: [
          "portfolio/render-components.png",
          "portfolio/js-folder.png",
          "portfolio/content-blocks.png",
          "portfolio/portfolio-json.png",
          "portfolio/skills-json.png",
        ],
      },
      {
        type: "related",
        value: { types: ["dev"] },
      },
    ],
  },
];
